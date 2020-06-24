const carousel1 = document.querySelector('#carousel-plattsmap');
const slides1 = Array.from(carousel1.children);
const nextBtn1 = document.querySelector('#next-plattsmap');
const prevBtn1 = document.querySelector('#prev-plattsmap');


const slideWidth1 = slides1[0].getBoundingClientRect().width;

//set the images next to one another
const setSlidePosition1 = (slide, index) => {
    slide.style.left = slideWidth1 * index + 'px';
};
slides1.forEach(setSlidePosition1);

const moveSlide1 = (carousel1, currentSlide, targetSlide) => {
    carousel1.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
 
//move images to the right
if(nextBtn1){
    nextBtn1.addEventListener('click', e => {
        const currentSlide = carousel1.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        moveSlide1(carousel1, currentSlide, nextSlide);
    });
} 

//move images to the left
if(prevBtn1) {
    prevBtn1.addEventListener('click', e => {
        const currentSlide = carousel1.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        moveSlide1(carousel1, currentSlide, prevSlide);
    });
} 