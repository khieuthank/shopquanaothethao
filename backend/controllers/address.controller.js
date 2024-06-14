const db = require('../models/index');
const Address = db.Address;

async function createAddress(req, res, next) {
    try {
        const newAddress = new Address({
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zip: req.body.zip
        });
        const address = await newAddress.save();
        res.status(200).json(address);
    } catch (error) {
        next(error);
    }
}

const addressController ={
    createAddress
}

module.exports = addressController;