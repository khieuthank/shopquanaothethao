const express = require('express');
const bodyParser = require('body-parser');
const feedbackController = require('../controllers/feedback.controller');

const feedbackRouter =express.Router();

feedbackRouter.use(bodyParser.json());

feedbackRouter.post('/create', feedbackController.createFeedback);

module.exports = feedbackRouter;