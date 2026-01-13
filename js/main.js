document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     HERO SLIDER
  =============================== */
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let slideTimer;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i]?.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function startAutoSlide() {
    slideTimer = setInterval(nextSlide, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideTimer);
      showSlide(index);
      startAutoSlide();
    });
  });

  if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
  }

  /* ===============================
     PRODUCT CATEGORY SLIDER
  =============================== */
  const buttons = document.querySelectorAll(".product-item");
  const pages = document.querySelectorAll(".gallery-page");
  let categoryIndex = 0;
  let categoryTimer;

  function showCategoryByIndex(idx) {
    if (idx >= buttons.length) idx = 0;

    const category = buttons[idx].dataset.category;
    let found = false;

    buttons.forEach(b => b.classList.remove("active"));
    buttons[idx].classList.add("active");

    pages.forEach(page => {
      if (page.dataset.category === category) {
        page.style.display = "grid";
        found = true;
      } else {
        page.style.display = "none";
      }
    });

    if (!found) showCategoryByIndex(0);
  }

  function startAutoCategorySlide() {
    clearInterval(categoryTimer);
    categoryTimer = setInterval(() => {
      categoryIndex++;
      showCategoryByIndex(categoryIndex);
    }, 4000);
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      categoryIndex = idx;
      showCategoryByIndex(idx);
      startAutoCategorySlide();
    });
  });

  if (buttons.length > 0) {
    showCategoryByIndex(0);
    startAutoCategorySlide();
  }

  /* ===============================
     OFFICE IMAGE PREVIEW
  =============================== */
  const officeBtns = document.querySelectorAll(".office-btn");
  const previewImg = document.querySelector(".office-preview img");

  officeBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      if (previewImg) {
        previewImg.src = btn.dataset.img;
      }
    });
  });



});
