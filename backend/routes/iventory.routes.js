const express = require('express');
const bodyParser = require('body-parser');
const iventoryController = require('../controllers/iventory.controller');

const iventoryRouter =express.Router();

iventoryRouter.use(bodyParser.json());

iventoryRouter.post('/create', iventoryController.createIventory);

module.exports = iventoryRouter;