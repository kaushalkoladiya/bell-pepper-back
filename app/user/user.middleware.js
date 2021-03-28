const User = require("./user.model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await User.exists({
      _id: req.body.userId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Customer not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
