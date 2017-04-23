let slideIndex = 1;
showDiv(slideIndex);

function currentDiv(n) {
  showDiv(slideIndex = n);
}

function showDiv(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const numOfSlides = slides.length;
  const options = document.getElementsByClassName("chooseImage");
  const numOfOptions = options.length;

  if (n > numOfSlides) {
    slideIndex = 1;
  } if (n < 1) {
    slideIndex = numOfSlides;
  }

  for (i = 0; i < numOfSlides; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < numOfOptions; i++) {
    options[i].className = options[i].className.replace(" currentImage", "");
  }

  // slides[slideIndex-1].style.display = "-webkit-flex";
  // slides[slideIndex-1].style.display = "-ms-flex";
  // slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.display = "block";
  options[slideIndex-1].className += " currentImage";
}
