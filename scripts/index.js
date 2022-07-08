try {
  let workPermitsSlider = new Swiper("#work-permits-slider", {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: ".permits-button-next",
      prevEl: ".permits-button-prev",
    },
  });
} catch (e) {}

try {
  let reviewSlider = new Swiper("#review-slider", {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: ".review-button-next",
      prevEl: ".review-button-prev",
    },
  });
} catch (e) {}

try {
  let itbComplexSlider = new Swiper("#itb-complex-slider", {
    slidesPerView: 3,
    spaceBetween: 21,
    navigation: {
      nextEl: ".itb-complex-button-next",
      prevEl: ".itb-complex-button-prev",
    },
  });
} catch (e) {}

try {
  let itbComplexSlider = new Swiper("#services-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".services-button-next",
      prevEl: ".services-button-prev",
    },
  });
} catch (e) {}

try {
  let reviewSlider = new Swiper("#popular-news-slider", {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: ".popular-news-button-next",
      prevEl: ".popular-news-button-prev",
    },
  });
} catch (e) {}

try {
  var shopItemSliderSub = new Swiper(".shop-item-slider-sub", {
    spaceBetween: 17,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var shopItemSliderMain = new Swiper(".shop-item-slider-main", {
    spaceBetween: 17,
    thumbs: {
      swiper: shopItemSliderSub,
    },
  });
} catch (e) {
  console.error(e);
}

try {
  const accordions = Array.from(document.querySelectorAll('.accordion-container'));
  new Accordion(accordions, {
    showMultiple: true,
  });
} catch (e) {
  console.error(e);
}

MicroModal.init({
  onShow: (modal) => console.info(`${modal.id} is shown`), 
  onClose: (modal) => console.info(`${modal.id} is hidden`),
  openTrigger: "data-custom-open", 
  closeTrigger: "data-custom-close", 
  openClass: "is-open",
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true,
});

try {
  let calculationsBtns = document.querySelectorAll(
    ".js-open-calculation-modal"
  );
  calculationsBtns.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      MicroModal.show("calculation-modal");
    });
  });
} catch (e) {}

try {
  function Tabs() {
    let bindAll = function () {
      let menuElements = document.querySelectorAll("[data-tab]");
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener("click", change, false);
      }
    };

    let clear = function () {
      let menuElements = document.querySelectorAll("[data-tab]");
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove("active");
        let id = menuElements[i].getAttribute("data-tab");
        document.getElementById(id).classList.remove("active");
      }
    };

    let change = function (e) {
      clear();
      e.target.classList.add("active");
      let id = e.currentTarget.getAttribute("data-tab");
      document.getElementById(id).classList.add("active");
    };

    bindAll();
  }

  var connectTabs = new Tabs();
} catch (e) {}