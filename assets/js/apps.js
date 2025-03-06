const slide = document.querySelector(".slides");
const singleSlide = [
  {
    title: "billede1",
    img: "./assets/img/developer.webp",
    alt: "developer",
  },
  {
    title: "billede2",
    img: "./assets/img/ai-with-person.avif",
    alt: "ai-with-person",
  },
  {
    title: "billede3",
    img: "./assets/img/ai-with-computer.avif",
    alt: "ai-with-computer",
  },

  {
    title: "billede4",
    img: "./assets/img/programming.avif",
    alt: "programming",
  },
];

let currentSlideIndex = 0;

singleSlide.forEach((element) => {
  slide.innerHTML += `
    <div class="single-slide">
      <img src="${element.img}" alt="${element.alt}" />
    </div>
  `;
});

function moveSlide() {
  currentSlideIndex++;

  if (currentSlideIndex >= singleSlide.length) {
    currentSlideIndex = 0;
  }

  slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

setInterval(moveSlide, 5000);
