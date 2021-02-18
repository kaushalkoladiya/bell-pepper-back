const { Booking, Service, Staff, User, Vendor } = require("../model");

exports.counts = async (req, res, next) => {
  try {
    let data = {
      showBookings: false,
      showServices: false,
      showStaffs: false,
      showUsers: false,
      showVendors: false,
    };
    if (req.userType === "ROOT_USER") {
      const bookings = await Booking.countDocuments();
      const services = await Service.countDocuments();
      const staffs = await Staff.countDocuments();
      const users = await User.countDocuments();
      const vendors = await Vendor.countDocuments();

      data = {
        showBookings: true,
        bookings,
        showServices: true,
        services,
        showStaffs: true,
        staffs,
        showUsers: true,
        users,
        showVendors: true,
        vendors,
      };
    } else if (req.userType === "VENDOR_USER") {
      const bookings = await Booking.find({
        vendorId: req.userId,
      }).count();
      const staffs = await Staff.find({
        vendorId: req.userId,
      }).count();
      data = {
        showBookings: true,
        bookings,
        showStaffs: true,
        staffs,
      };
    }

    return res.status(200).json({
      status: 200,
      message: "Get dashboard information successfully!",
      data,
    });
  } catch (error) {
    return next(error);
  }
};
