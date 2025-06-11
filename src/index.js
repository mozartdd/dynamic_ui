import './styles.css';
import { toggleClass, addClassOnHover } from './dropdown.js';
import { nextSlide, jumpToSlide } from './carousel.js' 

const menu = document.getElementById('dropdown-header');
const hidden = document.querySelector('.hidden');

const nextBtn = document.querySelector('[data-next]');
const previousBtn = document.querySelector('[data-previous]');
const jumpBtn = document.querySelectorAll('.jump-btn');

nextBtn.addEventListener('click', () => {
  nextSlide(1);
});
previousBtn.addEventListener('click', () => {
  nextSlide(-1);
})
jumpBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    jumpToSlide(btn.dataset.values);
  })
})

addClassOnHover(menu, hidden, 'hidden');
addClassOnHover(hidden, hidden, 'hidden');