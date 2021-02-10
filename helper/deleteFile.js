const fs = require("fs");
exports.deleteReqFile = (req) => {
  if (req.file) fs.unlinkSync(req.file.path);
};

exports.deleteFile = (path) => {
  if (fs.existsSync(path)) fs.unlinkSync(path);
};
