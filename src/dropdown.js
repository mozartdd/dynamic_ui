export function toggleClass(parent, child, classList) {
  parent.addEventListener('click', () => {
    child.classList.toggle(classList);
  })
}

export function addClassOnHover(parent, child, classList) {
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