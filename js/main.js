// ===================== Hero Carousel =====================
const slides = document.querySelectorAll(".hero-carousel .slide");
if (slides.length) {
  let current = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}

// ===================== Bal Mobile Animation =====================
const balBlocks = document.querySelectorAll(".bal-block");
if (balBlocks.length) {
  const observerOptions = { threshold: 0.2 };
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  balBlocks.forEach((block) => observer.observe(block));
}

// ===================== Bouton "Lire la suite" =====================
const showMoreBtn = document.getElementById("show-more");
const moreContent = document.getElementById("more-content");
if (showMoreBtn && moreContent) {
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
}

// ===================== Dropdown Navbar =====================
const dropdowns = document.querySelectorAll(".navbar li.dropdown > a");
if (dropdowns.length) {
  dropdowns.forEach((link) => {
    const menu = link.nextElementSibling;

    link.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.toggle("show");
    });

    menu.querySelectorAll("a").forEach((subLink) => {
      subLink.addEventListener("click", () => menu.classList.remove("show"));
    });

    document.addEventListener("click", (e) => {
      if (!link.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });
}

// ===================== Footer Year =====================
const footerYear = document.querySelector("footer p span#year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// ===================== TarteAuCitron =====================
if (typeof tarteaucitron !== "undefined") {
  tarteaucitron.init({
    privacyUrl: "/politique-confidentialite.html",
    hashtag: "#tarteaucitron",
    highPrivacy: true,
    orientation: "bottom",
    showAlertSmall: false,
    cookieslist: true,
    adblocker: false,
    showIcon: true,
    iconPosition: "BottomRight",
    groupServices: false,
    removeCredit: true,
    acceptAllCta: true,
    moreInfoLink: true,
  });

  // Google Analytics (après consentement)
  tarteaucitron.user.analyticsUa = "UA-XXXXX-Y"; // remplace par ton code
  (tarteaucitron.job = tarteaucitron.job || []).push("analytics");

  // YouTube (après consentement)
  (tarteaucitron.job = tarteaucitron.job || []).push("youtube");
}
