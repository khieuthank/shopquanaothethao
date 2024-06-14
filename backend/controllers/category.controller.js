const db = require('../models/index');
const Category = db.Category;

async function createCategory(req, res, next) {
    try {
        const newCategory = new Category({
            name: req.body.name,
            image: req.body.image
        });
        const category = await newCategory.save();
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

const categoryController = {
    createCategory
}

module.exports = categoryController;