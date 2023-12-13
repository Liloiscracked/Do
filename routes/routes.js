//all routes will be managed here
const express = require('express');
const router = express.Router();
const users = require('../models/users');
const multer = require('multer');
// image upload
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads') //image places
    },
    filename: function(req,file,cb){ 
        cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
    }
});

var upload = multer({
    storage:storage
}).single("image");//the image id in the front end !!!!

router.post("/add",upload,(req,res)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        //img:req.file.filename, for images
    })
    user.save((err)=>{
        if(err){
            res.json({message:err.message,type:'danger'})
        }
        else{
            req.session.message = {
                type :'success',
                message : 'user added successfully!!!!'
            };
            res.redirect('/')
        }
    })
})

router.get('/users',(req,res)=>{
    res.send("All users");
});
//get all  
router.get('/',(req,res)=>{
    var data = users.findOne({name:'hola'});
    console.log(data);
    res.render('index',{title:'hola',users: data})
})
module.exports = router;