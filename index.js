const slides = document.querySelectorAll(".flex-col > .slide");
const radios = document.querySelectorAll('input[name="slider"]');

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add("active");
  });
});