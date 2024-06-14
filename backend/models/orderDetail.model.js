const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderDetailSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true})

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

module.exports = OrderDetail;