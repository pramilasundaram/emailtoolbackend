const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    
    value: {
        type: String,
        required: false
    },
    message: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Review', ReviewSchema)