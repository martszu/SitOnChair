document.addEventListener("DOMContentLoaded", function() {
//polecenie 1
var secondMenu = document.querySelector(".second_menu");
var firma = document.querySelector(".firma");

firma.addEventListener("mouseover", function() {
  secondMenu.classList.remove("second_menu_hidden");
});

firma.addEventListener("mouseleave", function() {
  secondMenu.classList.add("second_menu_hidden");
});

//polecenie 2
var sleepingKid = document.querySelector("#sleeping_kid");
var emptyF = document.querySelector(".empty_f");
var emptyS = document.querySelector(".empty_s");
var whiteChair = document.querySelector("#white_chair");

sleepingKid.addEventListener("mouseover", function() {
  emptyS.classList.add("empty_one");
});

sleepingKid.addEventListener("mouseleave", function() {
  emptyS.classList.remove("empty_one");
});

whiteChair.addEventListener("mouseover", function() {
  emptyF.classList.toggle("empty_one");
});

whiteChair.addEventListener("mouseleave", function() {
  emptyF.classList.remove("empty_one");
});


});
