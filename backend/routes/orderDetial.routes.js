const express = require('express');
const bodyParser = require('body-parser');
const orderDetailController = require('../controllers/orderDetail.controller');

const orderDetailRouter =express.Router();

orderDetailRouter.use(bodyParser.json());

orderDetailRouter.post('/create', orderDetailController.createOrderDetail);

module.exports = orderDetailRouter;
