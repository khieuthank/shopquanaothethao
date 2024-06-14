const db = require('../models/index');

const Feedback = db.Feedback;

async function createFeedback(req, res, next) {
    try {
        const newFeedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        const feedback = await newFeedback.save();
        res.status(200).json(feedback);
    } catch (error) {
        next(error);
    }
}

const feedbackController = {
    createFeedback
}

module.exports = feedbackController;