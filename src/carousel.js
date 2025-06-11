let currentSlideIdx = 0;
const slides = document.querySelectorAll('.content');

// Moves one slide forward or backwards.
export function nextSlide(step) {
  currentSlideIdx = (currentSlideIdx + step + slides.length) % slides.length;

  classListToggle(slides, 'invisible');
}

// Jumps between slides.
export function jumpToSlide(n) {
  currentSlideIdx = n;
  classListToggle(slides, 'invisible');
}

// Helper function to add or remove classlist.
function classListToggle(element, attribute) {
  element.forEach(s => s.classList.add(attribute));
  element[currentSlideIdx].classList.remove(attribute);
}