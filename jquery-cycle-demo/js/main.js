// Assumes jQuery and jquery.cycle.all.min.js are both loaded first.

$(function () {
  // Photo gallery fades through images
  $('.photo-rotator').cycle({
    fx: 'fade',
    speed: 800,
    timeout: 3000,
    slides: '> img'
  });

  // Quote rotator with slightly slower timing
  $('.quote-rotator').cycle({
    fx: 'fade',
    speed: 600,
    timeout: 4500,
    slides: '> blockquote'
  });

  // Horizontal-scrolling news ticker
  $('.news-ticker').cycle({
    fx: 'scrollHorz',
    speed: 700,
    timeout: 4000,
    pauseOnHover: true,
    slides: '> li'
  });
});
