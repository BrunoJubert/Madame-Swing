const galleryGrid = document.getElementById("gallery-grid");
const totalPhotos = 45; // nombre total de photos
let currentIndex = 0;

// --- Création des photos ---
for (let i = 1; i <= totalPhotos; i++) {
  const imgNumber = i.toString().padStart(2, "0");
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = `/img/galerie/photo${imgNumber}.avif`;
  img.alt = `Photo ${i}`;

  img.addEventListener("click", () => openLightbox(i - 1));

  div.appendChild(img);
  galleryGrid.appendChild(div);
}

// --- Lightbox ---
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.innerHTML = `
  <button class="lightbox-close">&times;</button>
  <button class="lightbox-arrow lightbox-arrow-left">&#10094;</button>
  <img class="lightbox-img" src="" alt="">
  <button class="lightbox-arrow lightbox-arrow-right">&#10095;</button>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const arrowLeft = lightbox.querySelector(".lightbox-arrow-left");
const arrowRight = lightbox.querySelector(".lightbox-arrow-right");

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = `/img/galerie/photo${(index + 1)
    .toString()
    .padStart(2, "0")}.avif`;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
  lightboxImg.src = `/img/galerie/photo${(currentIndex + 1)
    .toString()
    .padStart(2, "0")}.avif`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalPhotos;
  lightboxImg.src = `/img/galerie/photo${(currentIndex + 1)
    .toString()
    .padStart(2, "0")}.avif`;
}

// Fermer au clic
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Flèches
arrowLeft.addEventListener("click", showPrev);
arrowRight.addEventListener("click", showNext);
