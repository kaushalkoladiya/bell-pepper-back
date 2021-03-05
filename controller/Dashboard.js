const {
  Booking,
  Service,
  Staff,
  User,
  Vendor,
  Banner,
  Category,
  Tutorial,
  Video,
} = require("../model");

exports.counts = async (req, res, next) => {
  try {
    let data = {
      showBanners: false,
      showBookings: false,
      showCategories: false,
      showServices: false,
      showStaffs: false,
      showTutorials: false,
      showUsers: false,
      showVendors: false,
      showVideos: false,
    };
    if (req.userType === "ROOT_USER") {
      const bookings = (await Booking.find({ deletedAt: null })).length;
      const services = (await Service.find({ deletedAt: null })).length;
      const staffs = (await Staff.find({ deletedAt: null })).length;
      const users = (await User.find({ deletedAt: null })).length;
      const vendors = (await Vendor.find({ deletedAt: null })).length;
      const banners = (await Banner.find({ deletedAt: null })).length;
      const categories = (await Category.find({ deletedAt: null })).length;
      const tutorials = (await Tutorial.find({ deletedAt: null })).length;
      const videos = (await Video.find({ deletedAt: null })).length;

      data = {
        showBanners: true,
        banners,
        showCategories: true,
        categories,
        showTutorials: true,
        tutorials,
        showVideos: true,
        videos,
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
