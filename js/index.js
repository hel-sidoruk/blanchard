// burger

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".list__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

// header dropdowns
const btns = document.querySelectorAll(".dropdown__select");
const dropdowns = document.querySelectorAll(".header__dropdown");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const header = document.querySelector(".header__bottom");

header.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("dropdown__select--active");
    dropdownItem.forEach((item) => {
      item.removeAttribute("tabindex", "0");
    });
  });
  btns.forEach((btn) => {
    btn.classList.remove("dropdown__select--active");
  });
  const id = event.target.dataset.id;
  if (id) {
    event.target.classList.toggle("dropdown__select--active");
    const element = document.getElementById(id);
    element.classList.toggle("dropdown__select--active");
    dropdownItem.forEach((item) => {
      item.setAttribute("tabindex", "0");
    });
  }
});

// Надо добавить доступность с клавиатуры

// btns.forEach(function (btn) {
//   btn.addEventListener("keypress", function () {
//     element.classList.toggle("dropdown__select--active");
//     if (this.classList.contains("dropdown__select--active")) {
//       dropdowns.forEach((item) => {
//         item.setAttribute("tabindex", "0");
//       });
//     } else {
//       dropdowns.forEach((item) => {
//         item.removeAttribute("tabindex");
//       });
//     }
//   });
// });

//header scrollbar

const simple = new SimpleBar(document.getElementById("scrollbar"), {
  scrollbarMaxSize: 28,
});

const simple2 = new SimpleBar(document.getElementById("scrollbar2"), {
  scrollbarMaxSize: 28,
});

const simple3 = new SimpleBar(document.getElementById("scrollbar3"), {
  scrollbarMaxSize: 28,
});

const simple4 = new SimpleBar(document.getElementById("scrollbar4"), {
  scrollbarMaxSize: 28,
});

const simple5 = new SimpleBar(document.getElementById("scrollbar5"), {
  scrollbarMaxSize: 28,
});

// hero slider

const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  effect: "fade",

  speed: 800,

  a11y: {
    paginationBulletMessage: "Слайд {{index}}",
  },
});

// gallery slider

const swiperGallery = new Swiper(".swiper__gallery", {
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },

  speed: 800,

  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 39,
      slidesPerGroup: 2,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});

// actions slider

const swiperActions = new Swiper(".swiper__actions", {
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev",
  },

  pagination: {
    el: ".actions__swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  speed: 600,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    769: {
      spaceBetween: 27,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  a11y: {
    paginationBulletMessage: "Слайд {{index}}",
  },
});

// partners slider

const swiperPartners = new Swiper(".swiper-partners", {
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 600,

  a11y: {
    paginationBulletMessage: "Слайд {{index}}",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// gallery dropdown
// Надо будет написать одну функцию

const galleryDropdown = document.querySelector(".gallery__dropdown-select");
const dropdownTitle = document.querySelector(".gallery__dropdown-title");
const dropdownItems = document.querySelectorAll(".gallery__dropdown-item");

galleryDropdown.addEventListener("click", () => {
  updateDropdown();
});

galleryDropdown.addEventListener("keypress", () => {
  updateDropdown();
});

function updateDropdown() {
  galleryDropdown.classList.toggle("gallery__dropdown-select--active");
  if (galleryDropdown.classList.contains("gallery__dropdown-select--active")) {
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.setAttribute("tabindex", "0");
    });
  } else {
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.removeAttribute("tabindex");
    });
  }
}

dropdownItems.forEach(function (dropdownItem) {
  dropdownItem.addEventListener("click", function () {
    let text = dropdownTitle.innerHTML;
    dropdownTitle.innerHTML = dropdownItem.innerHTML;
    dropdownItem.innerHTML = text;
    galleryDropdown.classList.toggle("gallery__dropdown-select--active");
  });
});

dropdownItems.forEach(function (dropdownItem) {
  dropdownItem.addEventListener("keypress", function () {
    let text = dropdownTitle.innerHTML;
    dropdownTitle.innerHTML = dropdownItem.innerHTML;
    dropdownItem.innerHTML = text;
    galleryDropdown.classList.toggle("gallery__dropdown-select--active");
  });
});

// tooltip

let tooltipMarker = document.querySelectorAll(".tooltip__marker");

tooltipMarker.forEach(function (marker) {
  marker.addEventListener("click", () => {
    marker.classList.toggle("tooltip__marker--active");
  });
  marker.addEventListener("keypress", () => {
    marker.classList.toggle("tooltip__marker--active");
  });
});

// accordion

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: 0,
  icons: false,
});

// tabs

const tabsButtons = document.querySelectorAll(".accordion__item");
const tabsItems = document.querySelectorAll(".artist__descr");

tabsButtons.forEach(function (tabButton) {
  tabButton.addEventListener("click", function () {
    let tabId = tabButton.getAttribute("data-id");
    console.log(tabId);
    let currentTab = document.getElementById(tabId);
    console.log(currentTab);

    tabsButtons.forEach(function (tabButton) {
      tabButton.classList.remove("artist__descr--active");
    });

    tabsItems.forEach(function (currentTab) {
      currentTab.classList.remove("artist__descr--active");
    });

    tabButton.classList.add("artist__descr--active");
    currentTab.classList.add("artist__descr--active");
  });
});

// map

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.760370960049336, 37.614688886663956],
    zoom: 15,
  });

  var myPlacemark = new ymaps.Placemark(
    [55.760370960049336, 37.614688886663956],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [20, 20],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
