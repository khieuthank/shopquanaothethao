const mongoose = require("mongoose");
const { Schema } = mongoose;

const iventorySchema = new Schema({
   productId:{
    type: Schema.Types.ObjectId,
    ref: "Product"
   },
   quantity:{
    type: Number,
    default: 0
   },
   size:{
    type: Schema.Types.String,
    ref: "Size"    
   },
   colorId:{
    type: Schema.Types.ObjectId,
    ref: "Color"
   },
   createdAt:{
    type: Date,
    default: Date.now
   }


},{timestamps: true})

const Iventory = mongoose.model("Iventory", iventorySchema);

module.exports = Iventory;