const { Booking } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Booking.exists({
      _id: req.body.bookingId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Booking not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
