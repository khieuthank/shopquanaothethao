const db = require('../models/index');
const Voucher = db.Voucher;

async function createVoucher(req, res, next) {
    try {
        const newVoucher = new Voucher({
            title: req.body.title,
            value: req.body.value
        });
        const voucher = await newVoucher.save();
        res.status(201).json({
            status: 201,
            success: true,
            element: voucher
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            element: {
                msg: error.message
            }
        });
    }
}

const voucherController = {
    createVoucher
}

module.exports = voucherController;