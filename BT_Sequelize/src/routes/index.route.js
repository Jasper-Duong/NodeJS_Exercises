const express = require("express");
const likeRoute = require("./like.route");
const orderRoute = require("./order.route");
const rateRoute = require("./rate.route");
const rootRouter = express.Router();

rootRouter.use("/like", likeRoute);
rootRouter.use("/rating", rateRoute);
rootRouter.use("/order", orderRoute);

module.exports = rootRouter;
