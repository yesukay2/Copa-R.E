var thumbnail1 = document.getElementById("thumb1")
var thumbnail2 = document.getElementById("thumb2")
var thumbnail3 = document.getElementById("thumb3")
var thumbnail4 = document.getElementById("thumb4")


function showThumb1(src) {
    thumbnail1.src = src;
}
function showThumb2(src) {
    thumbnail2.src = src;
}
function showThumb3(src) {
    thumbnail3.src = src;
}
function showThumb4(src) {
    thumbnail4.src = src;
}


// var header = document.querySelector(".header-bottom");
// if (document.body.scrollBy > 1) {
//     header.setAttribute("id", "sticky");
// } else {
//     header.setAttribute('id', "")
// }
// console.log(header);


// $(document).ready(function(){
//   if (document.body.scrollBy > 1) {
//     header.setAttribute("id", "sticky");
// } else {
//     header.setAttribute('id', "")
// }
// });


// function responsiveNav() {
//     let navbar = document.getElementsByClassName("header-bottom");
//     if (navbar.className === "header-bottom") {
//         navbar.className += " responsive";
//     } else {
//         navbar.className = "header-bottom";
//     }
// }

var hamburger = document.getElementById("hamburger");
var menuList = document.getElementById("mobile-navbar");

function showNav(){
    console.log("Unhidden");
    if(window.screen.width <= 768 && menuList.style.display && menuList.style.display === "none"){
        menuList.style.display="block";
    }
}

function hideNav(){
    console.log("hidden");
    if(menuList.style.display == "block"){
        menuList.style.display="none";
    }
}
