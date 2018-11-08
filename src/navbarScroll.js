window.onscroll = function() {
   myFunction()
};

var navbar = document.getElementById("subtitle");
var sticky = navbar.offsetTop;

function myFunction() { //fct that change the class of div subtitle to change CSS property
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky");
   }
}
