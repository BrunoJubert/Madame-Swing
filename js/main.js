// Hero carousel
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

const observerOptions = { threshold: 0.2 };

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target); // observe une seule fois
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
balBlocks.forEach(block => observer.observe(block));

// Bouton "Lire la suite"
const showMoreBtn = document.getElementById("show-more");
const moreContent = document.getElementById("more-content");
const chevron = showMoreBtn.querySelector("i");

showMoreBtn.addEventListener("click", () => {
  moreContent.classList.toggle("show");

  if (moreContent.classList.contains("show")) {
    showMoreBtn.firstChild.textContent = "Voir moins ";
    chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    showMoreBtn.firstChild.textContent = "Lire la suite ";
    chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
});

// Dropdown Accueil avec clic et clic hors menu
const dropdowns = document.querySelectorAll('.navbar li.dropdown > a');

dropdowns.forEach(link => {
  const menu = link.nextElementSibling;

  // Toggle menu au clic sur le lien parent
  link.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('show');
  });

  // Ferme le menu quand on clique sur un lien à l'intérieur
  menu.querySelectorAll('a').forEach(subLink => {
    subLink.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });

  // Ferme le menu si clic en dehors
  document.addEventListener('click', (e) => {
    if (!link.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});


// --- Mise à jour automatique de l'année dans le footer ---
const footerYear = document.querySelector("footer p");

if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = `&copy; ${currentYear} Madame Swing. Tous droits réservés.`;
}

// ==== TarteAuCitron Configuration ====
tarteaucitron.init({
    "privacyUrl": "/politique-confidentialite.html", // lien vers ta politique de confidentialité
    "hashtag": "#tarteaucitron", // bouton pour ouvrir le panneau si besoin
    "highPrivacy": true, // consentement strict
    "orientation": "bottom", // bannière en bas
    "showAlertSmall": false, // pas de mini-bouton flottant
    "cookieslist": true, // montre la liste des cookies
    "adblocker": false,
    "showIcon": true,
    "iconPosition": "BottomRight", // position de l'icône de consentement
    "groupServices": false,
    "removeCredit": true, // enlève le lien "TarteAuCitron"
    "acceptAllCta" : true, // bouton "Tout accepter"
    "moreInfoLink": true, // bouton "En savoir plus"
});

// Exemple pour Google Analytics (après consentement)
tarteaucitron.user.analyticsUa = 'UA-XXXXX-Y'; // remplace par ton code
(tarteaucitron.job = tarteaucitron.job || []).push('analytics');

// Exemple pour YouTube (après consentement)
(tarteaucitron.job = tarteaucitron.job || []).push('youtube');

