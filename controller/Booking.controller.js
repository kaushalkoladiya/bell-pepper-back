const { validationResult } = require("express-validator");
const { Service, Booking, Vendor, Staff, User, Address } = require("../model");
const StaffJobController = require("./StaffJob.controller");
const StaffController = require("./Staff.controller");
const mongoose = require("mongoose");
const faker = require("faker");

const isAddressBelongsToUser = async (userId, addressId) =>
  await Address.exists({
    userId,
    _id: addressId,
  });

exports.index = async (req, res, next) => {
  try {
    let condition = { deletedAt: null };
    if (req.userType !== "ROOT_USER") condition.vendorId = req.userId;
    const bookings = await getFilteredBooking(condition);

    return res.status(200).json({
      status: 200,
      message: "Get all bookings successfully!",
      data: {
        bookings,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.indexByVendor = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking({
      vendorId: req.params.vendorId,
    });

    return res.status(200).json({
      status: 200,
      message: "Get all bookings successfully!",
      data: {
        bookings,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.indexByService = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking({
      serviceId: req.params.serviceId,
    });

    return res.status(200).json({
      status: 200,
      message: "Get all bookings successfully!",
      data: {
        bookings,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.indexByUser = async (req, res, next) => {
  try {
    const _bookings = await getFilteredBooking({ userId: req.params.userId });

    const bookings = _bookings.map((item) => {
      let status = "Pending";
      if (item.isDone) status = "Completed";
      if (item.staffId) status = "Assigned";
      return {
        serviceName: item.serviceId ? item.serviceId.title : null,
        frequency: item.frequency,
        startDate: item.date,
        startTime: item.time,
        howManyHours: item.howManyHours,
        instructions: item.description,
        isMaterialRequired: item.isMaterialRequired,
        numberOfProfessions: item.howManyProfessions,
        staffDetails: {
          name: item.staffId ? item.staffId.name : null,
          about: item.staffId ? item.staffId.about : null,
          email: item.staffId ? item.staffId.email : null,
          mobile: item.staffId ? item.staffId.mobile : null,
          image: item.staffId ? item.staffId.image : null,
          gender: item.staffId ? item.staffId.gender : null,
          age: item.staffId ? item.staffId.age : null,
          nationality: item.staffId ? item.staffId.nationality : null,
        },
        isCancelled: item.isCancelled,
        isFinished: item.isDone,
        status,
        createdAt: item.createdAt,
        address: {
          city: item.addressId.city ? item.addressId.city : null,
          houseNumber: item.addressId.houseNumber
            ? item.addressId.houseNumber
            : null,
          zipCode: item.addressId.zipCode ? item.addressId.zipCode : null,
          state: item.addressId.state ? item.addressId.state : null,
        },
      };
    });

    return res.status(200).json({
      status: 200,
      message: "Get all bookings successfully!",
      data: {
        bookings,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const reqObj = req.body;

    const hasStaffAvailable = await StaffController.checkStaffAvailability(
      formatDate(
        Number(reqObj.year),
        Number(reqObj.month),
        Number(reqObj.date),
        Number(reqObj.hour),
        Number(reqObj.minute)
      ),
      reqObj.staffId
    );

    if (!hasStaffAvailable) {
      const err = new Error("Staff slot not available");
      err.status = 422;
      throw err;
    }

    const serviceId = reqObj.serviceId,
      userId = reqObj.userId,
      addressId = reqObj.addressId,
      staffId = reqObj.staffId;

    const isServiceExist = await Service.findById(serviceId);
    if (!isServiceExist) {
      const err = new Error("Service not found");
      err.status = 404;
      throw err;
    }

    const isAddressBelongsToUser = await Address.exists({
      userId,
      _id: addressId,
    });

    if (!isAddressBelongsToUser) {
      const err = new Error("This address is not belonging to you!");
      err.status = 422;
      throw err;
    }

    const user = await User.findById(userId);
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }

    if (!user.activeAddress && user.addresses.length === 0) {
      const err = new Error("Please choose one address.");
      err.status = 422;
      throw err;
    }

    const startDate = formatDate(
      Number(reqObj.year),
      Number(reqObj.month),
      Number(reqObj.date),
      Number(reqObj.hour),
      Number(reqObj.minute)
    );

    if (!startDate.getTime) {
      const err = new Error("Invalid date");
      err.status = 422;
      throw err;
    }

    const endDate = new Date(startDate).setHours(
      startDate.getHours() + reqObj.howManyHours
    );

    let bookingData = {
      serviceId: reqObj.serviceId,
      userId: reqObj.userId,
      addressId: reqObj.addressId,
      description: reqObj.description,
      isMaterialRequired: reqObj.isMaterialRequired,
      frequency: reqObj.frequency,
      howManyHours: reqObj.howManyHours,
      howManyProfessions: reqObj.howManyProfessions,
      startDate,
      endDate,
    };

    let staff = false;

    if (staffId) {
      staff = await Staff.findById(staffId);
      if (!staff) {
        const err = new Error("Staff not found");
        err.status = 404;
        throw err;
      }

      bookingData.staffId = staff._id;
      bookingData.vendorId = staff.vendorId;
    }

    const booking = await Booking.create(bookingData);

    if (staff) {
      await StaffJobController.store(
        staff._id,
        booking._id,
        startDate,
        endDate,
        false
      );
    }

    return res.status(200).json({
      status: 200,
      message: "Booking created successfully!",
      data: { booking },
    });
  } catch (error) {
    return next(error);
  }
};

exports.assignStaff = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const booking = await Booking.findById(req.body.bookingId);
    if (!booking) {
      const err = new Error("Booking not found");
      err.status = 404;
      throw err;
    }

    const staff = await Staff.findById(req.body.staffId);
    if (!staff) {
      const err = new Error("Staff not found");
      err.status = 404;
      throw err;
    }

    booking.staffId = mongoose.Types.ObjectId(req.body.staffId);
    await booking.save();

    if (staff) {
      await StaffJobController.store(
        staff._id,
        booking._id,
        booking.startDate,
        booking.endDate,
        false
      );
    }

    return res.status(200).json({
      status: 200,
      message: "Staff assign successfully.",
      data: {
        booking: {
          ...booking._doc,
          staffId: staff,
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.assignVendor = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const booking = await Booking.findById(req.body.bookingId);
    if (!booking) {
      const err = new Error("Booking not found");
      err.status = 404;
      throw err;
    }

    const vendor = await Vendor.findById(req.body.vendorId);
    if (!vendor) {
      const err = new Error("Vendor not found");
      err.status = 404;
      throw err;
    }

    booking.vendorId = mongoose.Types.ObjectId(req.body.vendorId);
    await booking.save();

    return res.status(200).json({
      status: 200,
      message: "Vendor assign successfully.",
      data: {
        booking: {
          ...booking._doc,
          vendorId: vendor,
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.removeStaff = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const booking = await Booking.findById(req.body.bookingId);
    if (!booking) {
      const err = new Error("Booking not found");
      err.status = 404;
      throw err;
    }

    const staff = await Staff.findById(booking.staffId);
    if (!staff) {
      const err = new Error("Staff not found");
      err.status = 404;
      throw err;
    }

    booking.isDone = true;
    booking.doneOn = new Date().toISOString();
    await booking.save();

    const staffJob = await StaffJob.findOne({ bookingId: booking._id });

    await StaffJobController.markAsCompleted(staffJob._id);

    return res.status(200).json({
      status: 200,
      message: "Staff remove successfully.",
      data: {},
    });
  } catch (error) {
    return next(error);
  }
};

const getFilteredBooking = async (filter = {}) =>
  await Booking.find(filter)
    .sort({ createdAt: -1 })
    .populate([
      {
        path: "userId",
        model: "User",
      },
      {
        path: "vendorId",
        model: "Vendor",
      },
      {
        path: "serviceId",
        model: "Service",
      },
      {
        path: "staffId",
        model: "Staff",
      },
      {
        path: "addressId",
        model: "Address",
      },
    ]);

exports.faker = async (req, res, next) => {
  try {
    const bookingArray = [];
    const length = req.query.count || 5;

    const serviceArray = await Service.find().select("_id");
    const userArray = await User.find().select("_id");

    for (let index = 0; index < length; index++) {
      const len =
        serviceArray.length < userArray.length
          ? serviceArray.length
          : userArray.length;

      const i = Math.floor(Math.random() * len);

      bookingArray.push({
        serviceId: serviceArray[i]._id,
        userId: userArray[i]._id,
        description: faker.random.words(10),
        howManyHours: faker.random.number(5),
        howManyProfessions: faker.random.number(5),
        date: faker.date.past(),
        time: faker.date.past(),
        createdAt: faker.date.past(),
      });
    }
    await Booking.insertMany(bookingArray);

    res.status(200).json({
      status: 200,
      message: "Booking fackings successfully!",
      data: { bookings: bookingArray },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, {
      deletedAt: new Date().toISOString(),
    });

    return res.status(200).send({
      status: 200,
      message: "Booking deleted successfully!",
      data: {},
    });
  } catch (error) {
    return next(error);
  }
};

exports.changeAddress = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const reqObj = req.body;

    const userId = reqObj.userId,
      addressId = reqObj.addressId,
      bookingId = reqObj.bookingId;

    if (!(await isAddressBelongsToUser(userId, addressId))) {
      const err = new Error("This address is not belonging to you!");
      err.status = 422;
      throw err;
    }

    const booking = await Booking.findById({ _id: bookingId, userId });

    booking.addressId = addressId;
    await booking.save();

    return res.status(200).json({
      status: 200,
      message: "Address changed successfully!",
      data: { booking },
    });
  } catch (error) {
    return next(error);
  }
};

const formatDate = (
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  date = 1,
  hour = 0,
  minute = 0
) => new Date(year, month - 1, date, hour, minute, 0);

const addZero = (value) => {
  let val = "0" + value;
  if (val.length >= 3) {
    val = val.substr(1);
  }
  return Number(val) - 1;
};
