"use strict";

// Setup event listeners
$(".faq-card h5").click(toggleFAQInfo);
$('#nav .nav-link').click(handleNavLinkClick);
$(window).scroll(adjustFixedNavbar);
$(document).ready(adjustFixedNavbar);

// Open up the faq-card info
function toggleFAQInfo(event) {
  $(event.target).parent().toggleClass("open");
}

// Make nav fixed to the top after leaving the intro section
function adjustFixedNavbar(event) {
  if($(window).scrollTop() > 528) {
    $('body').addClass('fixed-nav');
  } else {
    $('body').removeClass('fixed-nav no-animation');
  }
}

// Handle a nav-link click
function handleNavLinkClick() {
  collapseNavbar();
  turnOffNavbarAnimation();
}

// Hide the expanded menu
function collapseNavbar() {
  $('.navbar-collapse').collapse('hide');
}

// Ensure that the fixed-nav doesn't animate into frame
function turnOffNavbarAnimation() {
  $('body').addClass('no-animation');
}
