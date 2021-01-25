const { validationResult } = require("express-validator");
const { generateJWTToken } = require("../../helper");
const { Vendor } = require("../../model");

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
      company_name: vendor.company_name,
      mobile: vendor.mobile,
      address: vendor.address,
    };
    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      messages: "User logged in successfully!",
      data: { token },
    });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
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

    const isMobileExist = await Vendor.exists({ mobile: req.body.mobile });

    if (isMobileExist) {
      const err = new Error("Mobile no. is already used!");
      err.status = 422;
      throw err;
    }

    const vendor = await Vendor.create(req.body);
    // generate token
    const payload = {
      company_name: vendor.company_name,
      mobile: vendor.mobile,
      address: vendor.address,
    };
    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        vendor,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.isMobileNoExists = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
