var hamburger = document.querySelector('.hamburger');
var navWrapper = document.querySelector('.nav-wrapper');
var main = document.querySelector('.main');
var navLinks = document.querySelectorAll('.nav-list__link');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  
  if (hamburger.classList.contains('active')) {
    navWrapper.classList.add('active');
    main.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    navWrapper.classList.remove('active');
    main.classList.remove('active');
    document.body.style.overflow = '';
  }
});

navLinks.forEach(function(navLink){
  navLink.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navWrapper.classList.remove('active');
    main.classList.remove('active');
    document.body.style.overflow = '';
  });
});


let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});