import mobileNav from "./modules/mobile-nav.js";
mobileNav();
//========================================================================================================================================================
//styles for table
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".price__row");
  const discountTitle = document.querySelector(".price__discount-title");
  const discountTitleIndex = Array.from(rows).indexOf(discountTitle);

  let highlight = true;
  for (let i = 0; i < discountTitleIndex; i++) {
    if (highlight) {
      rows[i].classList.add("highlight");
    }
    highlight = !highlight;
  }

  highlight = true;
  for (let i = discountTitleIndex + 1; i < rows.length; i++) {
    if (highlight) {
      rows[i].classList.add("highlight");
    }
    highlight = !highlight;
  }
});
//========================================================================================================================================================

import Swiper from "swiper/bundle";

import "swiper/css/bundle";
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination2",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  }
});
