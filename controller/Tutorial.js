const { validationResult } = require("express-validator");
const { deleteFile, deleteReqFile, BASE_URL } = require("../helper");
const { Tutorial } = require("../model");

exports.index = async (req, res, next) => {
  try {
    const tutorials = await Tutorial.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res
      .status(200)
      .json({ status: 200, message: "Success", data: { tutorials } });
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
      const err = new Error("Invalid image file");
      err.status = 422;
      throw err;
    }

    const tutorial = await Tutorial.create({
      title: req.body.title,
      image: BASE_URL + req.file.path,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { tutorial },
    });
  } catch (error) {
    console.log(error);
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

    const tutorialData = {
      title: req.body.title,
    };

    if (req.file) {
      tutorialData.image = BASE_URL + req.file.path;
    }

    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.tutorialId,
      tutorialData,
      { new: true }
    );

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { tutorial },
    });
  } catch (error) {
    deleteReqFile(req);
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.tutorialId);
    deleteFile(tutorial.image);
    return res.status(200).json({ status: 200, message: "Success", data: {} });
  } catch (error) {
    next(error);
  }
};
