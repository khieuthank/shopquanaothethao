const db = require('../models/index');
const Order = db.Order;

async function createOrder(req, res, next) {
    try {
        const newOrder = new Order({
            name: req.body.name,
            dob: req.body.dob,
            blogs: req.body.blogs
            
        });
        const order = await newOrder.save();
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
}

const orderController = {
    createOrder
}

module.exports = orderController;