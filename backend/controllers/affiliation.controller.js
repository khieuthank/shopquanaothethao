const db = require('../models/index');
const Affiliation = db.Affiliation;

async function createAffiliation(req, res, next) {
    try {
        const newAffiliation = new Affiliation({
            name: req.body.name
        });
        const affiliation = await newAffiliation.save();
        res.status(200).json(affiliation);
    } catch (error) {
        next(error);
    }
}
const affiliationController = {
    createAffiliation
}

module.exports = affiliationController;