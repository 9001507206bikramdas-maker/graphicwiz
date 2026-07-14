$(window).on("load", function () {
  "use strict";
});
$(window).on("resize", function () {
  "use strict";
});

$(document).ready(function () {
  "use strict";

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: false,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
    },
  });

  gsap.fromTo(
    ".gsap-title",
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    },
  );

  gsap.from(".gsap-title span", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

  const items = document.querySelectorAll(".work-item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.fromTo(
        item.querySelector(".working-details"),
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    });
  });


new Swiper(".mySeriveSwiper", {
    autoplay: true,
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
        el: ".service-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".service-next",
        prevEl: ".service-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3.5,
        },
        1440: {
            slidesPerView: 3.5,
        },
         
    },

});


const menuBtn = document.querySelector(".menu-open");
const sidebar = document.querySelector(".navigation");
const blurBg = document.querySelector(".blur-background");

// Open Menu
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open-navigation");
    blurBg.classList.add("active");
    document.body.style.overflow = "hidden";
});

// Close Menu
function closeMenu() {
    sidebar.classList.remove("open-navigation");
    blurBg.classList.remove("active");
    document.body.style.overflow = "";
}

// Click on blur background
blurBg.addEventListener("click", closeMenu);

// Press ESC to close
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Top of page
    if (currentScroll <= 50) {
        header.classList.remove("sticky", "show");
        header.classList.add("top");
        lastScroll = currentScroll;
        return;
    }

    header.classList.remove("top");
    header.classList.add("sticky");

    // Scroll Up
    if (currentScroll < lastScroll) {
        header.classList.add("show");
    }
    // Scroll Down
    else {
        header.classList.remove("show");
    }

    lastScroll = currentScroll;
});

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
});
