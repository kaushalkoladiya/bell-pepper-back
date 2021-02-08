const { validationResult } = require("express-validator");
const { Staff, Vendor, Service, Booking } = require("../model");
const faker = require("faker");

exports.index = async (req, res, next) => {
  try {
    let condition = { deletedAt: null };
    if (req.userType !== "ROOT_USER") condition.vendorId = req.userId;
    const staffs = await Staff.find(condition);

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
    const staffs = await Staff.find({ vendorId: req.params.vendorId });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        staffs,
      },
    });
  } catch (error) {
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
    const vendor = await Vendor.findById(req.body.vendorId);

    if (!vendor) {
      const err = new Error("Vendor not found!");
      err.status = 404;
      throw err;
    }

    const staff = await Staff.create(req.body);

    // vendor.staff = vendor.staff.push(mongoose.Types.ObjectId(staff.id));
    // console.log(vendor);

    // await vendor.save();

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: { staff },
    });
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
        email: faker.internet.email(),
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

exports.destroy = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff.isAvailable) {
      const err = new Error("Staff is busy now, try later!");
      err.status = 422;
      throw err;
    }

    staff.deletedAt = new Date().toISOString();

    await staff.save();

    await Booking.updateMany(
      { staffId: req.params.id },
      { deletedAt: new Date().toISOString() }
    );

    if (!staff) {
      const err = new Error("Staff not found");
      err.status = 404;
      throw err;
    }

    res.send({ message: "staff deleted successfully!", status: 200 });
  } catch (error) {
    next(error);
  }
};

exports.assignStaff = async (req, res, next) => {
  try {
    const vendors = await Vendor.find({
      serviceId: req.params.serviceId,
    }).select("_id");

    const vendorIds = vendors.map((item) => item._id);

    const staffs = await Staff.find({ vendorId: { $in: vendorIds } });

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { staffs },
    });
  } catch (error) {
    next(error);
  }
};
