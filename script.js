const GOOGLE_FORM_URL = "https://forms.gle/YRux1aAa2SjVNpq47";
const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfcekjBsArkRfEiZrwBeXv1v7Gg5kuwwtgHnTbd9n-oqqgunA/viewform?embedded=true";
const THEME_STORAGE_KEY = "ab-theme";

const featuredSlides = [
  {
    src: "assets/images/web/gallery-01.webp",
    alt: "Soft portrait with warm directional light and editorial framing",
    category: "Portrait",
    mood: "Soft",
    caption: "Quiet confidence with warm highlights and a close editorial crop."
  },
  {
    src: "assets/images/web/gallery-02.webp",
    alt: "Couple walking outdoors in golden hour with candid movement",
    category: "Couples",
    mood: "Romantic",
    caption: "Movement over perfection. Mood over stiffness."
  },
  {
    src: "assets/images/web/gallery-03.webp",
    alt: "Creative studio portrait using dramatic shadow lines",
    category: "Creative",
    mood: "Bold",
    caption: "Bold edges, deeper shadows, and just enough attitude."
  },
  {
    src: "assets/images/web/gallery-04.webp",
    alt: "Lifestyle portrait inside a textured interior space",
    category: "Lifestyle",
    mood: "Candid",
    caption: "Natural expressions in spaces that already feel like home."
  }
];

const galleryItems = [
  {
    src: "assets/images/web/gallery-soft-01.webp",
    alt: "Soft portrait close-up with neutral wardrobe",
    category: "Portrait",
    mood: "Soft",
    caption: "Soft light, soft focus, strong eyes.",
    span: 36
  },
  {
    src: "assets/images/web/gallery-bold-01.webp",
    alt: "Bold fashion-inspired portrait with directional pose",
    category: "Creative",
    mood: "Bold",
    caption: "A little drama in all the right places.",
    span: 48
  },
  {
    src: "assets/images/web/gallery-romantic-01.webp",
    alt: "Romantic couple portrait during sunset",
    category: "Couples",
    mood: "Romantic",
    caption: "Tender, cinematic, and unforced.",
    span: 34
  },
  {
    src: "assets/images/web/gallery-editorial-01.webp",
    alt: "Editorial portrait with hard light and serious expression",
    category: "Creative",
    mood: "Editorial",
    caption: "Editorial energy with clean composition.",
    span: 40
  },
  {
    src: "assets/images/web/gallery-candid-01.webp",
    alt: "Candid laugh during outdoor lifestyle session",
    category: "Lifestyle",
    mood: "Candid",
    caption: "Unplanned expression, perfectly timed.",
    span: 32
  },
  {
    src: "assets/images/web/gallery-moody-01.webp",
    alt: "Moody portrait in low-light with textured background",
    category: "Portrait",
    mood: "Moody",
    caption: "Low light and layered mood.",
    span: 50
  },
  {
    src: "assets/images/web/gallery-soft-02.webp",
    alt: "Soft bridal-style portrait with warm tones",
    category: "Portrait",
    mood: "Soft",
    caption: "Warm tones and calm posture.",
    span: 38
  },
  {
    src: "assets/images/web/gallery-bold-02.webp",
    alt: "Bold portrait with striking posture and dark styling",
    category: "Creative",
    mood: "Bold",
    caption: "Strong shape, clean contrast.",
    span: 42
  },
  {
    src: "assets/images/web/gallery-romantic-02.webp",
    alt: "Romantic couple embrace near ocean",
    category: "Couples",
    mood: "Romantic",
    caption: "Connected and close without over-posing.",
    span: 35
  },
  {
    src: "assets/images/web/gallery-editorial-02.webp",
    alt: "Editorial black-and-white look with styled wardrobe",
    category: "Branding",
    mood: "Editorial",
    caption: "High-polish but still human.",
    span: 47
  },
  {
    src: "assets/images/web/gallery-candid-02.webp",
    alt: "Candid portrait with motion blur effect",
    category: "Events",
    mood: "Candid",
    caption: "Movement kept in, not edited out.",
    span: 33
  },
  {
    src: "assets/images/web/gallery-moody-02.webp",
    alt: "Moody indoor portrait with side lighting",
    category: "Portrait",
    mood: "Moody",
    caption: "Shadow detail with subtle grit.",
    span: 44
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
  wireEmbeddedForm();
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
  const bookingTarget = document.getElementById("contact");

  if (usesPlaceholder) {
    console.warn(
      "Booking form URL is still a placeholder. Replace GOOGLE_FORM_URL in script.js before launch."
    );
  }

  bookingElements.forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
      element.href = "#contact";
      element.removeAttribute("target");
      element.removeAttribute("rel");
      element.addEventListener("click", (event) => {
        if (!bookingTarget) {
          return;
        }

        event.preventDefault();
        bookingTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    element.addEventListener("click", () => {
      bookingTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function wireEmbeddedForm() {
  const frame = document.getElementById("booking-form-frame");
  const externalLinks = document.querySelectorAll("[data-external-booking-link]");

  if (frame instanceof HTMLIFrameElement) {
    frame.src = GOOGLE_FORM_EMBED_URL;
  }

  externalLinks.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    link.href = GOOGLE_FORM_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
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

  prevBtn.addEventListener("click", previous);
  nextBtn.addEventListener("click", next);

  addSwipeSupport(stage, previous, next);
  render();

  return { next, previous };
}

function initMoodGallery() {
  const grid = document.getElementById("gallery-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-nav.prev");
  const nextBtn = document.querySelector(".lightbox-nav.next");

  if (!grid || !lightbox || !lightboxImage || !closeBtn || !prevBtn || !nextBtn) {
    return {
      closeLightbox: () => {},
      previousLightbox: () => {},
      nextLightbox: () => {}
    };
  }

  let activeFilter = "All";
  let filteredItems = [...galleryItems];
  let lightboxIndex = 0;

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
      return;
    }

    filteredItems.forEach((item, itemIndex) => {
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

    markMissingImagesOnError(grid);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "All";
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderGrid();
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
