const { validationResult } = require("express-validator");
const { generateJWTToken } = require("../../helper");
const { Vendor } = require("../../model");
const faker = require("faker");
const { VENDOR_USER } = require("../../constant");

exports.login = async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({ mobile: req.body.mobile });

    if (!vendor) {
      const err = new Error("Oops, you are now registered");
      err.status = 404;
      throw err;
    }

    // generate token
    const payload = {
      userType: VENDOR_USER,
      address: vendor.address,
      categoryId: vendor.categoryId,
      companyName: vendor.companyName,
      email: vendor.email,
      mobile: vendor.mobile,
      _id: vendor._id,
    };
    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "User logged in successfully!",
      data: { token, vendor: { ...payload, userType: null } },
    });
  } catch (error) {
    return next(error);
  }
};

exports.signup = async (req, res, next) => {
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

    const isMobileExist = await Vendor.exists({ mobile: req.body.mobile });
    const isEmailExist = await Vendor.exists({ email: req.body.email });

    if (isMobileExist || isEmailExist) {
      const err = new Error("Mobile no. or Email is already used!");
      err.status = 422;
      throw err;
    }

    const vendor = await Vendor.create({
      categoryId: req.body.categoryId,
      companyName: req.body.companyName,
      email: req.body.email,
      mobile: req.body.mobile,
      address: {
        city: req.body.city,
        street: req.body.street,
        houseNumber: req.body.houseNumber,
      },
    });
    // generate token
    const payload = {
      userType: VENDOR_USER,
      address: vendor.address,
      categoryId: vendor.categoryId,
      companyName: vendor.companyName,
      email: vendor.email,
      mobile: vendor.mobile,
      _id: vendor._id,
    };
    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "Vendor logged in successfully!",
      data: {
        vendor,
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.isMobileNoExists = async (req, res, next) => {
  try {
    const isMobileNoExists = await Vendor.exists({ mobile: req.body.mobile });

    const otpCode = otp();

    if (!isMobileNoExists) {
      return res.status(200).json({
        status: 200,
        message: "Mobile no. is not registered",
        data: {
          isMobileNoExists: false,
          otp: otpCode,
        },
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Mobile no. is registered",
      data: {
        isMobileNoExists: true,
        otp: otpCode,
      },
    });
  } catch (error) {
    return next(error);
  }
};
