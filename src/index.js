import './styles.css';
import { toggleClass, addClassOnHover } from './dropdown.js';
import { nextSlide, jumpToSlide, indicateActive, slideShow } from './carousel.js' 

const menu = document.getElementById('dropdown-header');
const hidden = document.querySelector('.hidden');

const nextBtn = document.querySelector('[data-next]');
const previousBtn = document.querySelector('[data-previous]');
const jumpBtn = document.querySelectorAll('.jump-btn');

slideShow();

nextBtn.addEventListener('click', () => {
  nextSlide(1);
});

previousBtn.addEventListener('click', () => {
  nextSlide(-1);
})

// Indicates active slide with red border.
indicateActive(jumpBtn, 'active');

// Jumps between slides.
jumpToSlide(jumpBtn);

addClassOnHover(menu, hidden, 'hidden');
addClassOnHover(hidden, hidden, 'hidden');