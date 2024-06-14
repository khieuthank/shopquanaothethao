const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderId:{
        type: Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;