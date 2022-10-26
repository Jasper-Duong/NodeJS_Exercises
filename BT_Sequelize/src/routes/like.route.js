const express = require("express");
const {
  getAllLikes,
  getLikesByUser,
  getLikesByRes,
  getLikesByUserAndRes,
  addLike,
  removeLike,
} = require("../controllers/like.control");
const likeRoute = express.Router();

// GET
likeRoute.get("/getAllLikes", getAllLikes);
// Lấy DS Likes theo user_id (truyền vào Body của request)
likeRoute.get("/getLikesByUser", getLikesByUser);
// Lấy DS Likes theo res_id (truyền vào Body của request)
likeRoute.get("/getLikesByRes", getLikesByRes);
// Lấy DS Likes theo user_id, res_id (truyền vào Body của request)
likeRoute.get("/getLikesByUserAndRes", getLikesByUserAndRes);

// POST - addLike -> require user_id, res_id from req.body
likeRoute.post("/addLike", addLike);

// DELETE - removeLike -> require user_id, res_id from req.body
likeRoute.delete("/removeLike", removeLike);

module.exports = likeRoute;
