
const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    }, 
    name:{
        type: String,
        required: true,
    }, 
    message:{
        type: String,
        required: true,
    },    
})

module.exports = mongoose.model("messages",messagesSchema);
