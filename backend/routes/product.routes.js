const express = require('express');
const bodyParser = require('body-parser');
const productController = require('../controllers/product.controller');

const productRouter =express.Router();

productRouter.use(bodyParser.json());

productRouter.post('/create', productController.createProduct);

module.exports = productRouter;
