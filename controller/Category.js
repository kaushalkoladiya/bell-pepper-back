const { validationResult } = require("express-validator");
const fs = require("fs");
const { BASE_URL } = require("../helper");
const { Category } = require("../model");

exports.index = async (req, res, next) => {
  try {
    const categories = await Category.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Get all categories successfully!",
      data: {
        categories,
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
      err.errors = validatedData.errors;
      throw err;
    }

    if (await isCategoryExists(req.body.name)) {
      const err = new Error("Category Already Exist.");
      err.status = 422;
      throw err;
    }

    const categoryData = { name: req.body.name };

    if (req.file) {
      categoryData.image = BASE_URL + req.file.path;
      categoryData.hasImage = true;
    }

    const category = await Category.create(categoryData);

    res
      .status(200)
      .json({
        status: 200,
        message: "Category created successfully!",
        data: { category },
      });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    // Check Post is Exist or not
    let category = await Category.findById(req.params.category_id);
    if (!category) {
      deleteReqFile(req);
      const err = new Error("Not found");
      err.status = 404;
      throw err;
    }

    // Validation
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      deleteReqFile(req);
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
    }

    // Category has same name itself
    if (category.name !== req.body.name) {
      if (await isCategoryExists(req.body.name)) {
        deleteReqFile(req);
        const err = new Error("Category Already Exist.");
        err.status = 422;
        throw err;
      }
    }

    category.name = req.body.name;

    if (req.file) {
      deleteFile(category.image_url);
      category.image_url = BASE_URL + req.file.path;
    }

    await category.save();

    res
      .status(200)
      .json({
        status: 200,
        message: "Category updated successfully!",
        data: { category },
      });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    // Check Post is Exist or not
    const category = await Category.findByIdAndUpdate(req.params.category_id, {
      deletedAt: new Date().toISOString(),
    });
    // if (!category) {
    //   deleteReqFile(req);
    //   const err = new Error("Not found");
    //   err.status = 404;
    //   throw err;
    // }
    // deleteFile(category.image_url);
    // const result = await category.deleteOne();

    return res.status(200).json({
      status: 200,
      message: "Category deleted successfully!",
      data: { category },
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ error: error.errors || error.message });
  }
};

const deleteReqFile = (req) => {
  if (req.file) fs.unlinkSync(req.file.path);
};

const deleteFile = (path) => {
  if (fs.existsSync(path)) fs.unlinkSync(path);
};

const isCategoryExists = async (name) => await Category.exists({ name });
