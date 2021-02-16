const { validationResult } = require("express-validator");

const { deleteFile, deleteReqFile, BASE_URL } = require("../helper");
const { Video } = require("../model");

exports.index = async (req, res, next) => {
  try {
    const videos = await Video.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res
      .status(200)
      .json({ status: 200, message: "Success", data: { videos } });
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    if (!req.file) {
      const err = new Error("Invalid video file");
      err.status = 422;
      throw err;
    }

    const video = await Video.create({
      tutorialId: req.body.tutorialId,
      title: req.body.title,
      url: BASE_URL + req.file.path,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { video },
    });
  } catch (error) {
    deleteReqFile(req);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const videoData = {
      tutorialId: req.body.tutorialId,
      title: req.body.title,
    };

    if (req.file) {
      videoData.url = BASE_URL + req.file.path;
    }

    const video = await Video.findByIdAndUpdate(req.params.videoId, videoData, {
      new: true,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { video },
    });
  } catch (error) {
    deleteReqFile(req);
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.videoId);
    deleteFile(video.url);
    return res.status(200).json({ status: 200, message: "Success", data: {} });
  } catch (error) {
    next(error);
  }
};
