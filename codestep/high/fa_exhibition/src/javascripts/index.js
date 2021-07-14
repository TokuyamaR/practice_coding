import "../stylesheets/index.scss"; // css-loaderがないと読み込めない
import "./carousel/index.js";

let hamburger = document.querySelector(".c-btn--hamburger");

const slideNav = () => {
  document.querySelector(".l-nav").classList.toggle("--show");
  document.getElementById("mask").classList.toggle("u-bg--black");
};
hamburger.addEventListener("click", function () {
  slideNav();
  this.classList.toggle("--show");
});

document.getElementById("mask").addEventListener("click", function () {
  slideNav();
  hamburger.classList.toggle("--show");
});

let linkList = document.querySelectorAll(".l-nav a");

linkList.forEach(function (target) {
  target.addEventListener("click", function () {
    slideNav();
    hamburger.classList.toggle("--show");
  });
});
