const Video = require("./video.model");

module.exports = async (req, res, next) => {
  try {
    const isExist = await Video.exists({
      _id: req.body.videoId,
      deletedAt: null,
    });

    if (!isExist) {
      const err = new Error("Video not found!");
      err.status = 404;
      throw err;
    }
    return next();
  } catch (error) {
    next(error);
  }
};
