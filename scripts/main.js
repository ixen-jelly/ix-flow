// navbar shadow on scroll
const navbar = document.querySelector('.navbar');

function handleNavbarShadow() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
// Run on scroll
window.addEventListener('scroll', handleNavbarShadow);
// Run once on page load
window.addEventListener('load', handleNavbarShadow);



// aos animation
AOS.init();



// top button
var mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



// footer year
document.getElementById("year").textContent = new Date().getFullYear();
