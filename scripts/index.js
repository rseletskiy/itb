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

MicroModal.init({
  onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
  onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: "data-custom-open", // [3]
  closeTrigger: "data-custom-close", // [4]
  openClass: "is-open", // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true, // [10]
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
