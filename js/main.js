/* Deferred script loading */

const injectScript = (scriptUrl, callback) => {
  const script = document.createElement('script');
  script.src = scriptUrl;
  if (typeof callback === 'function') {
    script.onload = function () {
      callback();
    };
  }
  document.body.appendChild(script);
};

const injectScriptOnIntersection = (scriptUrl, elementSelector, callback) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        injectScript(scriptUrl, callback);
        observer.unobserve(entry.target);
      }
    });
  });

  const element = document.querySelector(elementSelector);
  observer.observe(element);
};

let portfolioSwiper;

injectScriptOnIntersection('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', '.portfolio', () => {

  portfolioSwiper = new Swiper('.portfolio__swiper', {

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

});

/* Other */

AOS.init({
  disable: false,
  duration: 400
});