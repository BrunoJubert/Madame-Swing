const slides = document.querySelectorAll(".hero-carousel .slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Auto slide toutes les 5 secondes
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);


// Animation Bal Mobile au scroll
const balBlocks = document.querySelectorAll('.bal-block');

const observerOptions = {
  threshold: 0.2 // déclenche l'animation quand 20% du bloc est visible
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target); // on n'observe qu'une fois
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
balBlocks.forEach(block => observer.observe(block));


const showMoreBtn = document.getElementById("show-more");
const moreContent = document.getElementById("more-content");
const chevron = showMoreBtn.querySelector("i");

showMoreBtn.addEventListener("click", () => {
  moreContent.classList.toggle("show");

  if (moreContent.classList.contains("show")) {
    showMoreBtn.firstChild.textContent = "Voir moins "; // texte seulement
    chevron.classList.remove("fa-chevron-down");
    chevron.classList.add("fa-chevron-up");
  } else {
    showMoreBtn.firstChild.textContent = "Lire la suite ";
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");
  }
});

