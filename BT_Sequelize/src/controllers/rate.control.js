const moment = require("moment");
const sequelize = require("../models/index.model");
const initModels = require("../models/init-models");
const { failCode, successCode, errorCode } = require("../utils/response");
const model = initModels(sequelize);

const getRatings = async (req, res) => {
  const { user_id, res_id } = req.body;
  let query = { user_id, res_id };
  for (let i in query) {
    if (query[i] === undefined) {
      delete query[i];
    }
  }
  try {
    // console.log({ query });
    data = await model.rate_res.findAll({ where: query });
    successCode(
      res,
      data,
      `Fetched All Ratings${user_id ? ` by user ${user_id}` : ""}${
        res_id ? ` of restaurant ${res_id}` : ""
      }!`
    );
  } catch (error) {
    failCode(res, "Failed to fetch data!");
  }
};

const addRating = async (req, res) => {
  const { user_id, res_id, amount } = req.body;
  let newRating = { user_id, res_id, amount };
  // console.log({ newRating });
  for (let i in newRating) {
    if (newRating[i] === undefined) {
      errorCode(res, "", `${i} is not provided!`);
      return;
    }
  }
  newRating = { ...newRating, date_rate: moment().format() };
  try {
    console.log({newRating});
    const data = await model.rate_res.create(newRating);
    successCode(
      res,
      data,
      `User ${user_id} has rated Restaurant ${res_id} ${"⭐️".repeat(amount)})`
    );
  } catch (error) {
    failCode(res, "Failed to add new Rating!");
  }
};

module.exports = { getRatings, addRating };
