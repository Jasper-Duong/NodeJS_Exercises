const express = require("express");
const { getRatings, addRating } = require("../controllers/rate.control");
const rateRoute = express.Router();

// GET Ratings -> req.body = 
// null -> getAll
// user_id -> getByUserId
// res_id -> getByResId
// user_id & res_id -> getByUserAndResId
rateRoute.get("/getRatings", getRatings);

// Add rating
rateRoute.post('/addRating', addRating);

module.exports = rateRoute;
