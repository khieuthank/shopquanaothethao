const db = require('../models/index');
const Product = db.Product;

async function createProduct(req, res, next) {
    try {
        const newProduct = new Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price,
            countInStock: req.body.countInStock,
            numReviews: req.body.numReviews,
            categories: req.body.categories
        });
        const product = await newProduct.save();
    } catch (err) {
        next(error);
    }

}
const productController = {
    createProduct
}

module.exports = productController;