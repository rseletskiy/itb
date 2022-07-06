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
