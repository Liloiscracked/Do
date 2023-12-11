function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('i');

menu.addEventListener('click', () => {
  console.log("hi");
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

const $panels = document.querySelectorAll(".panel");
console.log($panels);
function removeActiveClasses(){
  $panels.forEach(($panels)=>{
    $panels.classList.remove("active");
  })
}
$panels.forEach(($panels)=>{
$panels.addEventListener('mouseover',()=>
{
  console.log("test");
removeActiveClasses();
$panels.classList.add("active");
})
})

