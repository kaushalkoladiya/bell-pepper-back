const { Admin } = require("../model");

exports.getAdminData = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);

    res.status(200).json({
      status: 200,
      message: "success",
      data: { admin },
    });
  } catch (error) {
    next(error);
  }
};
