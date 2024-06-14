const db = require('../models/index');
const Cart = db.Cart;

async function createCart(req, res, next) {
    try {
        const newCart = new Cart({
            title: req.body.title,
            body : req.body.body,
            comments: req.body.comments,
            meta: req.body.meta
        });
        const cart = await newCart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

const cartController = {
    createCart
}

module.exports = cartController;