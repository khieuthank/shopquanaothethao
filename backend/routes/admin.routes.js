const express = require('express');
const bodyParser = require('body-parser');
const adminController =require('../controllers/admin.controller');

const adminRouter =express.Router();

adminRouter.use(bodyParser.json());

adminRouter.post('/create', adminController.createAdmin);

module.exports = adminRouter;