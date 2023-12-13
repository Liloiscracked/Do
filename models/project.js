const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectname:{
        type: String,
        required: true,
    }, 
    username:{
        type: String,
        required: true,
    },    
})
module.exports = mongoose.model("project",projectSchema);
