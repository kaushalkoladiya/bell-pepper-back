const { validationResult } = require("express-validator");
// const Service = require("../model/Service");
const { Service, Vendor } = require("../model");

const faker = require("faker");

exports.index = async (req, res, next) => {
  try {
    const services = await Service.find().populate("vendorId");

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        services,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.indexByVendorId = async (req, res, next) => {
  try {
    const services = await Service.find({ vendorId: req.params.vendorId });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        services,
      },
    });
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
      const err = new Error("Validation Error (Image Required)");
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

exports.faker = async (req, res, next) => {
  try {
    const serviceArray = [];
    const length = req.query.count || 5;
    const vendorArray = await Vendor.find().select("_id");

    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * vendorArray.length);

      serviceArray.push({
        vendorId: vendorArray[i]._id,
        price: faker.random.number(),
        title: faker.random.word(),
        description: faker.random.words(10),
        image: faker.image.fashion(),
      });
    }
    await Service.insertMany(serviceArray);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { Services: serviceArray },
    });
  } catch (error) {
    next(error);
  }
};
