var slideIndex = 1;
show_slides_shopping_cart(slideIndex);

function plus_slides_shopping_cart(n) {
  show_slides_shopping_cart(slideIndex += n);
}

function show_slides_shopping_cart(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide-shopping-cart");

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