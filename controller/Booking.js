const { validationResult } = require("express-validator");
const { Service, Booking, Vendor, Staff, User } = require("../model");
const mongoose = require("mongoose");
const faker = require("faker");

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
      if (item.profession) status = "Assigned";
      return {
        serviceName: item.serviceId.title,
        frequency: item.frequency,
        startDate: item.date,
        startTime: item.time,
        howManyHours: item.howManyHours,
        instructions: item.description,
        isMaterialRequired: item.isMaterialRequired,
        numberOfProfessions: item.howManyProfessions,
        staffDetails: {
          name: item.profession ? item.profession.name : null,
          about: item.profession ? item.profession.about : null,
          email: item.profession ? item.profession.email : null,
          mobile: item.profession ? item.profession.mobile : null,
          image: item.profession ? item.profession.image : null,
          gender: item.profession ? item.profession.gender : null,
          age: item.profession ? item.profession.age : null,
          nationality: item.profession ? item.profession.nationality : null,
        },
        isCancelled: item.isCancelled,
        isFinished: item.isDone,
        status,
        createdAt: item.createdAt,
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

    const vendorId = req.body.vendorId,
      serviceId = req.body.serviceId,
      userId = req.body.userId,
      staffId = req.body.staffId;

    const isServiceExist = await Service.findById(serviceId);
    if (!isServiceExist) {
      const err = new Error("Service not found");
      err.status = 404;
      throw err;
    }

    const isUserExist = await User.findById(userId);
    if (!isUserExist) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }

    let bookingData = {
      serviceId: req.body.serviceId,
      userId: req.body.userId,
      description: req.body.description,
      isMaterialRequired: req.body.isMaterialRequired,
      frequency: req.body.frequency,
      howManyHours: req.body.howManyHours,
      howManyProfessions: req.body.howManyProfessions,
      date: req.body.date,
      time: req.body.time,
    };

    if (staffId) {
      const staff = await Staff.findById(staffId);
      if (!staff) {
        const err = new Error("Staff not found");
        err.status = 404;
        throw err;
      }

      bookingData.staffId = staff._id;
      bookingData.profession = staff._id;
      bookingData.vendorId = staff.vendorId;
    }
    // const vendorId = req.body.vendorId,
    //   serviceId = req.body.serviceId;

    // const hasVendor = await Vendor.findById(vendorId);
    // if (!hasVendor) {
    //   const err = new Error("Vendor not found");
    //   err.status = 404;
    //   throw err;
    // }

    // const hasService = await Service.exists({ _id: serviceId, vendorId });
    // if (!hasService) {
    //   const err = new Error(
    //     "This Service is not belonging to specified Vendor!"
    //   );
    //   err.status = 404;
    //   throw err;
    // }

    const booking = await Booking.create(bookingData);

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

    // // do this condition to not (if not).
    // if (!staff.isAvailable) {
    //   const err = new Error("Staff is not available!");
    //   err.status = 422;
    //   throw err;
    // }

    booking.profession = mongoose.Types.ObjectId(req.body.staffId);
    await booking.save();

    staff.isAvailable = false;
    await staff.save();

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

    const staff = await Staff.findById(booking.profession);
    if (!staff) {
      const err = new Error("Staff not found");
      err.status = 404;
      throw err;
    }

    booking.isDone = true;
    booking.doneOn = new Date().toISOString();
    await booking.save();

    staff.isAvailable = true;
    await staff.save();

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
        path: "profession",
        model: "Staff",
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
