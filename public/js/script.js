




var div_scnd_menu = document.querySelector(".div-humburger");
var ens_bar = document.querySelector(".ens-bar");
var left_bar = document.querySelector(".left-bar");
var middle_bar = document.querySelector(".middle-bar");
var right_bar = document.querySelector(".right-bar");
var bol = true;

div_scnd_menu.addEventListener('click', function() {
    if (bol) {
        left_bar.style.transform = "rotate(-45deg)";
        middle_bar.style.display="none";
        right_bar.style.transform= "rotate(45deg)";
        bol = false
    } else {
        left_bar.style.transform = "rotate(0deg)";
        middle_bar.style.display="inline";
        right_bar.style.transform= "rotate(0deg)";
        bol = true
    }
    
})












