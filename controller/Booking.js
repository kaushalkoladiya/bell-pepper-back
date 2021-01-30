const { validationResult } = require("express-validator");
const { Service, Booking, Vendor, Staff } = require("../model");
const mongoose = require("mongoose");

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
