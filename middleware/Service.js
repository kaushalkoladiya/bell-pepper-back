const { Service } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Service.exists({
      _id: req.serviceId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Service not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
