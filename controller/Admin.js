const { Admin } = require("../model");

exports.getAdminData = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);

    res.status(200).json({
      status: 200,
      message: "success",
      data: {
        admin: {
          ...admin._doc,
          password: "",
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAdminData = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.userId, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 200,
      message: "success",
      data: {
        admin: {
          ...admin._doc,
          password: "",
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
