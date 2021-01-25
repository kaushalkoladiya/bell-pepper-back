const jwt = require("jsonwebtoken");

exports.generateJWTToken = (payload = {}) =>
  jwt.sign(payload, process.env.TOKEN_SECRET);
