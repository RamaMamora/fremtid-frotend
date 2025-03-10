document.addEventListener("DOMContentLoaded", () => {
  const slideContainer = document.querySelector(".slides");
  const slidesData = [
    { title: "billede1", img: "./assets/img/developer.webp", alt: "developer" },
    {
      title: "billede2",
      img: "./assets/img/ai-with-person.webp",
      alt: "ai-with-person",
    },
    {
      title: "billede3",
      img: "./assets/img/ai-with-computer.webp",
      alt: "ai-with-computer",
    },
    {
      title: "billede4",
      img: "./assets/img/programming.webp",
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

  const slides = document.querySelectorAll(".single-slide img");

  function moveSlide() {
    // Fjern aktiv klasse fra nuværende billede
    slides[currentSlideIndex].classList.remove("active");

    // Skift til næste slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Tilføj aktiv klasse til det nye slide
    slides[currentSlideIndex].classList.add("active");

    // Flyt slider
    slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  // Skift billede hver 5. sekund
  setInterval(moveSlide, 5000);
});

// img slider
document.addEventListener("DOMContentLoaded", () => {
  function startImageSlider(sectionClass, imagePaths, interval) {
    const images = document.querySelectorAll(`.${sectionClass}`);
    let indexes = Array(images.length).fill(0); // Start med første billede

    function changeImage() {
      images.forEach((img, i) => {
        img.style.opacity = "0"; // Fade out
        setTimeout(() => {
          indexes[i] = (indexes[i] + 1) % imagePaths[i].length;
          img.src = imagePaths[i][indexes[i]]; // Skift billede
          img.style.opacity = "1"; // Fade in
        }, 1000);
      });
    }

    setInterval(changeImage, interval);
  }

  // Billed-lister for sektion 2
  startImageSlider(
    "section2",
    [
      [
        "/assets/img/kode.webp",
        "/assets/img/ai-work-on-chair.webp",
        "/assets/img/person-work.webp",
      ],
      [
        "/assets/img/person-work.webp",
        "/assets/img/kode.webp",
        "/assets/img/ai-work-on-chair.webp",
      ],
      [
        "/assets/img/ai-work-on-chair.webp",
        "/assets/img/person-work.webp",
        "/assets/img/kode.webp",
      ],
    ],
    5000
  );

  // Billed-lister for sektion 3
  startImageSlider(
    "section4",
    [
      [
        "/assets/img/brain-ai.png",
        "/assets/img/ai-work.png",
        "/assets/img/chatgpt.png",
      ],
      [
        "/assets/img/ai-work.png",
        "/assets/img/chatgpt.png",
        "/assets/img/brain-ai.png",
      ],
      [
        "/assets/img/chatgpt.png",
        "/assets/img/brain-ai.png",
        "/assets/img/ai-work.png",
      ],
    ],
    5000
  );
});
// footer

// Funktion til at scrolle til toppen
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Vis pilen kun når brugeren scroller ned
window.addEventListener("scroll", function () {
  const scrollUpBtn = document.querySelector(".scroll-top");
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});
