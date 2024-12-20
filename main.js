const Links = document.querySelectorAll(".links");
const menu = document.querySelector("#menu");
const NavBar = document.querySelector("#nav-bar");
menu.addEventListener("click", () => {
  NavBar.classList.toggle("left-[0]");
  menu.classList.toggle("ri-close-large-line");
  if (menu.classList.contains("white")) {
    menu.classList.remove("white");
  } else {
    menu.classList.add("white");
  }
});

Links.forEach((link) => {
  link.addEventListener("click", () => {
    NavBar.classList.toggle("left-[0]");
    menu.classList.toggle("ri-close-large-line");
  });

  if (menu.classList.contains("white")) {
    menu.classList.remove("white");
  } else {
    menu.classList.add("white");
  }
});

const swiper = new Swiper(".swiper", {
  initialSlide: 1,
  slidesPerView: 1,
  centeredSlides: true,

  loop: true,
  // Optional parameters
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnIntraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal("._data");
  sr.reveal(".scale_data", { scale: 0.5 });
  sr.reveal(".left_data", { origin: "left", distance: "400px" });
  sr.reveal(".right_data", { origin: "right", distance: "400px" });
  sr.reveal(".footer_data", {
    origin: "bottom",
    distance: "400px",
  });
}

window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};
