const mongoose = require("mongoose");
const { Schema } = mongoose;

const affiliateSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
    createdAt:{
        type: Date,
        default: Date.now()
    }
},{timestamps: true})

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

module.exports = Affiliate;