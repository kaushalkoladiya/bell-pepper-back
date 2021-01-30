const { User } = require("../model");
const faker = require("faker");

exports.index = async (req, res, ext) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      status: 200,
      message: "Success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.faker = async (req, res, next) => {
  try {
    const userArray = [];

    for (let index = 0; index < 5; index++) {
      userArray.push({
        name: faker.name.firstName(),
        mobile: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        gender: faker.name.prefix(),
        dob: faker.date.past(),
        location: faker.address.country(),
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
        city: faker.address.city(),
      });
    }

    await User.insertMany(userArray);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: { users: userArray },
    });
  } catch (error) {
    next(error);
  }
};
