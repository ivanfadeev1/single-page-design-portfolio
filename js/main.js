const portfolioSwiper = new Swiper('.portfolio__swiper', {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,

    navigation: {
      nextEl: '.btn-nav--right',
      prevEl: '.btn-nav--left'
    },

    breakpoints: {
      640: {
        spaceBetween: 30
      }
    }

});


AOS.init({
  disable: false
});
