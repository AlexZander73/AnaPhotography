const GOOGLE_FORM_URL = "https://forms.gle/YRux1aAa2SjVNpq47";
const THEME_STORAGE_KEY = "ab-theme";

const featuredSlides = [
  {
    "src": "assets/images/web/library-titelbild-2000-19to9.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Soft"
  },
  {
    "src": "assets/images/web/library-catlina-aw-ig-12.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Editorial"
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-188.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Soft"
  },
  {
    "src": "assets/images/web/library-mittwochulu0144.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial"
  },
  {
    "src": "assets/images/web/library-6c7a8484.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Bold"
  },
  {
    "src": "assets/images/web/library-2look-natur-orig-10.webp",
    "alt": "Lifestyle photography image from Behmen Studio portfolio",
    "category": "Lifestyle",
    "mood": "Soft"
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-37.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody"
  },
  {
    "src": "assets/images/web/library-073a4234-2-2k-2.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial"
  },
  {
    "src": "assets/images/web/library-6c7a8452.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Moody"
  },
  {
    "src": "assets/images/web/library-a7401618.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Moody"
  },
  {
    "src": "assets/images/web/library-dsc-6470.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid"
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-69.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid"
  }
];

const galleryItems = [
  {
    "src": "assets/images/web/library-titelbild-2000-19to9.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Soft",
    "span": 28
  },
  {
    "src": "assets/images/web/library-1691479-14-web-1900xv2.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Soft",
    "span": 45
  },
  {
    "src": "assets/images/web/library-rumyana-ig-1-2.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Editorial",
    "span": 45
  },
  {
    "src": "assets/images/web/library-catlina-aw-ig-12.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Editorial",
    "span": 28
  },
  {
    "src": "assets/images/web/library-hochzeit-im-studio-88.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-188.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Soft",
    "span": 28
  },
  {
    "src": "assets/images/web/library-mittwochulu0144.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial",
    "span": 28
  },
  {
    "src": "assets/images/web/library-6c7a8484.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Bold",
    "span": 28
  },
  {
    "src": "assets/images/web/library-dsc-2743.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-30.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 45
  },
  {
    "src": "assets/images/web/library-2look-natur-orig-18.webp",
    "alt": "Lifestyle photography image from Behmen Studio portfolio",
    "category": "Lifestyle",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-a7401944.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Soft",
    "span": 45
  },
  {
    "src": "assets/images/web/library-073a4501-2-3-2-3-2.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Moody",
    "span": 40
  },
  {
    "src": "assets/images/web/library-catlina-aw-ig-13.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Bold",
    "span": 40
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-17.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Romantic",
    "span": 45
  },
  {
    "src": "assets/images/web/library-a7401958.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Moody",
    "span": 45
  },
  {
    "src": "assets/images/web/library-a7405460b.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-6c7a8437.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-2334.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-rumyana-ig-1-3.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-2803.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Soft",
    "span": 45
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-35.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-56.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 45
  },
  {
    "src": "assets/images/web/library-2look-natur-orig-10.webp",
    "alt": "Lifestyle photography image from Behmen Studio portfolio",
    "category": "Lifestyle",
    "mood": "Soft",
    "span": 28
  },
  {
    "src": "assets/images/web/library-a7401618.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-catlina-aw-ig-2.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Soft",
    "span": 40
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-60.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Romantic",
    "span": 45
  },
  {
    "src": "assets/images/web/library-073a4234-2-2k-2.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-26.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 28
  },
  {
    "src": "assets/images/web/library-a7401711.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Bold",
    "span": 28
  },
  {
    "src": "assets/images/web/library-catlina-aw-ig-6.webp",
    "alt": "Brand portrait photograph from Behmen Studio portfolio",
    "category": "Branding",
    "mood": "Editorial",
    "span": 40
  },
  {
    "src": "assets/images/web/library-22-06-19-lara-alper-und-katja-79.webp",
    "alt": "Couples session photograph from Behmen Studio portfolio",
    "category": "Couples",
    "mood": "Soft",
    "span": 28
  },
  {
    "src": "assets/images/web/library-073a4442-2-3-4.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Bold",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-27.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-a7401873.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Editorial",
    "span": 45
  },
  {
    "src": "assets/images/web/library-073a4568-2-4-kopie.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-28.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-2343.webp",
    "alt": "Portrait photography image from Behmen Studio portfolio",
    "category": "Portrait",
    "mood": "Editorial",
    "span": 45
  },
  {
    "src": "assets/images/web/library-6c7a8452.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-29.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-6c7a8467.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Editorial",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-31.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-mittwochulu0129.webp",
    "alt": "Creative editorial portrait from Behmen Studio portfolio",
    "category": "Creative",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-32.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-37.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-45.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-55.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-57.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-58.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-59.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-6.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-60.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-61.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-64.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 40
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-69.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 28
  },
  {
    "src": "assets/images/web/library-26portfolio-ev-beispiele-70.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-a7405463b.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-6376.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-6420.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 45
  },
  {
    "src": "assets/images/web/library-dsc-6470.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Candid",
    "span": 28
  },
  {
    "src": "assets/images/web/library-dsc-6527.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Moody",
    "span": 28
  },
  {
    "src": "assets/images/web/library-dsc-6755.webp",
    "alt": "Event photography image from Behmen Studio portfolio",
    "category": "Events",
    "mood": "Bold",
    "span": 28
  }
];

const testimonials = [
  {
    quote: "Replace this with a real client quote once available.",
    label: "Placeholder testimonial"
  },
  {
    quote: "Add a short review here about feeling comfortable during the shoot.",
    label: "Placeholder testimonial"
  },
  {
    quote: "Add a short review here about loving the final gallery.",
    label: "Placeholder testimonial"
  }
];

const faqs = [
  {
    q: "How do I book?",
    a: "Use the booking request button and share a few details about the session you have in mind. I’ll follow up with availability and next steps."
  },
  {
    q: "Do you help with posing?",
    a: "Yes. You do not need to know what to do with your hands. That is part of the job."
  },
  {
    q: "Where do sessions happen?",
    a: "This can be updated later. For now, sessions can be planned for studio, outdoor, location-based, or event settings."
  },
  {
    q: "What should I wear?",
    a: "Wear something that feels like you, but a little more intentional. Styling guidance can be added once final service details are confirmed."
  },
  {
    q: "When will I receive my photos?",
    a: "Delivery timeframe can be confirmed by the photographer. Replace this with your actual turnaround window."
  },
  {
    q: "Can I request a specific mood or style?",
    a: "Absolutely. Bring references, words, colours, songs, messy Pinterest boards — whatever helps explain the feeling."
  },
  {
    q: "Are prices listed?",
    a: "Pricing can be added once confirmed. For now, enquiries are handled through the booking form."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  setYear();
  initThemeSelector();
  wireBookingLinks();
  initNavigation();
  initScrollReveal();
  markMissingImagesOnError(document);

  const carouselApi = initFeaturedCarousel();
  const galleryApi = initMoodGallery();

  initTestimonials();
  initFaqs();

  document.addEventListener("keydown", (event) => {
    const lightboxOpen = document.getElementById("lightbox")?.classList.contains("is-open");

    if (event.key === "Escape" && lightboxOpen) {
      galleryApi.closeLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      if (lightboxOpen) {
        galleryApi.previousLightbox();
      } else {
        carouselApi.previous();
      }
    }

    if (event.key === "ArrowRight") {
      if (lightboxOpen) {
        galleryApi.nextLightbox();
      } else {
        carouselApi.next();
      }
    }
  });
});

function setYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function applySavedTheme() {
  const savedTheme = getSavedTheme();
  document.documentElement.dataset.theme = savedTheme;
}

function getSavedTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "requested" || savedTheme === "warm") {
      return savedTheme;
    }
  } catch (error) {
    return "warm";
  }

  return "warm";
}

function initThemeSelector() {
  const buttons = document.querySelectorAll("[data-theme-choice]");
  if (!buttons.length) {
    return;
  }

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage failures and keep the theme in-memory for this session.
    }

    buttons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) {
        return;
      }

      const isActive = button.dataset.themeChoice === theme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  setTheme(getSavedTheme());

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.themeChoice;
      if (theme === "requested" || theme === "warm") {
        setTheme(theme);
      }
    });
  });
}

function wireBookingLinks() {
  const bookingElements = document.querySelectorAll("[data-booking-link], .booking-link");
  const usesPlaceholder = GOOGLE_FORM_URL.includes("REPLACE_WITH_REAL_FORM_LINK");

  if (usesPlaceholder) {
    console.warn(
      "Booking form URL is still a placeholder. Replace GOOGLE_FORM_URL in script.js before launch."
    );
  }

  bookingElements.forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
      element.href = GOOGLE_FORM_URL;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      return;
    }

    element.addEventListener("click", () => {
      window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    });
  });
}

function initNavigation() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  const mobileQuery = window.matchMedia("(max-width: 920px)");

  if (!header || !menuToggle || !nav) {
    return;
  }

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const syncNavStateForViewport = () => {
    if (!mobileQuery.matches) {
      nav.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      nav.setAttribute("aria-hidden", "false");
      return;
    }

    nav.setAttribute("aria-hidden", nav.classList.contains("is-open") ? "false" : "true");
  };

  syncNavStateForViewport();
  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncNavStateForViewport);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(syncNavStateForViewport);
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    nav.setAttribute("aria-hidden", String(!isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 920px)").matches) {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-hidden", "true");
      }
    });
  });
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initFeaturedCarousel() {
  const image = document.getElementById("featured-image");
  const dots = document.getElementById("carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const stage = document.getElementById("featured-stage");

  if (!image || !dots || !prevBtn || !nextBtn || !stage) {
    return {
      next: () => {},
      previous: () => {}
    };
  }

  let index = 0;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let autoAdvanceId = null;

  const dotButtons = featuredSlides.map((slide, slideIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.role = "tab";
    dot.setAttribute("aria-label", `Go to featured slide ${slideIndex + 1}`);
    dot.setAttribute("aria-selected", "false");
    dot.addEventListener("click", () => {
      index = slideIndex;
      render();
      restartAutoAdvance();
    });
    dots.appendChild(dot);
    return dot;
  });

  const render = () => {
    const slide = featuredSlides[index];

    image.src = slide.src;
    image.alt = slide.alt;

    stage.classList.remove("image-missing");
    image.onerror = () => {
      stage.classList.add("image-missing");
    };

    dotButtons.forEach((dot, dotIndex) => {
      const selected = dotIndex === index;
      dot.setAttribute("aria-selected", String(selected));
      if (selected) {
        dot.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    });
  };

  const next = () => {
    index = (index + 1) % featuredSlides.length;
    render();
  };

  const previous = () => {
    index = (index - 1 + featuredSlides.length) % featuredSlides.length;
    render();
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceId) {
      window.clearInterval(autoAdvanceId);
      autoAdvanceId = null;
    }
  };

  const startAutoAdvance = () => {
    stopAutoAdvance();
    if (reducedMotion || featuredSlides.length < 2) {
      return;
    }
    autoAdvanceId = window.setInterval(next, 4600);
  };

  const restartAutoAdvance = () => {
    startAutoAdvance();
  };

  prevBtn.addEventListener("click", () => {
    previous();
    restartAutoAdvance();
  });
  nextBtn.addEventListener("click", () => {
    next();
    restartAutoAdvance();
  });

  addSwipeSupport(stage, previous, next);
  stage.addEventListener("mouseenter", stopAutoAdvance);
  stage.addEventListener("mouseleave", startAutoAdvance);
  stage.addEventListener("focusin", stopAutoAdvance);
  stage.addEventListener("focusout", startAutoAdvance);
  dots.addEventListener("mouseenter", stopAutoAdvance);
  dots.addEventListener("mouseleave", startAutoAdvance);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoAdvance();
      return;
    }
    startAutoAdvance();
  });
  render();
  startAutoAdvance();

  return { next, previous };
}

function initMoodGallery() {
  const grid = document.getElementById("gallery-grid");
  const loadMoreBtn = document.getElementById("gallery-load-more");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-nav.prev");
  const nextBtn = document.querySelector(".lightbox-nav.next");

  if (!grid || !loadMoreBtn || !lightbox || !lightboxImage || !closeBtn || !prevBtn || !nextBtn) {
    return {
      closeLightbox: () => {},
      previousLightbox: () => {},
      nextLightbox: () => {}
    };
  }

  let activeFilter = "All";
  let filteredItems = [...galleryItems];
  let lightboxIndex = 0;
  let visibleCount = 0;

  const getBatchSize = () => (window.matchMedia("(max-width: 759px)").matches ? 8 : 12);
  const resetVisibleCount = () => {
    visibleCount = getBatchSize();
  };

  const renderLightbox = () => {
    const item = filteredItems[lightboxIndex];
    if (!item) {
      return;
    }

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;

    const frame = lightboxImage.closest(".lightbox-frame");
    if (frame) {
      frame.classList.remove("image-missing");
    }

    lightboxImage.onerror = () => {
      frame?.classList.add("image-missing");
    };
  };

  const openLightbox = (index) => {
    lightboxIndex = index;
    renderLightbox();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const nextLightbox = () => {
    if (!filteredItems.length) {
      return;
    }
    lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
    renderLightbox();
  };

  const previousLightbox = () => {
    if (!filteredItems.length) {
      return;
    }
    lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    renderLightbox();
  };

  const renderGrid = () => {
    filteredItems =
      activeFilter === "All"
        ? [...galleryItems]
        : galleryItems.filter((item) => item.mood === activeFilter);

    grid.innerHTML = "";

    if (!filteredItems.length) {
      const empty = document.createElement("p");
      empty.textContent = "No images in this mood yet. Add more gallery items in script.js.";
      grid.appendChild(empty);
      loadMoreBtn.hidden = true;
      return;
    }

    const visibleItems = filteredItems.slice(0, visibleCount);

    visibleItems.forEach((item, itemIndex) => {
      const card = document.createElement("button");
      card.className = "gallery-item";
      card.type = "button";
      card.style.setProperty("--span", String(item.span ?? 36));
      card.setAttribute("aria-label", `Open image: ${item.alt}`);

      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt;
      image.loading = "lazy";
      image.decoding = "async";

      image.addEventListener(
        "error",
        () => {
          card.classList.add("image-missing");
        },
        { once: true }
      );

      card.append(image);

      card.addEventListener("click", () => openLightbox(itemIndex));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(itemIndex);
        }
      });

      grid.appendChild(card);
    });

    loadMoreBtn.hidden = visibleCount >= filteredItems.length;
    markMissingImagesOnError(grid);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "All";
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      resetVisibleCount();
      renderGrid();
    });
  });

  loadMoreBtn.addEventListener("click", () => {
    const anchorIndex = Math.max(0, visibleCount - 1);
    const anchorCardBefore = grid.children.item(anchorIndex);
    const anchorTopBefore =
      anchorCardBefore instanceof HTMLElement
        ? anchorCardBefore.getBoundingClientRect().top
        : loadMoreBtn.getBoundingClientRect().top;

    visibleCount += getBatchSize();
    renderGrid();

    window.requestAnimationFrame(() => {
      const anchorCardAfter = grid.children.item(Math.min(anchorIndex, grid.children.length - 1));
      const anchorTopAfter =
        anchorCardAfter instanceof HTMLElement
          ? anchorCardAfter.getBoundingClientRect().top
          : loadMoreBtn.getBoundingClientRect().top;

      window.scrollBy({
        top: anchorTopAfter - anchorTopBefore,
        left: 0,
        behavior: "auto"
      });
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", previousLightbox);
  nextBtn.addEventListener("click", nextLightbox);
  addSwipeSupport(lightbox, previousLightbox, nextLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  resetVisibleCount();
  renderGrid();

  return {
    closeLightbox,
    previousLightbox,
    nextLightbox
  };
}

function initTestimonials() {
  const row = document.getElementById("testimonial-row");
  if (!row) {
    return;
  }

  testimonials.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";

    const quote = document.createElement("p");
    quote.textContent = `“${item.quote}”`;

    const tag = document.createElement("p");
    tag.className = "tag";
    tag.textContent = item.label;

    card.append(quote, tag);
    row.appendChild(card);
  });
}

function initFaqs() {
  const list = document.getElementById("faq-list");
  if (!list) {
    return;
  }

  faqs.forEach((item, index) => {
    const wrapper = document.createElement("article");
    wrapper.className = "faq-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-question";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-answer-${index}`);
    button.innerHTML = `<span>${item.q}</span><span class="icon" aria-hidden="true">+</span>`;

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = `faq-answer-${index}`;
    answer.innerHTML = `<p>${item.a}</p>`;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.querySelector(".icon").textContent = expanded ? "+" : "−";
      answer.style.maxHeight = expanded ? "0px" : `${answer.scrollHeight}px`;
    });

    wrapper.append(button, answer);
    list.appendChild(wrapper);
  });
}

function addSwipeSupport(element, onSwipeRight, onSwipeLeft) {
  if (!element) {
    return;
  }

  let touchStartX = 0;
  let touchEndX = 0;

  element.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  element.addEventListener(
    "touchend",
    (event) => {
      touchEndX = event.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;

      if (Math.abs(delta) < 36) {
        return;
      }

      if (delta > 0) {
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    },
    { passive: true }
  );
}

function markMissingImagesOnError(root) {
  const images = root.querySelectorAll("img");
  images.forEach((image) => {
    const markMissing = () => {
      const parent = image.closest(".frame-image, .hero-card, .gallery-item, .featured-stage");
      if (parent) {
        parent.classList.add("image-missing");
      }
    };

    image.addEventListener("error", markMissing, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      markMissing();
    }
  });
}
