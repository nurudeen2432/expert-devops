const btnHamburger = document.querySelector("#btnHarm");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has_fade");
const body = document.querySelector("body")
btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {// close Hamburger menu
        body.classList.remove(".noscroll")
        header.classList.remove("open");
         fadeElms.forEach(function (element) {
          element.classList.remove("fade-in");
        element.classList.add("fade-out");  
        });
  } else {
         body.classList.add(".noscroll")
        header.classList.add("open"); //open hamburger menu
        fadeElms.forEach(function (element) {
          element.classList.remove("fade-out");
        element.classList.add("fade-in");  
        });
        
    }
});