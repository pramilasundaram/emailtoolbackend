const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:'Auth'
    },
   username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Contact', contactSchema)