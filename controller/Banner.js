const { deleteFile, deleteReqFile, BASE_URL } = require("../helper");
const { Banner } = require("../model");

exports.index = async (req, res, next) => {
  try {
    const banners = await Banner.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Get all banners successfully!",
      data: {
        banners,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    if (!req.file) {
      const err = new Error("Invalid image file");
      err.status = 422;
      throw err;
    }
    const banner = await Banner.create({ image: BASE_URL + req.file.path });

    return res
      .status(200)
      .json({
        status: 200,
        message: "Banner created successfully!",
        data: { banner },
      });
  } catch (error) {
    console.log(error);
    deleteReqFile(req);
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    await Banner.findByIdAndUpdate(req.params.bannerId, {
      deletedAt: new Date().toISOString(),
    });

    return res
      .status(200)
      .json({ status: 200, message: "Banner deleted successfully!", data: {} });
  } catch (error) {
    return next(error);
  }
};

exports.toggleShow = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.bannerId);
    if (!banner) {
      const err = new Error("Banner not found");
      err.status = 404;
      throw err;
    }

    banner.show = !banner.show;
    await banner.save();

    return res.status(200).json({
      status: 200,
      message: "Change visibility successfully!",
      data: { banner },
    });
  } catch (error) {
    return next(error);
  }
};

exports.toggleIsLive = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.bannerId);
    if (!banner) {
      const err = new Error("Banner not found");
      err.status = 404;
      throw err;
    }

    banner.isLive = !banner.isLive;
    await banner.save();

    return res.status(200).json({
      status: 200,
      message: "Change live visibility successfully!",
      data: { banner },
    });
  } catch (error) {
    return next(error);
  }
};
