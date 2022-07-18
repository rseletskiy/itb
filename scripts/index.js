try {
  let workPermitsSlider = new Swiper('#work-permits-slider', {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: '.permits-button-next',
      prevEl: '.permits-button-prev',
    },
    breakpoints: {  
      '320': {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.work-permits-pagination',
          clickable: true
        }
      },
      '576': {
        slidesPerView: 2,
        spaceBetween: 30, 
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 50, 
      },
    }
  });
} catch (e) {}

try {
  let reviewSlider = new Swiper('#review-slider', {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: '.review-button-next',
      prevEl: '.review-button-prev',
    },
    breakpoints: {  
      '320': {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.review-pagination',
          clickable: true
        }
      },
      '576': {
        slidesPerView: 2,
        spaceBetween: 30, 
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 50, 
      },
    }
  });
} catch (e) {}

try {
  let itbComplexSlider = new Swiper('#itb-complex-slider', {
    slidesPerView: 3,
    spaceBetween: 21,
    navigation: {
      nextEl: '.itb-complex-button-next',
      prevEl: '.itb-complex-button-prev',
    },
    breakpoints: {  
      '320': {
        slidesPerView: 1,
        pagination: {
          el: '.itb-complex-pagination',
          clickable: true
        }
      },
      '576': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    }
  });
} catch (e) {}

try {
  let itbComplexSlider = new Swiper('#services-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.services-button-next',
      prevEl: '.services-button-prev',
    },
  });
} catch (e) {}

try {
  let reviewSlider = new Swiper('#popular-news-slider', {
    slidesPerView: 4,
    spaceBetween: 74,
    navigation: {
      nextEl: '.popular-news-button-next',
      prevEl: '.popular-news-button-prev',
    },
  });
} catch (e) {}

try {
  var shopItemSliderSub = new Swiper('.shop-item-slider-sub', {
    spaceBetween: 17,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var shopItemSliderMain = new Swiper('.shop-item-slider-main', {
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
  openTrigger: 'data-custom-open', 
  closeTrigger: 'data-custom-close', 
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true,
});

try {
  let calculationsBtns = document.querySelectorAll(
    '.js-open-calculation-modal'
  );
  calculationsBtns.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      MicroModal.show('calculation-modal');
    });
  });
} catch (e) {}

try {
  function Tabs() {
    let bindAll = function () {
      let menuElements = document.querySelectorAll('[data-tab]');
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener('click', change, false);
      }
    };

    let clear = function () {
      let menuElements = document.querySelectorAll('[data-tab]');
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove('active');
        let id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    };

    let change = function (e) {
      clear();
      e.preventDefault();
      e.target.classList.add('active');
      let id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    };

    bindAll();
  }

  var connectTabs = new Tabs();
} catch (e) {}

try {
  const burgerBtn = document.querySelector('#burger');
  const mobileMenu = document.querySelector('#mobile-menu');
  let isActive = false;
  burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    isActive = burgerBtn.classList.contains('active');

    if (!isActive) {
      burgerBtn.classList.add('active');
      mobileMenu.classList.add('active');
    } else {
      burgerBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
} catch (e) {
  console.error(e);
}


try {
  (function () {
    const breakpoint = window.matchMedia("(min-width: 576px)");
  
    let installListSlider;
    let ourWorkListSlider;
  
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
  
    const enableSwiper = function () {
      installListSlider = new Swiper('#install-list', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
          el: '.swiper-install-pagination',
          clickable: true
        }
      });
  
      ourWorkListSlider = new Swiper('#our-work-list', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
          el: '.our-work-pagination',
          clickable: true
        }
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();
} catch (e) {
  console.error(e);
}