import './styles.css';

const menu = document.getElementById('dropdown-header');
const hidden = document.querySelector('.hidden');

function toggleClass(parent, child, classList) {
  parent.addEventListener('click', () => {
    child.classList.toggle(classList);
  })
}

function addClassOnHover(parent, child, classList) {
  parent.addEventListener('mouseover', () => {
    setTimeout(() => {
      child.classList.remove(classList);
    }, 50);
  })
  parent.addEventListener('mouseleave', () => {
    setTimeout(() => {
      child.classList.add(classList);
    }, 50);
  })
}

addClassOnHover(menu, hidden, 'hidden');
addClassOnHover(hidden, hidden, 'hidden');