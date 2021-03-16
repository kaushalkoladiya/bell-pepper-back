const { Banner, Category, Service, Vendor } = require("../../model");
const faker = require("faker");

exports.dashboard = async (req, res, next) => {
  try {
    const banners = await Banner.find({ deletedAt: null, show: true });
    const mainServices = await Category.find({ deletedAt: null });
    const bestOffers = await Service.find({ deletedAt: null, show: true });

    const _laundry = await Service.findById("60508ad613dc86244ce24eed");

    // const details = [
    //   ...laundry.details,
    //   ...new Array(5).fill("0").map((_) => ({
    //     name: faker.random.words(3),
    //     description: faker.random.words(30),
    //     price: faker.random.number(100),
    //   })),
    // ];

    // laundry.details = details;

    // await laundry.save();

    const laundry = {
      title: _laundry.title,
      image: _laundry.image,
      price: _laundry.price,
      discount: _laundry.discount,
      coverImage: new Array(5)
        .fill("0")
        .map((_) => "http://placeimg.com/640/480/city"),
      _id: _laundry._id,
      categoryId: _laundry.categoryId,
      details: _laundry.details,
    };

    return res.status(200).json({
      status: 200,
      message: "Get dashboard data",
      data: {
        showBanner: true,
        showMainServices: true,
        showBestOffers: true,
        banners,
        mainServices,
        bestOffers,
        laundry,
      },
    });
  } catch (error) {
    return next(error);
  }
};

// {
//   categoryId: "604f366b487e0f15f067a84b",
//   image: faker.random.image(),
//   title: faker.random.word(),
//   details: ["why", "include", "bag"].map((name) => ({
//     name,
//     description: faker.random.words(),
//     print: faker.random.number(),
//   })),
//   price: faker.random.number(),
//   discount: faker.random.number(10),
// }
