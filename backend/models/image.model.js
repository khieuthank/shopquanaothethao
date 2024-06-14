const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
    urd:{
        type: String,
        required: true
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;