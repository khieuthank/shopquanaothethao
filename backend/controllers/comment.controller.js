const db = require('../models/index');
const Comment = db.Comment;

async function createComment(req, res, next) {
    try {
        const newComment = new Comment({
            name: req.body.name,
            body: req.body.body
        });
        const comment = await newComment.save();
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}

const commentController = {
    createComment
}

module.exports = commentController;