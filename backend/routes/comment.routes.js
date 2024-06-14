const express = require('express');
const bodyParser = require('body-parser');
const commentController = require('../controllers/comment.controller');

const commentRouter =express.Router();

commentRouter.use(bodyParser.json());

commentRouter.post('/create', commentController.createComment);

module.exports = commentRouter;