// create the schema to our collections (donor and recipient)
const mongoose = require('mongoose');
const donorSechema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password:{
        type:String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
        default:Date.now,
    },
});
// apply the schema to our collections (donor and recipient)
module.exports = mongoose.model("users",donorSechema);