const { Booking, User } = require("../model");

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

exports.customer = async (req, res, next) => {
  try {
    const reqObj = req.body;
    const match = {
      $match: {
        createdAt: {
          $gte: new Date(reqObj.startDate),
          $lte: new Date(reqObj.endDate),
        },
      },
    };

    const group = {
      $group: {
        _id: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    };

    const sort = { $sort: { "_id.year": 1, "_id.month": 1 } };

    const customersAnalytics = await User.aggregate([match, group, sort]);
    // const bookingAnalytics = await Booking.aggregate([match, group, sort]);

    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const customers = customersAnalytics.map((item) => ({
      month: month[item._id.month - 1],
      year: item._id.year,
      count: item.count,
      date: `${month[item._id.month - 1]}, ${item._id.year}`,
    }));

    // const bookings = bookingAnalytics.map((item) => ({
    //   month: month[item._id.month - 1],
    //   year: item._id.year,
    //   count: item.count,
    //   date: `${month[item._id.month - 1]}, ${item._id.year}`,
    // }));

    return res.status(200).json({
      status: 200,
      message: "Get customers analytic successfully!",
      data: { customers },
    });
  } catch (error) {
    return next(error);
  }
};

/*
 * Home many customers booked daily
 * How many hours worked per day (all staff)
 * Overall worker report of hour
 * Total daily bookings
 */
