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


  var swiper = new Swiper(".mySeriveSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: false,

    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3.5,
      },
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});
