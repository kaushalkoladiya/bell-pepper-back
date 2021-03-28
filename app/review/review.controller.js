const faker = require("faker");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
// models
const Review = require("./review.model");
const Booking = require("../booking/booking.model");
const Staff = require("../staff/staff.model");
const Service = require("../service/service.model");

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const reqObj = req.body;
    const serviceId = reqObj.serviceId;

    const booking = await Booking.findById(reqObj.bookingId);

    const review = await Review.create({
      bookingId: reqObj.bookingId,
      staffId: booking.staffId,
      serviceId,
      userId: reqObj.userId,
      star: reqObj.star,
      description: reqObj.description,
    });

    const staffAvgRating = await calculateRating("staffId", booking.staffId);
    const serviceAvgRating = await calculateRating("serviceId", serviceId);

    const staff = await Staff.findById(booking.staffId);
    staff.stars = staffAvgRating;
    await staff.save();

    const service = await Service.findById(serviceId);
    service.stars = serviceAvgRating;
    await service.save();

    return res.status(200).json({
      status: 200,
      message: "Review stored item successfully!",
      data: { review },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    await Review.findByIdAndUpdate(req.params.reviewId, {
      deletedAt: new Date().toISOString(),
    });
    return res.status(200).json({
      status: 200,
      message: "Review deleted item successfully!",
      data: {},
    });
  } catch (error) {
    return next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const length = req.query.count || 5;

    const bookingsArray = await Booking.find().where({
      staffId: { $ne: null },
    });

    const reviewArray = [];

    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * bookingsArray.length);

      reviewArray.push({
        bookingId: bookingsArray[i]._id,
        staffId: bookingsArray[i].staffId,
        serviceId: bookingsArray[i].serviceId,
        userId: bookingsArray[i].userId,
        star: faker.random.number(5),
        description: faker.random.words(5),
      });
    }

    await Review.insertMany(reviewArray);

    return res.status(200).json({
      status: 200,
      message: "Faker done",
      data: { reviewArray },
    });
  } catch (error) {
    return next(error);
  }
};

const calculateRating = async (type, id) => {
  const match = {
    $match: {
      [type]: mongoose.Types.ObjectId(id),
      star: {
        $gt: 0,
      },
    },
  };

  const group = {
    $group: {
      _id: {
        star: "$star",
      },
      totalStars: { $sum: "$star" },
      count: { $sum: 1 },
    },
  };

  const data = await Review.aggregate([match, group]);

  let totalStars = 0,
    totalCounts = 0;

  data.map((item) => {
    totalStars += item.totalStars;
    totalCounts += item.count;
    return {
      star: item._id.star,
      count: item.count,
      totalStars: item.totalStars,
    };
  });

  return totalStars / totalCounts;
};
