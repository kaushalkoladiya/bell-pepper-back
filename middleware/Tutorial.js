const { Tutorial } = require("../model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Tutorial.exists({
      _id: req.tutorialId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Tutorial not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
