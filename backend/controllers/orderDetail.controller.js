const db = require('../models/index');
const OrderDetail = db.OrderDetail;

async function createOrderDetail(req, res, next) {
    try {
        const newOrderDetail = new OrderDetail({
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            price: req.body.price
        });
        const orderDetail = await newOrderDetail.save();
        res.status(200).json(orderDetail);
    } catch (error) {
        next(error);
    }
}

const orderDetailController = {
    createOrderDetail
}

module.exports = orderDetailController;