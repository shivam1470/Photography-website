var elements = document.getElementsByClassName('column')

// Declare a "loop" variable
var i

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = '100%'
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = '50%'
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = '25%'
  }
}

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
