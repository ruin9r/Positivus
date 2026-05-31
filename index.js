const body = document.querySelector(".page");
const burgerBtn = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".header__actions");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle("header__actions--open");
  burgerBtn.classList.toggle("header__burger--active");
  overlay.classList.toggle("overlay--active");
  body.classList.toggle("page--blocked");
})

const swiper = new Swiper('.hero__swiper', {
  direction: "horizontal",
  slidesPerView: "auto",
  allowTouchMove: false,
  loop: true,
  speed: 9000,
  spaceBetween: 95, 
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  }
})