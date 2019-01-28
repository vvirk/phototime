$('.design__sl').slick({
    prevArrow: "<i class='fa fa-angle-left design__sl-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right design__sl-next' aria-hidden='true'></i>",
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
          breakpoint: 476,
          settings: {
              arrows: false
            }
      },
  ]
  });