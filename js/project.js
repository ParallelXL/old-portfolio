"use strict";

const btn = document.querySelectorAll(".hover");

btn.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    // console.log(e.target.children.length);
    if (e.target.children.length === 1) {
      e.target.children[0].classList.add("fa-arrow-right-long");
      e.target.children[0].classList.remove("fa-chevron-right");
    }
  });
  btn.addEventListener("mouseout", function (e) {
    // console.log(e.target.children.length);
    if (e.target.children.length === 1) {
      e.target.children[0].classList.add("fa-chevron-right");
      e.target.children[0].classList.remove("fa-arrow-right-long");
    }
  });
});
// <i class="fa-solid fa-arrow-right"></i>
