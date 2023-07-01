const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Auth', authSchema)