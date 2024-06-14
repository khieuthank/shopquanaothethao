const mongoose = require("mongoose");
const { Schema } = mongoose;

const voucherSchma = new Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    discount:{
        type: Number,
        required: true
    },
    expiryDate:{
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},  { timestamps: true }); 

const Voucher = mongoose.model("Voucher", voucherSchma);

module.exports = Voucher;
