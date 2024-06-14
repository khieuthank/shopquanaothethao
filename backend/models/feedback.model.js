const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content:{
        type: String,
        required: true
    },
    response:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true})
const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;