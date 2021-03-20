const { Address, User, Vendor } = require("../model");
const faker = require("faker");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

exports.indexByUser = async (req, res, next) => {
  try {
    const _addresses = await Address.find({
      userId: req.params.userId,
      deletedAt: null,
    });

    const addresses = _addresses.map((address) => ({
      _id: address._id,
      city: address.city,
      street: address.street,
      houseNumber: address.houseNumber,
      zipCode: address.zipCode,
      state: address.state,
      createdAt: address.createdAt,
    }));

    return res.status(200).json({
      status: 200,
      message: "User's addresses!",
      data: { addresses },
    });
  } catch (error) {
    return next(error);
  }
};

exports.indexByVendor = async (req, res, next) => {
  try {
    const _addresses = await Address.find({
      vendorId: req.params.vendorId,
      deletedAt: null,
    });

    const addresses = _addresses.map((address) => ({
      _id: address._id,
      city: address.city,
      street: address.street,
      houseNumber: address.houseNumber,
      zipCode: address.zipCode,
      state: address.state,
      createdAt: address.createdAt,
    }));

    return res.status(200).json({
      status: 200,
      message: "Vendor's addresses!",
      data: { addresses },
    });
  } catch (error) {
    return next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const reqObj = req.body;
    const address = await Address.create({
      userId: reqObj.userId,
      vendorId: reqObj.vendorId,
      city: reqObj.city,
      street: reqObj.streetName,
      houseNumber: reqObj.houseNumber,
      zipCode: reqObj.zipCode,
      state: reqObj.state,
    });

    await storeInUser(reqObj.userId, address._id);

    return res.status(200).json({
      status: 200,
      message: "Address stored successfully!",
      data: { address },
    });
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }
    const reqObj = req.body;

    const filter = { _id: req.params.addressId };

    if (reqObj.userId) filter.userId = reqObj.userId;
    else if (reqObj.vendorId) filter.vendorId = reqObj.vendorId;
    else {
      const err = new Error("This Address not belonging to you!");
      err.status = 422;
      throw err;
    }

    const address = await Address.findOne(filter);

    if (!address) {
      const err = new Error("This Address not belonging to you!");
      err.status = 422;
      throw err;
    }

    address.city = reqObj.city;
    address.street = reqObj.streetName;
    address.houseNumber = reqObj.houseNumber;
    address.zipCode = reqObj.zipCode;
    address.state = reqObj.state;

    await address.save();

    return res.status(200).json({
      status: 200,
      message: "Address updated successfully!",
      data: { address },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    const filter = { _id: req.params.addressId };

    if (req.body.userId) filter.userId = req.body.userId;
    else if (req.body.vendorId) filter.vendorId = req.body.vendorId;
    else {
      const err = new Error("This Address not belonging to you!");
      err.status = 422;
      throw err;
    }

    const address = await Address.findOneAndUpdate(filter, {
      deletedAt: new Date().toISOString(),
    });

    if (!address) {
      const err = new Error("This Address not belonging to you!");
      err.status = 422;
      throw err;
    }

    await removeFromUser(req.body.userId, req.params.addressId);

    return res.status(200).json({
      status: 200,
      message: "Address deleted successfully!",
      data: {},
    });
  } catch (error) {
    return next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const addressArray = [];
    const length = req.query.count || 5;

    const userArray = await User.find().select("_id");

    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * userArray.length);

      // addressArray.push();
      const address = await Address.create({
        userId: userArray[i]._id,
        city: faker.address.city(),
        street: faker.address.streetName(),
        houseNumber: faker.random.number(99),
        zipCode: faker.address.zipCode(),
        state: faker.address.state(),
      });

      await storeInUser(userArray[i]._id, address._id);
    }

    // await Address.insertMany(addressArray);
    return res.status(200).json({
      status: 200,
      message: "Faker done",
      data: { bookings: addressArray },
    });
  } catch (error) {
    return next(error);
  }
};

exports.markAsActive = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);

    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors;
      throw err;
    }

    let user;
    if (req.body.userId) {
      user = await User.findById(req.body.userId);
    } else if (req.body.vendorId) {
      user = await Vendor.findById(req.body.vendorId);
    } else {
      const err = new Error("This Address not belonging to you!");
      err.status = 422;
      throw err;
    }

    user.activeAddress = req.params.addressId;
    await user.save();
    return res.status(200).json({
      status: 200,
      message: "Address marked as active one!",
      data: { user },
    });
  } catch (error) {
    return next(error);
  }
};

const storeInUser = async (userId, addressId) => {
  try {
    const user = await User.findById(userId);
    const _addresses = [...user.addresses];
    _addresses.push(mongoose.Types.ObjectId(addressId));
    user.addresses = _addresses;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

const removeFromUser = async (userId, addressId) => {
  try {
    const user = await User.findById(userId);
    const _addresses = [...user.addresses].filter(
      (item) => String(item) !== String(addressId)
    );
    user.addresses = _addresses;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};
