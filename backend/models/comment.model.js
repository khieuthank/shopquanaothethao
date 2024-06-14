const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    content:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;