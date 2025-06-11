let currentSlideIdx = 1;

export function nextSlide(n) {
    showSlides(currentSlideIdx += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.content');

  if (n > slides.length) {currentSlideIdx = 1};
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('invisible');
  }
  slides[currentSlideIdx-1].classList.remove('invisible');
  console.log(currentSlideIdx);
}