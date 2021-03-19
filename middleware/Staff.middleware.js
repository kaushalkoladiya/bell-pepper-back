const { Staff } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Staff.exists({
      _id: req.body.staffId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Staff not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
