const { validationResult } = require("express-validator");
const { Staff, Vendor, Review, StaffJob } = require("../model");
const faker = require("faker");
const { BASE_URL, deleteFile, deleteReqFile } = require("../helper");
const mongoose = require("mongoose");

exports.index = async (req, res, next) => {
  try {
    let condition = { deletedAt: null };
    if (req.userType !== "ROOT_USER") condition.vendorId = req.userId;
    const staffs = await Staff.find(condition)
      .populate("vendorId")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: 200,
      message: "Get all staffs successfully!",
      data: { staffs },
    });
  } catch (error) {
    return next(error);
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
      message: "Get all staffs successfully!",
      data: {
        staffs,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.indexByCategory = async (req, res, next) => {
  try {
    const vendorArray = await Vendor.find({
      categoryId: req.params.categoryId,
    }).select("_id");

    const vendorIdArray = vendorArray.map((item) => item._id);

    const _staffs = await Staff.find({ vendorId: { $in: vendorIdArray } });

    const staffs = _staffs.map(
      ({
        _id,
        name,
        about,
        email,
        mobile,
        image,
        gender,
        age,
        nationality,
        isAvailable,
        availabilityTime,
        createdAt,
        stars = 0,
      }) => ({
        _id,
        name,
        about,
        email,
        mobile,
        image,
        gender,
        age,
        nationality,
        isAvailable,
        availabilityTime,
        createdAt,
        stars,
      })
    );

    return res.status(200).json({
      status: 200,
      message: "Get all staffs successfully!",
      data: { staffs },
    });
  } catch (error) {
    console.error(error);
    return next(error);
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
      message: "Staff created successfully!",
      data: { staff },
    });
  } catch (error) {
    console.log(error);
    return next(error);
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
      message: "Staff updated successfully!",
      data: { staff },
    });
  } catch (error) {
    deleteReqFile(req);
    return next(error);
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
    return next(error);
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
    return next(error);
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
      message: "Staff deleted successfully!",
      data: { staffs: staffArray },
    });
  } catch (error) {
    return next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const staffId = req.params.staffId;
    const _staff = await Staff.findById(staffId);

    if (!_staff) {
      const error = new Error("Staff details not found!");
      error.status = 404;
      throw error;
    }

    const _review = await Review.find({ staffId }).populate("userId");

    const match = {
      $match: {
        staffId: mongoose.Types.ObjectId(staffId),
        star: {
          $gt: 0,
        },
      },
    };

    const group = {
      $group: {
        _id: {
          star: "$star",
        },
        totalStars: { $sum: "$star" },
        count: { $sum: 1 },
      },
    };

    const data = await Review.aggregate([match, group]);

    let totalStars = 0,
      totalCounts = 0;

    const stars = data.map((item) => {
      totalStars += item.totalStars;
      totalCounts += item.count;
      return {
        star: item._id.star,
        count: item.count,
        totalStars: item.totalStars,
      };
    });

    const reviews = _review.map((item) => ({
      description: item.description,
      user: {
        name: item.userId.name,
        image: item.userId.image,
      },
      createdAt: item.createdAt,
    }));

    const staff = {
      name: _staff.name,
      about: _staff.about,
      image: _staff.image,
      gender: _staff.gender,
      age: _staff.age,
      nationality: _staff.nationality,
      idProof: _staff.idProof,
      deletedAt: _staff.deletedAt,
      _id: _staff._id,
      vendorId: _staff.vendorId,
      createdAt: _staff.createdAt,
      rating: {
        stars,
        average: totalStars / totalCounts,
        reviews,
      },
    };

    return res.status(200).json({
      status: 200,
      message: "Staff details",
      staff,
    });
  } catch (error) {
    return next(error);
  }
};

exports.toggleAvailability = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.staffId);
    staff.isAvailable = !staff.isAvailable;
    await staff.save();

    return res.status(200).json({
      status: 200,
      message: "Change availability",
      data: { staff },
    });
  } catch (error) {
    return next(error);
  }
};

exports.changeAvailabilityTime = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.staffId);

    const reqObj = req.body;

    const _time = {
      start: { hour: reqObj.startHour, min: reqObj.startMin },
      end: { hour: reqObj.endHour, min: reqObj.endMin },
    };

    staff.availabilityTime = _time;

    await staff.save();

    return res.status(200).json({
      status: 200,
      message: "Change availability",
      data: { staff },
    });
  } catch (error) {
    return next(error);
  }
};

exports.availability = async (req, res, next) => {
  try {
    const staffId = req.params.staffId;
    const staff = await Staff.findById();
    console.log(staff);

    // const match = {
    //   $match: {  },
    // };

    const staffJobs = await StaffJob.find({
      staffId: mongoose.Types.ObjectId(staffId),
      start: { $gt: new Date() },
    });

    // const staffJob = await StaffJob.aggregate([match]);

    console.log(staffJobs);

    return res.status(200).json({
      status: 200,
      message: "Staff availability",
      data: { staffJobs },
    });
  } catch (error) {
    return next(error);
  }
};
