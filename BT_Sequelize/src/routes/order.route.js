const express = require('express');
const { addOrder } = require('../controllers/order.control');
const orderRoute = express.Router();

orderRoute.post('/addOrder', addOrder);

module.exports = orderRoute