
const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    projectname:{
        type: String,
        required: true,
    }, 
    username:{
        type: String,
        required: true,
    },
    task:{
        type:String,
        required:true,
    },    
})
module.exports = mongoose.model("tasks",TaskSchema);