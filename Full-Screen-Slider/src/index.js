import "./index.html";
import "./style.css";

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const auto = true;

const intervalTime = 5000;

let slideInterVal;

const nextSlide = () => {

    //Get Current Class
    const current = document.querySelector(".current");

    //Remove Current Class
    current.classList.remove('current');

    //Check For nect slide

    if (current.nextElementSibling) {
        //Add Current To Next Sibling
        current.nextElementSibling.classList.add('current')
    } else {
        // Return first Element
        slides[0].classList.add('current')
    }
}
const prevSlide = () => {

    //Get Current Class
    const current = document.querySelector(".current");

    //Remove Current Class
    current.classList.remove('current');

    //Check For nect slide

    if (current.previousElementSibling) {
        //Add Current To Next Sibling
        current.previousElementSibling.classList.add('current')
    } else {
        // Return first Element
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

// Button Events

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterVal);
        slideInterVal = setInterval(nextSlide, intervalTime)
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterVal);
        slideInterVal = setInterval(nextSlide, intervalTime)
    }
});

// Auto Slide
if (auto) {
    // Run next slide a interval time

    slideInterVal = setInterval(nextSlide, intervalTime)
}