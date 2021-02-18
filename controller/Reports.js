const { validationResult } = require("express-validator");
// const Service = require("../model/Service");
const { Service, Vendor, Booking, Category } = require("../model");

const faker = require("faker");

exports.dailyBooking = async (req, res, next) => {
  try {
    const reqObj = req.body;
    var booking;
    if (reqObj.vendorId) {
      booking = await Booking.find({ vendorId: reqObj.vendorId });
    } else if (reqObj.startDate && reqObj.endDate) {
      let a = [];
      a[reqObj.by] = {
        $gte: new Date(reqObj.startDate),
        $lt: new Date(reqObj.endDate),
      };
      console.log(Object.assign({}, a));

      booking = await Booking.find(Object.assign({}, a));
    } else {
      booking = await Booking.aggregate([
        {
          $group: {
            _id: {
              day: { $substr: ["$" + reqObj.by, 8, 2] },
              month: { $substr: ["$" + reqObj.by, 5, 2] },
              year: { $substr: ["$" + reqObj.by, 0, 4] },
            },
            count: { $sum: 1 },
          },
        },
      ]);
    }

    return res.status(200).json({
      status: 200,
      message: "Get daily bookings analytics successfully!",
      data: {
        booking,
      },
    });
  } catch (error) {
    return next(error);
  }
};
