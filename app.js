//here is where we start
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect('mongodb+srv://lilo:123@cluster0.bonii93.mongodb.net/Do', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))

app.use(express.static('./login-signup'));
app.use(express.static('./home'));


app.post("/signin",(req,res)=>{
  var email = req.body.email;
  var password = req.body.password;

  var data = {
      "email" : email,
      "password" : password
  }
  //condition is to be tested
  if(db.collection('user').find(data) === null){
  return res.redirect('Signin.html')
}
else{
  //How to add message??
  return res.redirect('Home.html');
}

})

app.post("/sign_up",(req,res)=>{
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  var data = {
      "username": username,
      "email" : email,
      "password" : password
  }
  if(db.collection('user').find(data) === null){
  db.collection('users').insertOne(data,(err,collection)=>{
      if(err){
          throw err;
      }
      console.log("Record Inserted Successfully");
  });

  return res.redirect('Home.html')
}
else{
  //How to add message??
  return res.redirect('Sign_UP.html');
}

})


app.get("/",(req,res)=>{
  res.set({
      "Allow-access-Allow-Origin": '*'
  })
  return res.redirect('Sign_UP.html');
}).listen(3000);


console.log("Listening on PORT 3000");