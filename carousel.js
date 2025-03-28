
// 
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const products = document.querySelectorAll('.product');
let position = 0;

const visibleProductsDesktop = 4;
const visibleProductsMobile = 2;
let visibleProducts = window.innerWidth <= 768 ? visibleProductsMobile : visibleProductsDesktop;

let totalSlides = products.length - visibleProducts;

function updateCarousel() {
    const productWidth = products[0].offsetWidth + 20; // 20 là gap
    carousel.style.transform = `translateX(${-position * productWidth}px)`;
}

window.addEventListener('resize', () => {
    visibleProducts = window.innerWidth <= 768 ? visibleProductsMobile : visibleProductsDesktop;
    totalSlides = products.length - visibleProducts;
    if (position > totalSlides) position = totalSlides;
    if (position < 0) position = 0;
    updateCarousel();
});

function addButtonEvents(button, action) {
    button.addEventListener('click', action);
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        action();
    });
}

addButtonEvents(nextBtn, () => {
    if (position < totalSlides) {
        position++;
        updateCarousel();
    }
});

addButtonEvents(prevBtn, () => {
    if (position > 0) {
        position--;
        updateCarousel();
    }
});

updateCarousel();