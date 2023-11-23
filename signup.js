//Sign up authentication
const signUp = document.getElementById("signUp");
signUp.addEventListener('click',()=>{
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    console.log(email + username);
})