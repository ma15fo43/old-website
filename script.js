var slideIndex = 1; // Default slide's number
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } // If n (active slide) is superior than the slides length, reset the slideIndex var to 1
    if (n < 1) { slideIndex = slides.length } // If n is inferior than the slides length, set the SlideIndex var to the slides length
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Set (by default) the slides style to non visible
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // When the dot is active
    }
    slides[slideIndex - 1].style.display = "block"; // For the actual slide/dot
    dots[slideIndex - 1].className += " active";
}