let currentSlideIdx = 0;
const slides = document.querySelectorAll('.content');

// Helper function to add or remove classlist.
function classListToggle(element, attribute) {
  element.forEach(s => s.classList.add(attribute));
  element[currentSlideIdx].classList.remove(attribute);
}

// Moves one slide forward or backwards.
export function nextSlide(step) {
  currentSlideIdx = (currentSlideIdx + step + slides.length) % slides.length;
  classListToggle(slides, 'invisible');
}

// Jumps between slides.
export function jumpToSlide(element) {
  element.forEach((el) => {
    el.addEventListener('click', () => {
      currentSlideIdx = el.dataset.value;
      classListToggle(slides, 'invisible');
    })
  })
}

// Adds border around current slide indicator.
export function indicateActive(element, clList) {
  element.forEach((el) => {
    el.addEventListener('click', () => {
      element.forEach((e) => e.classList.remove(clList));
      el.classList.add(clList);
    })
  })
}

export function slideShow() {
    currentSlideIdx++;

    slides.forEach((slide) => slide.classList.add('invisible'));
    if (currentSlideIdx > slides.length) currentSlideIdx = 1;
    slides[currentSlideIdx-1].classList.remove('invisible');
    setTimeout(slideShow, 4000);
}