const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const Authorization = req.get("Authorization").split(" ");

    if (Authorization.length === 0) {
      throw new Error("Unauthorized");
    }

    const decodedToken = await jwt.verify(
      Authorization[1],
      process.env.TOKEN_SECRET
    );

    if (!decodedToken) {
      throw new Error("Unauthorized");
    }
    req.userType = "VENDOR_USER";
    req.userId = decodedToken._id;
    return next();
  } catch (error) {
    return res.status(402).json({
      error: error.message ? "Invalid credentials (Token)" : "Unauthorized",
      status: 402,
    });
  }
};
