const db = require('../models/index');

const Admin = db.Admin;

async function createAdmin(req, res, next) {
    try {
        const newAdmin = new Admin({
            name: req.body.name,
            dob: req.body.dob,
            blogs: req.body.blogs
            
        });
        const admin = await newAdmin.save();
        res.status(200).json(admin);
    } catch (error) {
        next(error);
    }
}

const adminController = {
    createAdmin
}

module.exports = adminController;