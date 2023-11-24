//here is where we start
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

app.use(express.static('./login-signup'));

// Define a route
app.get('/', (req, res) => {
    res.sendFile("/Users/medoaljoudi/Desktop/Web Project/login-signup/Signin.html");
});
 app.get('/Sign_UP.html',(req,res)=>{
     res.sendFile("/Users/medoaljoudi/Desktop/Web Project/Signin.html");
 });

// Set the port to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});