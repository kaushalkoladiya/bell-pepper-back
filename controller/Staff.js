const { validationResult } = require("express-validator");
const faker = require("faker");
const { Staff } = require("../model");

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        messages: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const staff = await Staff.create(req.body);

    return res.status(200).json({
      status: 200,
      messages: "Success",
      data: { staff },
    });
  } catch (error) {
    next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const staffArray = [];

    for (let index = 0; index < 5; index++) {
      staffArray.push({
        vendorId: "6011693ac3074021846cc069",
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
