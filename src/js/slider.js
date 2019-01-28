$('.design__sl').slick({
    prevArrow: "<i class='fa fa-angle-left prev design__sl-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right next design__sl-next' aria-hidden='true'></i>",
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

  $('.community__sl').slick({
    slidesToShow: 2,
    prevArrow: "<i class='fa fa-angle-left prev community__sl-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right next community__sl-next' aria-hidden='true'></i>",
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 1
              }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                arrows: false
              }
        },
    ]
  });