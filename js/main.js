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