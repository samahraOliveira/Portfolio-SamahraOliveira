function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {

    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i)
  });
}
const titulo = document.querySelector('.titulo-principal');
const subtitulo = document.querySelector('.subtitulo');
typeWrite(titulo);
typeWrite(subtitulo);

function menuMobile() {
  const activeMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .menu');

  activeMenu.addEventListener('click', () => {
    activeMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });

}
menuMobile();

function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}


/* ANIMAÇÃO */

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}
