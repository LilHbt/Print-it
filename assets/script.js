const slides = [
  {
    image: "slide1.jpg",
    tagLine: `Impressions tous formats <span>en boutique et en ligne</span>`,
  },
  {
    image: "slide2.jpg",
    tagLine: `Tirages haute définition grand format <span>pour vos bureaux et events</span>`,
  },
  {
    image: "slide3.jpg",
    tagLine: `Grand choix de couleurs <span>de CMJN aux pantones</span>`,
  },
  {
    image: "slide4.png",
    tagLine: `Autocollants <span>avec découpe laser sur mesure</span>`,
  },
];

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  let zoneDots = document.querySelector(".dots");
  zoneDots.appendChild(dot);
  dot.classList.add("dot");
}

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let imageCarrousel = document.querySelector(".banner-img");
let texteCarrousel = document.querySelector("#banner p");
let dotSelected = document.querySelectorAll(".dot");
let currentSlide = 0;
dotSelected[currentSlide].classList.add("dot_selected");

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  texteCarrousel.innerHTML = slides[moveTo].tagLine;
  imageCarrousel.src = "./assets/images/slideshow/" + slides[moveTo].image;
  dotSelected[moveTo].classList.add("dot_selected");
  dotSelected[currentSlide].classList.remove("dot_selected");
  currentSlide = moveTo;
}

dotSelected.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    if (currentSlide !== dotIndex) {
      changeSlide(dotIndex);
    }
  });
});

arrowLeft.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

arrowRight.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
