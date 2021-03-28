const Banner = require("../banner/banner.model");
const Category = require("../category/category.model");
const Service = require("../service/service.model");

exports.dashboard = async (req, res, next) => {
  try {
    const banners = await Banner.find({ deletedAt: null, show: true });
    const mainServices = await Category.find({ deletedAt: null });
    const bestOffers = await Service.find({ deletedAt: null, show: true });

    const _laundry = await Service.findById("60508ad613dc86244ce24eed");
    const _homeCleaning = await Service.findById("6049dce343403255a5eaeee8");

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

    const homeCleaning = {
      title: _homeCleaning.title,
      image: _homeCleaning.image,
      description: _homeCleaning.description,
      price: _homeCleaning.price,
      discount: _homeCleaning.discount,
      coverImage: _homeCleaning.coverImage,
      _id: _homeCleaning._id,
      categoryId: _homeCleaning.categoryId,
      createdAt: _homeCleaning.createdAt,
      details: _homeCleaning.details,
      frequencies: _homeCleaning.frequencies,
      hours: _homeCleaning.hours,
      staffs: _homeCleaning.staffs,
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
        homeCleaning,
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
