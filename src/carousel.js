export let currentSlideIdx = 0;

localStorage.setItem('slideIdx', JSON.stringify(currentSlideIdx));

const slides = document.querySelectorAll('.content');
const jumpBtn = document.querySelectorAll('.jump-btn');

// Helper function to add or remove classlist.
function classListToggle(element, attribute) {
  element.forEach(s => s.classList.add(attribute));
  element[currentSlideIdx].classList.remove(attribute);
}

// Moves one slide forward or backwards.
export function nextSlide(step) {
  currentSlideIdx = (currentSlideIdx + step + slides.length) % slides.length;
  classListToggle(slides, 'invisible');
  classListToggle(jumpBtn, 'inactive');
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
      element.forEach((e) => e.classList.add(clList));
      el.classList.remove(clList);
    })
  })
}

export function slideShow(elements, clList) {

  elements.forEach((element) => element.classList.add(clList));
  if (currentSlideIdx > elements.length) currentSlideIdx = 1;
  elements[currentSlideIdx-1].classList.remove(clList);
}

export function incrementIdx() {
  currentSlideIdx++;
}