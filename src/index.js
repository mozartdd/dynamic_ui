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
    child.classList.remove(classList);
  })
  parent.addEventListener('mouseleave', () => {
    child.classList.add(classList);
  })
}

addClassOnHover(menu, hidden, 'hidden');