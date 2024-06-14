const express = require('express');
const bodyParser = require('body-parser');
const cartCotroller = require('../controllers/cart.controller');

const cartRouter = express.Router();

cartRouter.use(bodyParser.json());

cartRouter.post('/create', cartCotroller.createCart);

module.exports = cartRouter;