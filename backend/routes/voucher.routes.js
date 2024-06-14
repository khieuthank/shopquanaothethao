const express = require('express');
const bodyParser = require('body-parser');
const voucherController = require('../controllers/voucher.controller')

const voucherRouter =express.Router();

voucherRouter.use(bodyParser.json());

voucherRouter.post('/create', voucherController.createVoucher);

module.exports = voucherRouter;