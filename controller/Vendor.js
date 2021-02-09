const { Booking, Vendor, Staff, Category } = require("../model");
const faker = require("faker");

exports.index = async (req, res, ext) => {
  try {
    const vendors = await Vendor.find({ deletedAt: null }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        vendors,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    await Staff.deleteMany({ vendorId: req.params.id });
    await Booking.deleteMany({ vendorId: req.params.id });

    if (!vendor) {
      return res.status(404).send({
        message: "Can't Found Id",
      });
    }
    res
      .status(200)
      .send({ status: 200, message: "vendor deleted successfully!" });
  } catch (error) {
    next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const categoryArray = await Category.find().select("_id");

    const vendorArray = [];
    const length = req.query.count || 5;
    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * categoryArray.length);

      vendorArray.push({
        categoryId: categoryArray[i]._id,
        companyName: faker.company.companyName(),
        email: faker.internet.email(),
        mobile: faker.phone.phoneNumber(),
        address: {
          city: faker.address.city(),
          street: faker.address.streetName(),
          houseNumber: faker.random.number(99),
        },
      });
    }

    await Vendor.insertMany(vendorArray);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { vendors: vendorArray },
    });
  } catch (error) {
    next(error);
  }
};

// logged in vendor's data
exports.getVendorData = async (req, res, next) => {
  try {
    const vendor = await Vendor.findById(req.userId);

    res.status(200).json({
      status: 200,
      message: "success",
      data: {
        // do not change it (Front-end is depends on this)
        admin: {
          ...vendor._doc,
          password: "",
          name: vendor.companyName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
