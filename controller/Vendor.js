const { Service, Booking, Vendor, Staff } = require("../model");

exports.index = async (req, res, ext) => {
  try {
    const vendors = await Vendor.find();
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
    await Service.deleteMany({ vendorId: req.params.id });
    await Booking.deleteMany({ vendorId: req.params.id });

    if (!vendor) {
      return res.status(404).send({
        message: "Can't Found Id",
      });
    }
    res.send({ message: "vendor deleted successfully!" });
  } catch (error) {
    next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const vendorArray = [];
    const length = req.query.count || 5;
    for (let index = 0; index < length; index++) {
      vendorArray.push({
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
