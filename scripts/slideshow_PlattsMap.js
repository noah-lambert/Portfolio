var slideIndex = 1;
show_slides_plattsmap(slideIndex);

function plus_slides_plattsmap(n) {
  show_slides_plattsmap(slideIndex += n);
}

function show_slides_plattsmap(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide-plattsmap");

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