const db = require('../models/index');
const Size = db.Size;

async function createSize(req, res, next) {
    try {
        const newSize = new Size({
            size: req.body.size,
            blogs: req.body.blogs
        });
        const size = await newSize.save();
        res.status(200).json(size);
    } catch (error) {
        next(error);
    }
}

const sizeController= {
    createSize
}

module.exports = sizeController;