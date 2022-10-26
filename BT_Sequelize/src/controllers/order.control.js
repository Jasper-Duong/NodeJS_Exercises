const sequelize = require("../models/index.model");
const initModels = require("../models/init-models");
const { successCode, failCode, errorCode } = require("../utils/response");
const model = initModels(sequelize);

const addOrder = async (req, res) => {
  const { user_id, food_id, amount, arr_sub_id } = req.body;
  const newOrder = { user_id, food_id, amount, arr_sub_id, code: undefined };

  for (let i in { user_id, food_id, amount }) {
    if (newOrder[i] === undefined) {
      errorCode(res, "", `${i} is required!`);
      return;
    }
  }

  try {
    const data = await model.order.create(newOrder);
    successCode(
      res,
      data,
      `User ${user_id} ordered ${amount} food (id=${food_id})${
        arr_sub_id ? ` with toppings ${arr_sub_id}` : ""
      }`
    );
  } catch (error) {
    failCode(res, "Failed to place new order!");
  }
};
module.exports = { addOrder };
