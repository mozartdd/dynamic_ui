import './styles.css';
import { toggleClass, addClassOnHover } from './dropdown.js';
import { nextSlide } from './carousel.js' 

const menu = document.getElementById('dropdown-header');
const hidden = document.querySelector('.hidden');
const nextBtn = document.querySelector('[data-next]');

nextBtn.addEventListener('click', () => {
  nextSlide(1)
});

addClassOnHover(menu, hidden, 'hidden');
addClassOnHover(hidden, hidden, 'hidden');