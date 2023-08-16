//alias the directory for the shorter one
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slider = $('.slider');
const sliderItems = $$('.slider__item');
const sliderImages = $('.slider_main-img');

const prevBtn = $('.slider_left');
const nextBtn = $('.slider_rignt');

const sliderLength = sliderItems.length;

let slideraActive = 0;

//all img arrange in a row, they will be slided to the left when clicking next button and to the right when clicking previous button
nextBtn.addEventListener('click', () => {
    if(slideraActive < sliderLength - 1) {
        slideraActive++;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
    } else {
        slideraActive = 0;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
    }
})

prevBtn.addEventListener('click', () => {
    if(slideraActive > 0) {
        slideraActive--;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
    } else {
        slideraActive = sliderLength - 1;
        sliderImages.style.transform = `translateX(-${slideraActive * 100}%)`;
    }
})

// automatically slided after every 3 seconds
setInterval(() => {
    nextBtn.click();
}, 3000);