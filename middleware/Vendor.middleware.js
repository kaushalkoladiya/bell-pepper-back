const { Vendor } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Vendor.exists({
      _id: req.body.vendorId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Vendor not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
