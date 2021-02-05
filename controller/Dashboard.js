const { Booking, Service, Staff, User, Vendor } = require("../model");

exports.counts = async (req, res, next) => {
  try {
    const bookings = await Booking.countDocuments();
    const services = await Service.countDocuments();
    const staffs = await Staff.countDocuments();
    const users = await User.countDocuments();
    const vendors = await Vendor.countDocuments();

    res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        bookings,
        services,
        staffs,
        users,
        vendors,
      },
    });
  } catch (error) {
    next(error);
  }
};
