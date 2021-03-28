const { generateJWTToken } = require("../../helper");
const Admin = require("./admin.model");
const Vendor = require("../vendor/vendor.model");

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;

    let admin = await Admin.findOne({ email, password: req.body.password });

    let payload, userType;

    if (!admin) {
      const vendor = await Vendor.findOne({
        email,
        password: req.body.password,
      });

      if (!vendor) {
        const err = new Error("Email and Password are wrong!");
        err.status = 422;
        throw err;
      }

      payload = {
        _id: vendor._id,
        name: vendor.companyName,
        email: vendor.email,
        userType: "VENDOR_USER",
        hasPermission: admin.hasPermission,
      };
      userType = "VENDOR_USER";

      admin = { ...vendor._doc, name: vendor.companyName };
    } else {
      payload = {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        userType: "ROOT_USER",
        hasPermission: admin.hasPermission,
      };
      userType = "ROOT_USER";
    }

    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "User logged in successfully!",
      data: { token, admin, userType },
    });
  } catch (error) {
    return next(error);
  }
};
