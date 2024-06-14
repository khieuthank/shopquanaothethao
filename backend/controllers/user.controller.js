const db = require('../models/index');
const User = db.User;

async function createUser(req, res, next) {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password:  req.body.password
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const userController = {
    createUser
}

module.exports = userController;