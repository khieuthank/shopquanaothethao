const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderDetailId:[
        {
            type: Schema.Types.ObjectId,
            ref: "OrderDetail"
        }
    ],
    status:{
        type: String,
        required: true,
        enum: ["Pending", "Shipped", "Delivered"],
        default: "pending"
    },
    totalAmount:{
        type: Number,
        required: true,
        default: 0
    },
    cratedAt:{
        type: Date,
        required: true,
        default: Date.now()
    }
}, {timestamps: true})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;