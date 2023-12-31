(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  jQuery('button').click(function (e) {
    jQuery('.collapse').collapse('hide');
  });

})(jQuery); // End of use strict
/*
$('#workshop_btn').click(function(){
  console.log("workshop btn is clicked");
   window.location.href='/rsvp/v2/index.php';
   return false;
})

$('#application_btn').click(function(){
   window.location.href='/rsvp/v2/index.php';
   return false;
})

$('#tutorial_btn').click(function(){
   window.location.href='/rsvp/v2/index.php';
   return false;
})
*/






