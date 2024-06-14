const db = require('../models/index');
const Notification = db.Notification;

async function createNotification(req, res, next) {
    try {
        const newNotification = new Notification({
            title: req.body.title,
            body : req.body.body,
            comments: req.body.comments,
            meta: req.body.meta
        });
        const notification = await newNotification.save();
        res.status(200).json(notification);
    } catch (error) {
        next(error);
    }
}

const notificationController = {
    createNotification
}

module.exports = notificationController;