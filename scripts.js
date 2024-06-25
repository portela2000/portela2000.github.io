const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const btnMobile = document.getElementById('btn-mobile');
   const nav = document.getElementById('nav');
   nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu); 
btnMobile.addEventListener('touchstart', toggleMenu); 


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Muda a cada 3 segundos

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function () {
    const btnMobile = document.getElementById("btn-mobile");
    const menu = document.getElementById("menu");

    btnMobile.addEventListener("click", function() {
        menu.classList.toggle("menu-active");
    });

    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('menu-active');
        });
    });
});
