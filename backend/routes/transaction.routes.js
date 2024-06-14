const express = require('express');
const bodyParser = require('body-parser');
const transactionController = require('../controllers/transaction.controller');

const transactionRouter =express.Router();

transactionRouter.use(bodyParser.json());

transactionRouter.post('/create', transactionController.createTransaction);

module.exports = transactionRouter;