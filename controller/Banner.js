const { deleteFile, deleteReqFile } = require("../helper");
const { Banner } = require("../model");

exports.index = async (req, res, next) => {
  try {
    const banners = await Banner.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        banners,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    if (!req.file) {
      const err = new Error("Invalid image file");
      err.status = 422;
      throw err;
    }
    const banner = await Banner.create({ image: req.file.path });

    return res
      .status(200)
      .json({ status: 200, message: "Success", data: { banner } });
  } catch (error) {
    console.log(error);
    deleteReqFile(req);
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.bannerId);
    if (!banner) {
      const err = new Error("Not found");
      err.status = 404;
      throw err;
    }

    deleteFile(banner.image);
    await banner.deleteOne();

    return res
      .status(200)
      .json({ status: 200, message: "Success", data: { banner } });
  } catch (error) {
    next(error);
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
    next(error);
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
    next(error);
  }
};
