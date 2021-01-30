const { validationResult } = require("express-validator");
const { Service, Booking, Vendor } = require("../model");

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
