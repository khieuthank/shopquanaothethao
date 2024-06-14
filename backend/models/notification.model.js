const mongoose = require("mongoose");
const { Schema } = mongoose;

const notficationSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    mess:{
        type: String,
        required: true,
    },
    readed:{
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
},{timestamps:true})

const Notification = mongoose.model("Notification", notficationSchema);

module.exports = Notification;