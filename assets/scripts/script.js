let slideIndex = 1;

function showSlides(index) {
  const slides = document.querySelector('.carousel-wrapper');
  if (index > 3) {
    slideIndex = 1;
  } else if (index < 1) {
    slideIndex = 3;
  }
  const translateValue = -100 * (slideIndex - 1);
  slides.style.transform = `translateX(${translateValue}%)`;
}

function currentSlide(index) {
  slideIndex = index;
  showSlides(slideIndex);
}

showSlides(slideIndex);