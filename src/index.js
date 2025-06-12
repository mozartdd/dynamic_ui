import './styles.css';
import { toggleClass, addClassOnHover } from './dropdown.js';
import { nextSlide, jumpToSlide, indicateActive, slideShow, incrementIdx} from './carousel.js' 

const menu = document.getElementById('dropdown-header');
const hidden = document.querySelector('.hidden');
const slides = document.querySelectorAll('.content');

const nextBtn = document.querySelector('[data-next]');
const previousBtn = document.querySelector('[data-previous]');
const jumpBtn = document.querySelectorAll('.jump-btn');

// Calls function's to change slide adn
// current active slide indicator.
setInterval(() => {
  incrementIdx();
  slideShow(slides, 'invisible');
  slideShow(jumpBtn, 'inactive');
}, 1000);

nextBtn.addEventListener('click', () => {
  nextSlide(1);
});
previousBtn.addEventListener('click', () => {
  nextSlide(-1);
})

// Indicates active slide with red border.
indicateActive(jumpBtn, 'inactive');

// Buttons to jump between slides.
jumpToSlide(jumpBtn);

addClassOnHover(menu, hidden, 'hidden');
addClassOnHover(hidden, hidden, 'hidden');