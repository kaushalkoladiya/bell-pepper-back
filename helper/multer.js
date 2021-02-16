const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    const filename =
      Date.now() + Math.floor(Math.random() * 100) + file.originalname;
    callback(null, filename);
  },
  destination: (req, file, callback) => {
    callback(null, "storage");
  },
});

const fileFilter = (req, file, callBack) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/webm"
  ) {
    req.isImageTypeInvalid = false;
    callBack(null, true);
  } else {
    req.isImageTypeInvalid = true;
    callBack(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
