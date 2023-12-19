const sectionClick = (evt) =>{
    debugger
    document.querySelector('.navbar .active').classList.remove('active');
    evt.classList.add('active')
}

const square = document.querySelector('#process-title');
const square1 = document.querySelector('#process-desc');

square.classList.remove('animate__animated');
square.classList.remove('animate__fadeInDown');

square1.classList.remove('animate__animated');
square1.classList.remove('animate__fadeInUp');



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square.classList.add('animate__animated');
        square.classList.add('animate__fadeInDown');

        square1.classList.add('animate__animated');
        square1.classList.add('animate__fadeInUp');


      return;
    }

    square.classList.remove('animate__animated');
    square.classList.remove('animate__fadeInDown');

    square1.classList.remove('animate__animated');
    square1.classList.remove('animate__fadeInUp');

  });
});

observer.observe(document.querySelector('.process'));


/**
 * 
 * 
 * method to select the element by id or class
 * 
 */

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
      return [...document.querySelectorAll(el)]
  } else {
      return document.querySelector(el)
  }
}

/**
 * Mobile Navigation view Function
 */

const toggleMobileView = () => {
  let x = select('#myTopnav')
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

var splitBar = select('.icon')
splitBar.addEventListener('click', toggleMobileView);

let navbarlinks = select('#myTopnav .scrollto', true)
navbarlinks.forEach(
  navbarlink => {
      navbarlink.addEventListener('click', toggleMobileView)
  }
)