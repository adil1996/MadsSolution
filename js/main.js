const sectionClick = (evt) =>{
    debugger
    document.querySelector('.navbar .active').classList.remove('active');
    evt.classList.add('active')
}

const square = document.querySelector('#process-title');
const square1 = document.querySelector('#process-desc');
const carousal = document.querySelector('#myCarousel');

square.classList.remove('animate__animated');
square.classList.remove('animate__fadeInDown');

square1.classList.remove('animate__animated');
square1.classList.remove('animate__fadeInUp');

carousal.classList.remove('carousal-animation');


const observer = new IntersectionObserver(entries => {
    debugger
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square.classList.add('animate__animated');
        square.classList.add('animate__fadeInDown');

        square1.classList.add('animate__animated');
        square1.classList.add('animate__fadeInUp');

        carousal.classList.add('carousal-animation');
      return;
    }

    square.classList.remove('animate__animated');
    square.classList.remove('animate__fadeInDown');

    square1.classList.remove('animate__animated');
    square1.classList.remove('animate__fadeInUp');

    carousal.classList.remove('carousal-animation');
  });
});

observer.observe(document.querySelector('.process'));