window.onload = function () {
  let carousel = document.querySelector("#about-carousel");
  let slides = carousel.querySelectorAll(".carousel-slide");
  let slideID = 1;

  changeSlide(0);

  let nextButton = document.querySelector("#button-future");
  nextButton.addEventListener("click", function () {
    if (slideID < slides.length - 1) {
      slideID += 1;
    }
    changeSlide(slideID);
  });

  let prevButton = document.querySelector("#button-past");
  prevButton.addEventListener("click", function () {
    if (slideID > 0) {
      slideID -= 1;
    }
    changeSlide(slideID);
  });

  function changeSlide(id) {
    for (let i = 0; i < slides.length; i++) {
      if (i === id) {
        slides[i].style.display = "flex";
      } else {
        slides[i].style.display = "none";
      }
    }
  }
};
