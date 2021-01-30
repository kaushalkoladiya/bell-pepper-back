const { validationResult } = require("express-validator");
const { Service, Booking, Vendor, Staff, User } = require("../model");
const mongoose = require("mongoose");
const faker = require("faker");

exports.index = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking();

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        bookings,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.indexByVendor = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking({
      vendorId: req.params.vendorId,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        bookings,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.indexByService = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking({
      serviceId: req.params.serviceId,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        bookings,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.indexByUser = async (req, res, next) => {
  try {
    const bookings = await getFilteredBooking({ userId: req.params.userId });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        bookings,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const vendorId = req.body.vendorId,
      serviceId = req.body.serviceId;

    const hasVendor = await Vendor.findById(vendorId);
    if (!hasVendor) {
      const err = new Error("Vendor not found");
      err.status = 404;
      throw err;
    }

    const hasService = await Service.exists({ _id: serviceId, vendorId });
    if (!hasService) {
      const err = new Error(
        "This Service is not belonging to specified Vendor!"
      );
      err.status = 404;
      throw err;
    }

    const booking = await Booking.create(req.body);

    return res.status(200).json({
      status: 200,
      messages: "Success",
      data: { booking },
    });
  } catch (error) {
    next(error);
  }
};

exports.assignStaff = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
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

    // inverse this condition to not (if not).
    if (!staff.isAvailable) {
      const err = new Error("Staff not available!");
      err.status = 422;
      throw err;
    }

    booking.profession = mongoose.Types.ObjectId(req.body.staffId);
    await booking.save();

    staff.isAvailable = false;
    await staff.save();

    return res.status(200).json({
      status: 200,
      messages: "Staff assign successfully.",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

exports.removeStaff = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
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
      messages: "Staff remove successfully.",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const getFilteredBooking = async (filter = {}) =>
  await Booking.find(filter).populate([
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
  ]);

exports.faker = async (req, res, next) => {
  try {
    const bookingArray = [];
    const length = req.query.count || 5;

    const serviceArray = await Service.find().select("_id vendorId");
    const userArray = await User.find().select("_id");

    for (let index = 0; index < length; index++) {
      const len =
        serviceArray.length < userArray.length
          ? serviceArray.length
          : userArray.length;

      const i = Math.floor(Math.random() * len);

      bookingArray.push({
        vendorId: serviceArray[i].vendorId,
        serviceId: serviceArray[i]._id,
        userId: userArray[i]._id,
        description: faker.random.words(10),
        howManyHours: faker.random.number(5),
        howManyProfessions: faker.random.number(5),
        date: faker.date.past(),
        time: faker.date.past(),
      });
    }
    await Booking.insertMany(bookingArray);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { bookings: bookingArray },
    });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).send({
        message: "Can't Found Id",
      });
    }
    res.send({ message: "Booking deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
