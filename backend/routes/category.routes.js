const express = require('express');
const bodyParser = require('body-parser');
const categoryController = require('../controllers/category.controller');

const categoryRouter =express.Router();

categoryRouter.use(bodyParser.json());

categoryRouter.post('/create', categoryController.createCategory);

module.exports = categoryRouter;
