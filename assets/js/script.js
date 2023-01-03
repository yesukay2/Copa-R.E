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


var hamburger = document.getElementById("hamburger");
var menuList = document.getElementById("mobile-navbar");



function hideNav(){
    menuList.setAttribute("style", "width:0px");
    menuList.classList.remove('active');
}

const closebt = document.getElementById('closeBt');
// const hamburger = document.getElementById('hamburger');


document.onclick = function(e){
    if(e.target.className !== "navbar-link" && e.target.id !== "closeBt"){
        // menuList.classList.remove('active');
    }
}

hamburger.onclick = function(){
    menuList.style.width="250px";
    menuList.classList.toggle('active');
}
