(function () {

  console.log("Metrics JS Loaded");


  const metricsData = [
    {
      percentage: 84,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      percentage: 78,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      percentage: 89,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      percentage: 90,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ];

  const section = document.querySelector(".banner .metrics");

  if (!section) {
    console.error("Missing metrics section in HTML");
    return;
  }

  metricsData.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "metric-item";

    wrapper.innerHTML = `
      <div class="metric-percentage" data-target="${item.percentage}">0%</div>
      <div class="metric-info">${item.info}</div>
    `;

    section.appendChild(wrapper);
  });


  function animateCount(el, target) {
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);

      el.textContent = current + "%";

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        const percentageEls = document.querySelectorAll(".metric-percentage");

        percentageEls.forEach(el => {
          const target = parseInt(el.dataset.target, 10);
          animateCount(el, target);
        });
      }
    });
  }, {
    threshold: 0.3, 
  });

  observer.observe(section);

})();
