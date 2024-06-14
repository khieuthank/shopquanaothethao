const db = require('../models/index');
const Color = db.Color;

async function createColor(req, res, next) {
    try {
        const newColor = new Color({
            name: req.body.name
        });
        const color = await newColor.save();
        res.status(200).json(color);
    } catch (error) {
        next(error);
    }
}

const colorController  = {
    createColor
}

module.exports = colorController;