const express = require('express');
const bodyParser = require('body-parser');
const imageController = require('../controllers/image.controller');

const imageRouter =express.Router();

imageRouter.use(bodyParser.json());

imageRouter.post('/create', imageController.createImage);

module.exports = imageRouter;
