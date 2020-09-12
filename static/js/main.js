// ScrollReveal().reveal(".img-fluid:not(.blacklist), .floating", {
//   delay: 250,
//   origin: "bottom",
// });
// $.scrollify({
//   section: "#page1, #page2, #page3, #page4, footer",
//   setHeights: false,
// });

// $("#service").on("slid", "", () => checkitem('#service'));
// $("#service").on("slid.bs.carousel", "", () => checkitem('#service'));
// $("#testimonial").on("slid", "", () => checkitem('#testimonial'));
// $("#testimonial").on("slid.bs.carousel", "", () => checkitem('#testimonial'));



function scrollToElement(selector) {
  const $carousel = $("#mycarousel");

  $("html, body").animate(
    {
      scrollTop: $(selector).offset().top,
    },
    1000
  );

  $carousel.carousel({
    interval: false
  });
}

function checkitem(carouselSelector) {
  var $this = $(carouselSelector);
  if ($this.children(".carousel-inner").children(".carousel-item:first").hasClass("active")) {
    $this.children("a.carousel-control-prev").hide();
    $this.children("a.carousel-control-next").show();
  } else if ($this.children(".carousel-inner").children(".carousel-item:last").hasClass("active")) {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").hide();
  } else {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").show();
  }
}

$(document).ready(function () {
  const $carousel1 = $("#service");
  const $carousel2 = $("#testimonial");
  
  checkitem("#service");
  checkitem("#testimonial");

  $carousel1.carousel({
    interval: false,
    touch: true
  });

  $carousel2.carousel({
    interval: false,
    touch: true
  });
});

$(document).on("click", "a.page-scroll", function () {
  scrollToElement($(this).attr("href"));
});
