const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('../controllers/order.controller');

const orderRouter =express.Router();

orderRouter.use(bodyParser.json());

orderRouter.post('/create', orderController.createOrder);

module.exports = orderRouter;