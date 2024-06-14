const express = require('express');
const bodyParser = require('body-parser');
const sizeController = require('../controllers/size.controller');

const sizeRouter =express.Router();

sizeRouter.use(bodyParser.json());

sizeRouter.post('/create', sizeController.createSize);

module.exports = sizeRouter;