// gallery.js
(function () {
  const gallery = document.querySelector(".product-gallery");
  if (!gallery) return;

  const mainImg = gallery.querySelector(".product-gallery__main-img");
  const thumbEls = Array.from(gallery.querySelectorAll(".grid__imgs"));
  const prevBtn = gallery.querySelector(".controls img[alt='prev btn']");
  const nextBtn = gallery.querySelector(".controls img[alt='next btn']");
  const dotsContainer = gallery.querySelector(".data-gallery-dots");


  const images = [
    mainImg.src,                     
    ...thumbEls.map(img => img.src)  
  ];

  let index = 0;

  function buildDots() {
  dotsContainer.innerHTML = "";

  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "gallery-dot";

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => show(i));
    dotsContainer.appendChild(dot);
  });
}


  function show(i) {
    index = (i + images.length) % images.length;

    // update main image
    mainImg.src = images[index];

    updateActiveThumb();
    updateActiveDot();
  }

  function updateActiveThumb() {
    thumbEls.forEach(t => t.classList.remove("active"));

    // index 0 = main image → do not highlight any thumbnail
    if (index > 0) {
      thumbEls[index - 1].classList.add("active");
    }
  }

  function updateActiveDot() {
  const dots = dotsContainer.querySelectorAll(".gallery-dot");

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}


  thumbEls.forEach((thumb, i) => {
    thumb.addEventListener("click", () => show(i + 1));
  });

  nextBtn.addEventListener("click", () => show(index + 1));
  prevBtn.addEventListener("click", () => show(index - 1));


  buildDots();
  show(0);
})();
