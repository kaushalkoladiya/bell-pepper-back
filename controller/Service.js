const { validationResult } = require("express-validator"); // import
const Service = require("../model/Service"); // import

// for create new record in db
exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
        name: error.param,
      }));
      throw err;
    }

    if (req.isImageTypeInvalid) {
      const err = new Error("Invalid image type");
      err.status = 422;
      throw err;
    } else if (!req.file || !req.file.path) {
      const err = new Error("Validation Error");
      err.status = 422;
      throw err;
    }

    const service = await Service.create({
      ...req.body,
      image: req.file.path,
    });

    return res.status(200).json({
      status: 200,
      messages: "Success",
      data: { service },
    });
  } catch (error) {
    next(error);
  }
};
