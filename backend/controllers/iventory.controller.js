const db = require('../models/index');
const Iventory = db.Iventory;

async function createIventory(req, res, next) {
    try {
        const newIventory = new Iventory({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            image: req.body.image
        });
        const iventory = await newIventory.save();
        res.status(200).json(iventory);
    } catch (error) {
        next(error);
    }
}

const iventoryController = {
    createIventory
}

module.exports = iventoryController;