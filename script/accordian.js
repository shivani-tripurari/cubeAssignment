// accordion.js
(function () {

  console.log("Accordion JS Loaded");


    const accordionData = [
    {
        title: "Signature Scents",
        content: "Discover our curated line of signature perfumes, designed to become your daily companion."
    },
    {
        title: "Signature Scents",
        content: "Discover our curated line of signature perfumes, designed to become your daily companion."
    },
    {
        title: "Signature Scents",
        content: "Discover our curated line of signature perfumes, designed to become your daily companion."
    },
    {
        title: "Signature Scents",
        content: "Discover our curated line of signature perfumes, designed to become your daily companion."
    }
    ];


  
  const container = document.getElementById("accordion-list");

  
  accordionData.forEach(item => {

    const wrapper = document.createElement("div");
    wrapper.className = "accordion-item";

    wrapper.innerHTML = `
      <div class="accordion-header">
        <h3>${item.title}</h3>
        <div class="accordion-toggle">+</div>
      </div>

      <div class="accordion-body">
        <p>${item.content}</p>
      </div>
    `;

    container.appendChild(wrapper);
  });

  
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach(item => {
    const toggleBtn = item.querySelector(".accordion-toggle");
    const body = item.querySelector(".accordion-body");

    toggleBtn.addEventListener("click", () => {

      const isOpen = body.classList.contains("open");

      // Collapse
      if (isOpen) {
        body.classList.remove("open");
        toggleBtn.textContent = "+";
      }
      // Expand
      else {
        body.classList.add("open");
        toggleBtn.textContent = "–";
      }
    });
  });

})();
