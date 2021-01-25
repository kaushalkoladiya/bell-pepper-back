const { validationResult } = require("express-validator");
const { generateJWTToken } = require("../../helper");
const { User } = require("../../model");

exports.signup = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 403;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const isMobileExist = await User.exists({ mobile: req.body.mobile });
    const isEmailExist = await User.exists({ email: req.body.email });

    if (isMobileExist || isEmailExist) {
      const err = new Error("Mobile no. or email is already used!");
      err.status = 403;
      throw err;
    }

    const user = await User.create(req.body);
    // generate token
    const payload = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
    };
    const token = generateJWTToken(payload);

    res.status(200).json({
      status: 200,
      messages: "User registered successfully!",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
    // return res
    //   .status(error.status || 500)
    //   .json({ error: error.message || "Server Error" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      const err = new Error("Oops, you are now registered");
      err.status = 404;
      throw err;
    }

    // generate token
    const payload = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
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

exports.isMobileNoExists = async (req, res, next) => {
  try {
    const isMobileNoExists = await User.exists({ mobile: req?.query?.mobile });
    if (!isMobileNoExists) {
      return res.status(404).json({
        status: 404,
        messages: "Mobile no. is not registered",
        data: {
          isMobileNoExists: false,
        },
      });
    }

    return res.status(200).json({
      status: 200,
      messages: "Mobile no. is registered",
      data: {
        isMobileNoExists: true,
      },
    });
  } catch (error) {
    next(error);
  }
};
