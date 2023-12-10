"use strict";
feather.replace();
const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('i');
var email = document.getElementById("email");
var name1 = document.getElementById("name");
menu.addEventListener('click', () => {
  console.log("hi");
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    if( name1.style.display==="none"){
        name1.style.display = 'block';
        email.style.display = 'block';
    }else
    {name1.style.display="none";
email.style.display = 'none';}
    
});