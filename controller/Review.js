const { validationResult } = require("express-validator");
const { Review } = require("../model");

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const review = await Review.create({
      bookingId: req.body.bookingId,
      serviceId: req.body.serviceId,
      userId: req.body.userId,
      star: req.body.star,
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
