const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function scrollToPayment() {
  const paymentDiv = document.querySelector(".payment");
  paymentDiv.scrollIntoView({behavior: "smooth"});
}

const tabGame = document.querySelector(".tab-game");
const tabroom = document.querySelector(".tab-room");
const tabsquad = document.querySelector(".tab-squad");
const tabpulsa = document.querySelector(".tab-pulsa");
const sectionGame = document.querySelector(".section-game");
const sectionroom = document.querySelector(".section-room");
const sectionsquad = document.querySelector(".section-squad");
const sectionpulsa = document.querySelector(".section-pulsa");

tabGame.addEventListener("click", () => {
  sectionGame.style.display = "block";
  sectionpulsa.style.display = "none";

  tabGame.style.border = "1px solid white";
  tabroom.style.border = "none";
  tabsquad.style.border = "none";
  sectionroom.style.display = "none";
  tabpulsa.style.border = "none";
  sectionsquad.style.display = "none";
});

tabroom.addEventListener("click", () => {
  sectionGame.style.display = "none";
  sectionpulsa.style.display = "none";
  sectionroom.style.display = "block";

  tabroom.style.border = "1px solid white";
  tabGame.style.border = "none";
  tabsquad.style.border = "none";
  tabpulsa.style.border = "none";
  sectionsquad.style.display = "none";
});

tabsquad.addEventListener("click", () => {
  sectionGame.style.display = "none";
  sectionroom.style.display = "none";
  sectionpulsa.style.display = "none";
  sectionsquad.style.display = "block";

  tabroom.style.border = "none";
  tabGame.style.border = "none";
  tabpulsa.style.border = "none";
  tabsquad.style.border = "1px solid white";
});

tabpulsa.addEventListener("click", () => {
  sectionGame.style.display = "none";
  sectionroom.style.display = "none";
  sectionsquad.style.display = "none";
  sectionpulsa.style.display = "block";

  tabroom.style.border = "none";
  tabGame.style.border = "none";
  tabsquad.style.border = "none";
  tabpulsa.style.border = "1px solid white";
});
