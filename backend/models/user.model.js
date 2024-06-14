const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    username:{
        type: String,
        required: [true, "Username is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    phone:{
        type: String
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = User;