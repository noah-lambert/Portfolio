var slideIndex = 1;
show_slides_blackjack(slideIndex);

function plus_slides_blackjack(n) {
    show_slides_blackjack(slideIndex += n);
}

function show_slides_blackjack(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide-blackjack");

    if (n > slides.length) {
      slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}