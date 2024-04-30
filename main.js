const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});


// stories container
ScrollReveal().reveal(".stories_container", scrollRevealOption);
ScrollReveal().reveal(".stories-text", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".tarian", {
  duration: 1000,
  interval: 400,
});

ScrollReveal().reveal(".Musik", {
  duration: 1000,
  interval: 200,
});


// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

ScrollReveal().reveal(".post-box", {
  ...scrollRevealOption,
  interval: 200,
});



// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});


// blog detail section
ScrollReveal().reveal(".post-header", {
  ...scrollRevealOption,
  interval: 400,
});



ScrollReveal().reveal(".post-text", {
  ...scrollRevealOption,
  interval: 400,
});

ScrollReveal().reveal(".footer__bar h1 img", scrollRevealOption);


//Filter
$(document).ready(function () {
  $(".filter-item").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all"){
          $(".post-box").show("1000")
      } else{
          $(".post-box")
              .not("." + value)
              .hide(1000);
          $(".post-box")
          .filter("." + value)
          .show("1000")
      }
  });
  $(".filter-item").click(function () {
      $(this).addClass("active-filter").siblings().removeClass("active-filter")
  });
});