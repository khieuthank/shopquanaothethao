const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    street:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    } 
}, {timestamps: true})

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;