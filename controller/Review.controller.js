const { validationResult } = require("express-validator");
const { Review, Booking } = require("../model");
const faker = require("faker");

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const booking = await Booking.findById(req.body.bookingId);

    const review = await Review.create({
      bookingId: req.body.bookingId,
      staffId: booking.staffId,
      serviceId: req.body.serviceId,
      userId: req.body.userId,
      star: req.body.star,
      description: req.body.description,
    });

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
