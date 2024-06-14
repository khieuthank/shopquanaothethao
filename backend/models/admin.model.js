const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchma = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:6,
        maxlength:15,
    },
    password :{
        type:String,
        required:true,
        unique:true,
        minlength:6,
        maxlength:15,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profile:{
        type:String,
        required:true,
        unique:true,
        minlength:6,
        maxlength:225
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }

}, {timestamps: true});
 const Admin = mongoose.model('Admin',adminSchma);
 module.exports = Admin;