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
 
const hideArrows1 = (slides1 ,prevBtn1, nextBtn1, targetIndex) => {
    if(targetIndex === 0) {
        prevBtn1.classList.add('is-hidden');
        nextBtn1.classList.remove('is-hidden');
    } else if(targetIndex === slides1.length - 1) {
        prevBtn1.classList.remove('is-hidden');
        nextBtn1.classList.add('is-hidden');
    } else {
        prevBtn1.classList.remove('is-hidden');
        nextBtn1.classList.remove('is-hidden');
    }
}

//move images to the right
if(nextBtn1){
    nextBtn1.addEventListener('click', e => {
        const currentSlide1 = carousel1.querySelector('.current-slide');
        const nextSlide1 = currentSlide1.nextElementSibling;
        const targetIndex1 = slides1.findIndex(slide => slide === nextSlide1);
        moveSlide1(carousel1, currentSlide1, nextSlide1);
        hideArrows1(slides1 ,prevBtn1, nextBtn1, targetIndex1);
    });
} 

//move images to the left
if(prevBtn1) {
    prevBtn1.addEventListener('click', e => {
        const currentSlide1 = carousel1.querySelector('.current-slide');
        const prevSlide1 = currentSlide1.previousElementSibling;
        const targetIndex1 = slides1.findIndex(slide => slide === prevSlide1);
        moveSlide1(carousel1, currentSlide1, prevSlide1);
        hideArrows1(slides1 ,prevBtn1, nextBtn1, targetIndex1);
    });
} 