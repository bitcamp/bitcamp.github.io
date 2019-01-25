"use strict";

$(".faq-card h5").click(toggleFAQInfo);
$(window).scroll(adjustFixedNavbar);
$('#nav .nav-link').click(setNoNavbarAnimation);

// Open up the faq-card info
function toggleFAQInfo(event) {
  $(event.target).parent().toggleClass("open");
}

// Make nav fixed to the top after leaving the intro section
function adjustFixedNavbar(event) {
  if($(event.target).scrollTop() > 528) {
    $('body').addClass('fixed-nav');
  } else {
    $('body').removeClass('fixed-nav no-animation');
  }
}

//
function setNoNavbarAnimation() {
  $('body').addClass('no-animation');
}
