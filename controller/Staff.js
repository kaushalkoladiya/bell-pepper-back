const { validationResult } = require("express-validator");
const { Staff, Vendor, Booking } = require("../model");
const faker = require("faker");
const { BASE_URL, deleteFile, deleteReqFile } = require("../helper");

exports.index = async (req, res, next) => {
  try {
    let condition = { deletedAt: null };
    if (req.userType !== "ROOT_USER") condition.vendorId = req.userId;
    const staffs = await Staff.find(condition)
      .populate("vendorId")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { staffs },
    });
  } catch (error) {
    next(error);
  }
};

exports.indexByVendor = async (req, res, next) => {
  try {
    const staffs = await Staff.find({
      vendorId: req.params.vendorId,
      deletedAt: null,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        staffs,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }
    const vendor = await Vendor.findById(req.userId);

    if (!vendor) {
      const err = new Error("Vendor not found!");
      err.status = 404;
      throw err;
    }

    const staff = await Staff.create({
      vendorId: vendor._id,
      name: req.body.name,
      about: req.body.about,
      email: req.body.email,
      mobile: req.body.mobile,
      age: req.body.age,
      gender: req.body.gender,
      nationality: req.body.nationality,
      image: BASE_URL + req.file.path,
    });

    vendor.staff.push(staff._id);
    await vendor.save();

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { staff },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const _staff = {
      name: req.body.name || "",
      about: req.body.about || "",
      email: req.body.email || "",
      mobile: req.body.mobile || "",
      age: req.body.age || 0,
      gender: req.body.gender || "",
      nationality: req.body.nationality || "",
    };

    if (req.file) {
      _staff.image = BASE_URL + req.file.path;
    }

    const staff = await Staff.findByIdAndUpdate(req.params.staffId, _staff, {
      new: true,
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { staff },
    });
  } catch (error) {
    deleteReqFile(req);
    next(error);
  }
};

exports.uploadProof = async (req, res, next) => {
  try {
    if (!req.file) {
      const err = new Error("Image is required!");
      err.status = 422;
      throw err;
    }

    await Staff.findByIdAndUpdate(req.params.staffId, {
      idProof: BASE_URL + req.file.path,
    });

    return res
      .status(200)
      .json({ status: 200, message: "Proof uploaded successfully!", data: {} });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, {
      deletedAt: new Date().toISOString(),
    });

    // await Booking.updateMany(
    //   { staffId: req.params.id },
    //   { deletedAt: new Date().toISOString() }
    // );

    return res
      .status(200)
      .send({ message: "Staff deleted successfully!", status: 200 });
  } catch (error) {
    next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const staffArray = [];
    const length = req.query.count || 5;

    const vendorArray = await Vendor.find().select("_id");

    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * vendorArray.length);

      staffArray.push({
        vendorId: vendorArray[i]._id,
        name: faker.name.firstName(),
        about: faker.random.words(10),
        email: faker.internet.email().toLowerCase(),
        mobile: faker.phone.phoneNumber(),
        image: faker.image.avatar(),
      });
    }

    await Staff.insertMany(staffArray);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { staffs: staffArray },
    });
  } catch (error) {
    next(error);
  }
};
