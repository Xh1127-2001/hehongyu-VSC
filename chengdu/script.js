// 首页轮播：支持左右按键切换，并自动播放。
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const previousButton = document.querySelector(".hero-arrow-prev");
const nextButton = document.querySelector(".hero-arrow-next");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
}

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

// 尊重减少动态效果偏好；手动按键仍可切换图片。
if (!prefersReducedMotion.matches) {
  window.setInterval(() => showSlide(currentSlide + 1), 6000);
}
