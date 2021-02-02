const { generateJWTToken } = require("../../helper");
const { Admin } = require("../../model");

exports.login = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!admin) {
      const err = new Error("Email and Password are wrong!");
      err.status = 422;
      throw err;
    }

    // generate token
    const payload = {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      userType: "ROOT_USER",
    };
    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "User logged in successfully!",
      data: { token, admin },
    });
  } catch (error) {
    next(error);
  }
};
