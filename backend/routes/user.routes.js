const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/user.controller')

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.post('/create', userController.createUser);
module.exports = userRouter;