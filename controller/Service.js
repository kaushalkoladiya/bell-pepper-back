const { validationResult } = require("express-validator");
const { BASE_URL } = require("../helper");
const { Service, Vendor, Booking, Category } = require("../model");

const faker = require("faker");

exports.index = async (req, res, next) => {
  try {
    const services = await Service.find({ deletedAt: null })
      .populate("categoryId")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: 200,
      message: "Get all services successfully!",
      data: {
        services,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.indexByVendorId = async (req, res, next) => {
  try {
    const services = await Service.find({ vendorId: req.params.vendorId });

    return res.status(200).json({
      status: 200,
      message: "Get all services successfully!",
      data: {
        services,
      },
    });
  } catch (error) {
    return next(error);
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

    const category = await Category.findById(req.body.categoryId);

    if (!category) {
      const err = new Error("Category Not Found");
      err.status = 404;
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
      categoryId: req.body.categoryId,
      price: req.body.price,
      title: req.body.title,
      description: req.body.description,
      image: BASE_URL + req.file.path,
    });

    return res.status(200).json({
      status: 200,
      message: "Service created successfully!",
      data: { service: { ...service._doc, categoryId: category } },
    });
  } catch (error) {
    return next(error);
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

    const category = await Category.findById(req.body.categoryId);

    if (!category) {
      const err = new Error("Category Not Found");
      err.status = 404;
      throw err;
    }

    const updatedService = {
      price: req.body.price,
      title: req.body.title,
      description: req.body.description,
      categoryId: req.body.categoryId,
    };

    if (req.file) {
      if (req.isImageTypeInvalid) {
        const err = new Error("Invalid image type");
        err.status = 422;
        throw err;
      } else if (!req.file || !req.file.path) {
        const err = new Error("Validation Error (Image Required)");
        err.status = 422;
        throw err;
      }
      updatedService.image = BASE_URL + req.file.path;
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updatedService,
      { new: true }
    );

    return res.status(200).json({
      status: 200,
      message: "Service updated successfully!",
      data: { service: { ...service._doc, categoryId: category } },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, {
      deletedAt: new Date().toISOString(),
    });

    // await Booking.deleteMany({ serviceId: req.params.id });

    return res.status(200).json({
      status: 200,
      message: "Service deleted successfully!",
      data: { service },
    });
  } catch (error) {
    return next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const serviceArray = [];
    const length = req.query.count || 5;

    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * vendorArray.length);
      serviceArray.push({
        price: faker.random.number(),
        title: faker.random.word(),
        description: faker.random.words(10),
        image: faker.image.fashion(),
      });
    }
    // await Service.insertMany(serviceArray);

    res.status(200).json({
      status: 200,
      message: "Currently service will not be inserted.",
      data: { Services: serviceArray },
    });
  } catch (error) {
    return next(error);
  }
};
