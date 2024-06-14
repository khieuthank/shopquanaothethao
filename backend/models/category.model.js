const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

}, { timestamps: true })
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;