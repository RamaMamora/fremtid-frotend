document.addEventListener("DOMContentLoaded", () => {
  const slideContainer = document.querySelector(".slides");
  const slidesData = [
    { title: "billede1", img: "./assets/img/developer.webp", alt: "developer" },
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

  // Generer HTML for billederne
  slidesData.forEach((slide, index) => {
    slideContainer.innerHTML += `
          <div class="single-slide">
              <img src="${slide.img}" alt="${slide.alt}" class="${
      index === 0 ? "active" : ""
    }" />
          </div>
      `;
  });

  const slides = docum