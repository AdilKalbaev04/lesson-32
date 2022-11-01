// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var sing = document.querySelector(".logo-but");
var action = document.querySelector(".action__block");

sing.addEventListener("click", function () {
  sing.classList.toggle("is-active");
  action.classList.toggle("is-active");
});

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  // Do something else, like open/close menu
});
