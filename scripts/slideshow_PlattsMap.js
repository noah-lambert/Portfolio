const carousel = document.querySelector('#carousel-plattsmap');
const slides = Array.from(carousel.children);
const nextBtn = document.querySelector('#next-plattsmap');
const prevBtn = document.querySelector('#prev-plattsmap');


const slideWidth = slides[0].getBoundingClientRect().width;

//set the images next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//move images to the right
if(nextBtn){
    nextBtn.addEventListener('click', e => {
        const currentSlide = carousel.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const distToMove = nextSlide.style.left;
    
        //move to the next image 
        carousel.style.transform = 'translateX(-' + distToMove + ')';
    });
}
