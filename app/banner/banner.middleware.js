const Banner = require("./banner.model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Banner.exists({
      _id: req.body.bannerId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Banner not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};