const Admin = require("./admin.model");

exports.getAdminData = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);

    return res.status(200).json({
      status: 200,
      message: "Get your data successfully!",
      data: {
        admin: {
          ...admin._doc,
          password: "",
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateAdminData = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.userId, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: 200,
      message: "Your details has been updated successfully!",
      data: {
        admin: {
          ...admin._doc,
          password: "",
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};
