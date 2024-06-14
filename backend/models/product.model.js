const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new   Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image:[
        {
            type: Schema.Types.ObjectId,
            ref:"Image"
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category is required"]
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;