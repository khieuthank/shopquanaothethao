const express = require('express');
const bodyParser = require('body-parser');
const notificationController = require('../controllers/notification.controller');

const notificationRouter =express.Router();

notificationRouter.use(bodyParser.json());

notificationRouter.post('/create', notificationController.createNotification);

module.exports = notificationRouter;