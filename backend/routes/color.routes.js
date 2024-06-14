const express = require('express');
const bodyParser = require('body-parser');
const colorController =require('../controllers/color.controller');

const colorRouter =express.Router();

colorRouter.use(bodyParser.json());

colorRouter.post('/create', colorController.createColor);

module.exports = colorRouter;