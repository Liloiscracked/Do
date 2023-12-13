// create the schema to our collections 
const mongoose = require('mongoose');
const usersSechema =  new mongoose.Schema({
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
    // Date: {
    //     type: Date,
    //     required: true,
    //     default:Date.now,
    // },
});
// apply the schema to our collections 
module.exports = mongoose.model("users",usersSechema);
