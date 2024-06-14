const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeSchema = new Schema({
    size: {
        type: String,
        required: true,
        unique: true
    }
},{ timestamps: true })

const Size = mongoose.model('Size',sizeSchema  );

module.exports = Size;