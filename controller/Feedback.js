const { validationResult } = require("express-validator");
const { Feedback } = require("../model");

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const feedback = await Feedback.create({
      bookingId: req.body.bookingId,
      serviceId: req.body.serviceId,
      userId: req.body.userId,
      description: req.body.description,
      star: req.body.star,
    });

    return res.status(200).json({
      status: 200,
      message: "Feedback stored item successfully!",
      data: { feedback },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    await Feedback.findByIdAndUpdate(req.params.reviewId, {
      deletedAt: new Date().toISOString(),
    });
    return res.status(200).json({
      status: 200,
      message: "Feedback deleted item successfully!",
      data: {},
    });
  } catch (error) {
    return next(error);
  }
};
