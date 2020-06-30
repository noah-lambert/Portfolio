const carousel = document.querySelector('#carousel-blackjack');
const slides = Array.from(carousel.children);
const nextBtn = document.querySelector('#next-blackjack');
const prevBtn = document.querySelector('#prev-blackjack');


const slideWidth = slides[0].getBoundingClientRect().width;

//set the images next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
console.log(slides);
slides.forEach(setSlidePosition);
console.log(slides[1]);

const moveSlide = (carousel, currentSlide, targetSlide) => {
    console.log(targetSlide);
    carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
 
//move images to the right
if(nextBtn){
    nextBtn.addEventListener('click', e => {
        const currentSlide = carousel.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        console.log(nextSlide);
        moveSlide(carousel, currentSlide, nextSlide);
    });
} 

//move images to the left
if(prevBtn) {
    prevBtn.addEventListener('click', e => {
        const currentSlide = carousel.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        moveSlide(carousel, currentSlide, prevSlide);
    });
}