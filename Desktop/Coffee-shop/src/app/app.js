const themeToggles = document.querySelectorAll(".toggle-theme");
const submenu = document.querySelector(".submenu");
const submenuBtn = document.querySelector("#submenu-btn");
const shopIcon = document.querySelector("#shopIcon");
const mobileList = document.querySelectorAll(".mobile_list");
const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const basketIcon = document.querySelector(".basketIcon");
const cartMenu = document.querySelector(".cart-menu");
let xBtn = document.querySelectorAll(".x-btn");

basketIcon.addEventListener("click", () => {
  cartMenu.classList.remove("-left-64");
  cartMenu.classList.add("left-0");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  cartMenu.classList.add("-left-64");
  cartMenu.classList.remove("left-0");

  navMenu.classList.add("-right-64");
  navMenu.classList.remove("right-0");
  overlay.classList.add("hidden");
  console.log("ee");
});

xBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    cartMenu.classList.add("-left-64");
    cartMenu.classList.remove("left-0");
    navMenu.classList.add("-right-64");
    navMenu.classList.remove("right-0");
    overlay.classList.add("hidden");
  });
});

navIcon.addEventListener("click", (event) => {
  navMenu.classList.remove("-right-64");
  navMenu.classList.add("right-0");
  overlay.classList.remove("hidden");
});

mobileList.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let itemRemove = document.querySelector(".submenu_item--active");

    if (!itemRemove) {
      event.target.classList.add("submenu_item--active");
    } else {
      itemRemove.classList.remove("submenu_item--active");
      event.target.classList.add("submenu_item--active");
    }
  });
});

themeToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

const themeChange = () => {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

submenuBtn.addEventListener("click", (event) => {
  submenu.classList.toggle("hidden");
  shopIcon.classList.toggle("text-orange-300");
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 14,
  freeMode: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  autoplay: {
    delay: 2000,
  },
});
