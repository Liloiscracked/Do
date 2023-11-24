//Sign in Authentication 
const Login = document.getElementById('Login');
Login.addEventListener('click',()=>{

//connecting to the Database
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb+srv://lilo:123@cluster0.bonii93.mongodb.net/Do',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/Signin",(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;

    var data = {
        "username": username,
        "password" : password
    }
    console.log(data);

    db.collection('users').find(data,(err,collection)=>{
        if(err){
            throw err;
        }
    });
    return res.redirect('Home.html')
})
})