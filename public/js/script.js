




var div_scnd_menu = document.querySelector(".div-humburger");
var ens_bar = document.querySelector(".ens-bar");
var left_bar = document.querySelector(".left-bar");
var middle_bar = document.querySelector(".middle-bar");
var right_bar = document.querySelector(".right-bar");
var bol = true;
var phone_menu = document.querySelector('.phone-hidden');
var section = document.querySelector(".row");

const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
console.log(width, height);

div_scnd_menu.addEventListener('click', function() {
    if (bol) {
        phone_menu.style.height = '250px';
        section.style.paddingTop = '250px';
        left_bar.style.transform = "rotate(-45deg)";
        middle_bar.style.display="none";
        right_bar.style.transform= "rotate(45deg)";
        bol = false
    } else {
        phone_menu.style.height = '0px';
        section.style.paddingTop = '0px';
        left_bar.style.transform = "rotate(0deg)";
        middle_bar.style.display="inline";
        right_bar.style.transform= "rotate(0deg)";
        bol = true
    }
    
})












