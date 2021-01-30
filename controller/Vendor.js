const { Vendor } = require("../model");

exports.index = async (req, res, ext) => {
  try {
    const vendors = await Vendor.find();
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        vendors,
      },
    });
  } catch (error) {
    next(error);
  }
};
