// subscription.js
(function () {
  console.log("Subscription JS loaded");

  const singleCard = document.querySelector(".single-subscription__radio");
  const doubleCard = document.querySelector(".double-subscription__radio");

  const singleBody = singleCard.querySelector(".subscription__body");
  const doubleBody = doubleCard.querySelector(".subscription__body");

  const subTypeRadios = document.querySelectorAll("input[name='subscription-type']");

  const fragranceSingleRadios = document.querySelectorAll("input[name='fragrance-type']");
  const fragrance1Radios = document.querySelectorAll("input[name='fragrance-type1']");
  const fragrance2Radios = document.querySelectorAll("input[name='fragrance-type2']");

  const addToCartBtn = document.querySelector("#addToCart");

  let currentSubscription = "single-subscription";
  let currentFragrance = "original";
  let currentFragrance1 = "original";
  let currentFragrance2 = "original";

  // COLLAPSING OR EXPANDING ONLY BODY
  function updatePanels() {
    if (currentSubscription === "single-subscription") {
      singleBody.classList.add("open");
      doubleBody.classList.remove("open");
    } else {
      singleBody.classList.remove("open");
      doubleBody.classList.add("open");
    }
  }

  function generateCartLink() {
    if (currentSubscription === "single-subscription") {
      console.log(`https://dummy.com/cart?sub=single&fr=${currentFragrance}`);
    } else {
      console.log(`https://dummy.com/cart?sub=double&f1=${currentFragrance1}&f2=${currentFragrance2}`);
    }
  }

  // SUBSCRIPTION TYPE
  subTypeRadios.forEach(r => {
    r.addEventListener("change", e => {
      currentSubscription = e.target.value;
      updatePanels();
      generateCartLink();
    });
  });

  // SINGLE FRAGRANCE
  fragranceSingleRadios.forEach(r => {
    r.addEventListener("change", e => {
      currentFragrance = e.target.value;
      if (currentSubscription === "single-subscription") generateCartLink();
    });
  });

  // DOUBLE FRAGRANCE 1
  fragrance1Radios.forEach(r => {
    r.addEventListener("change", e => {
      currentFragrance1 = e.target.value;
      if (currentSubscription === "double-subscription") generateCartLink();
    });
  });

  // DOUBLE FRAGRANCE 2
  fragrance2Radios.forEach(r => {
    r.addEventListener("change", e => {
      currentFragrance2 = e.target.value;
      if (currentSubscription === "double-subscription") generateCartLink();
    });
  });

  addToCartBtn.addEventListener("click", generateCartLink);

  // INIT
  function initDefaults() {
    updatePanels();    // expands single, collapses double
    generateCartLink();
  }

  initDefaults();
})();
