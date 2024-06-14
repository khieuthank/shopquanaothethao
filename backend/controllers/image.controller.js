const db = require('../models/index');
const Image = db.Image;

async function createImage(req, res, next) {
    try {
        const newImage = new Image({
            name: req.body.name,
            url: req.body.url
        });
        const image = await newImage.save();
        res.status(200).json(image);
    } catch (error) {
        next(error);
    }
}

const imageController = {
    createImage
}

module.exports = imageController;