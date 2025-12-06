// Assumes jQuery and jquery.cycle.all.min.js are both loaded first.

$(function () {
  // Photo gallery fades through images
  $('.photo-rotator').cycle({
    fx: 'fade',
    speed: 800,
    timeout: 3000,
    slides: '> img'
  });

  // Quote rotator with flexible height
$('.quote-rotator').cycle({
  fx: 'fade',
  speed: 600,
  timeout: 4500,
  slides: '> blockquote',
  slideResize: 0,
  height: 'auto'
});

  // Horizontal-scrolling news ticker
  $('.news-ticker').cycle({
  fx: 'scrollHorz',
  speed: 700,
  timeout: 4000,
  pauseOnHover: true,
  slides: '> li',
  before: function (curr, next, opts) {
    // match container height to the incoming slide
    $(next).parent().height($(next).outerHeight(true));
  }
});
});
