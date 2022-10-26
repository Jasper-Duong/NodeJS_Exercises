const sequelize = require("../models/index.model");
const initModels = require("../models/init-models");
const { successCode, failCode, errorCode } = require("../utils/response");
const models = initModels(sequelize);
const moment = require('moment');

const getAllLikes = async (req, res) => {
  try {
    const data = await models.like_res.findAll();
    successCode(res, data, "Successfully fetched List of all Likes!");
  } catch (error) {
    failCode(res, "Failed to fetch List of all likes!");
  }
};

const getLikesByUser = async (req, res) => {
  const { user_id } = req.body;
  try {
    if (user_id) {
      const data = await models.like_res.findAll({ where: { user_id } });
      successCode(res, data, `Restaurant(s) liked by user ${user_id}`);
    } else {
      errorCode(res, "", "user_id not provided!");
    }
  } catch (error) {
    failCode(res, "Failed to fetch data");
  }
};

const getLikesByRes = async (req, res) => {
  const { res_id } = req.body;
  try {
    if (res_id) {
      const data = await models.like_res.findAll({ where: { res_id } });
      successCode(res, data, `Likes of restaurant ${res_id}`);
    } else {
      errorCode(res, "", "res_id not provided!");
    }
  } catch (error) {
    failCode(res, "Failed to fetch data");
  }
};

const getLikesByUserAndRes = async (req, res) => {
  const { res_id, user_id } = req.body;
  try {
    if (res_id) {
      if (user_id) {
        const data = await models.like_res.findAll({
          where: { res_id, user_id },
        });
        successCode(res, data, `Restaurant ${res_id} liked by user ${user_id}`);
      } else {
        errorCode(res, "", "user_id not provided!");
      }
    } else {
      errorCode(res, "", "res_id not provided!");
    }
  } catch (error) {
    failCode(res, "Failed to fetch data");
  }
};

const addLike = async (req, res) => {
  const { user_id, res_id } = req.body;
  const newLike = { user_id, res_id, date_like: moment().format() };
  try {
    if (user_id && res_id) {
      const data = await models.like_res.create(newLike);
      successCode(res, data, `User ${user_id} liked Restaurant ${res_id}`);
    } else {
      errorCode(res, "", "res_id and user_id are required!");
    }
  } catch (error) {
    failCode(res, "Failed to create new instance!");
  }
};

const removeLike = async (req, res) => {
  const { user_id, res_id } = req.body;
  const currentLike = { user_id, res_id };
  try {
    if (user_id && res_id) {
      const data = await models.like_res.destroy({ where: currentLike });
      successCode(res, data, `User ${user_id} unliked Restaurant ${res_id}`);
    } else {
      errorCode(res, "", "res_id and user_id are required!");
    }
  } catch (error) {
    failCode(res, "Failed to remove the specified instance!");
  }
};

module.exports = {
  getAllLikes,
  getLikesByUser,
  getLikesByRes,
  getLikesByUserAndRes,
  addLike,
  removeLike,
};
