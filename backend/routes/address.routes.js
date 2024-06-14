const express = require('express');
const bodyParser = require('body-parser');
const addressController = require('../controllers/address.controller');

const addressRouter = express.Router();
addressRouter.use(bodyParser.json());

addressRouter.post('/create', addressController.createAddress);

module.exports = addressRouter;