import "../stylesheets/index.scss"; // css-loaderがないと読み込めない
import "./carousel/index.js";

let hamburger = document.querySelector(".c-btn--hamburger");

const slideNav = () => {
  document.querySelector(".l-nav").classList.toggle("--show");
  document.querySelector("body").classList.toggle("u-bg--black");
};
hamburger.addEventListener("click", function () {
  slideNav();
  this.classList.toggle("--show");
});
