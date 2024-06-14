const express = require('express');
const bodyParser = require('body-parser');
const afiliationController = require('../controllers/affiliation.controller');

const affiliationRouter = express.Router();

affiliationRouter.use(bodyParser.json());

affiliationRouter.post('/create', afiliationController.createAffiliation);

module.exports = affiliationRouter;