const { User } = require("../model");

exports.index = async (req, res, ext) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};
