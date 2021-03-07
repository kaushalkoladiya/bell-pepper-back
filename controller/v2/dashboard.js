const { Banner, Category, Service } = require("../../model");

exports.dashboard = async (req, res, next) => {
  try {
    const banners = await Banner.find({ deletedAt: null, show: true });
    const mainServices = await Category.find({ deletedAt: null });
    const bestOffers = await Service.find({ deletedAt: null, show: true });
    return res.status(200).json({
      status: 200,
      message: "Get dashboard data",
      data: {
        showBanner: true,
        showMainServices: true,
        showBestOffers: true,
        banners,
        mainServices,
        bestOffers,
      },
    });
  } catch (error) {
    return next(error);
  }
};
