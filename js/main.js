"use strict";

const elSliderSwich = document.querySelectorAll(".features_l_link");

const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");

// elSliderSwich.forEach((Element, index) => {
//   Element.addEventListener("click", function () {
//     Element.classList.toggle("active-slider");
//     // elhidden[index].classList.toggle("hidden");
//     // elplusImg[index].classList.toggle("plus-toggled");
//   });
// });

tab1.addEventListener("click", function () {
  slide2.classList.remove("active-slide");
  slide3.classList.remove("active-slide");
  slide1.classList.add("active-slide");
  this.classList.add("active-slider");
  tab2.classList.remove("active-slider");
  tab3.classList.remove("active-slider");
});
tab2.addEventListener("click", function () {
  slide1.classList.remove("active-slide");
  slide3.classList.remove("active-slide");
  slide2.classList.add("active-slide");
  this.classList.add("active-slider");
  tab1.classList.remove("active-slider");
  tab3.classList.remove("active-slider");
});
tab3.addEventListener("click", function () {
  slide1.classList.remove("active-slide");
  slide2.classList.remove("active-slide");
  slide3.classList.add("active-slide");
  this.classList.add("active-slider");
  tab1.classList.remove("active-slider");
  tab2.classList.remove("active-slider");
});

// FAQ
const elQuestionOpener = document.querySelectorAll(".question-wrapper");
const elAnswer = document.querySelectorAll(".answer");
const elArrowImg = document.querySelectorAll(".arrow-img");

elQuestionOpener.forEach((Element, index) => {
  Element.addEventListener("click", function () {
    Element.classList.toggle("js_open_question");
    elAnswer[index].classList.toggle("jsOpenAnswer");
    elArrowImg[index].classList.toggle("arrow-close");
  });
});
