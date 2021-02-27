const { Category } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Category.exists({
      _id: req.categoryId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Category not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
