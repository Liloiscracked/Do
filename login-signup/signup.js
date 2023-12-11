//Sign up authentication
const signUp = document.getElementById("signUp");
signUp.addEventListener('click',()=>{
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    console.log(email + username);
})

const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('i');
var animation = document.getElementById("ball");
var password = document.getElementById("password");
var shadow = document.getElementById("shadow");
menu.addEventListener('click', () => {
  console.log("hi");
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    if(password.style.display==="none"){
        password.style.display="block"
        animation.style.display="block"
        shadow.style.display="block"
    }
    else{
        password.style.display="none"
        animation.style.display="none"
        shadow.style.display="none"
    }
});