"use strict";

// Store whether or not the
let isSmoothScrolling = false;


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
  if($(window).scrollTop() > 528 || isSmoothScrolling) {
    $('body').addClass('fixed-nav');
  } else {
    $('body').removeClass('fixed-nav no-animation');
  }
}

// Handle a nav-link click
function handleNavLinkClick() {
  collapseNavbar();
  turnOffNavbarAnimation();
  timeSmoothScrolling();
}

// Hide the expanded menu
function collapseNavbar() {
  $('.navbar-collapse').collapse('hide');
}

// Ensure that the fixed-nav doesn't animate into frame
function turnOffNavbarAnimation() {
  $('body').addClass('fixed-nav no-animation');
}

// Ensure that the scroll events aren't being triggered during a smooth scroll due to a link click
function timeSmoothScrolling() {
  const scrollDuration = 500; // ms

  isSmoothScrolling = true;
  setTimeout(() => {
    isSmoothScrolling = false;
  }, scrollDuration);
}

$("#Friday-tab").click(function(e) {
  e.preventDefault();
  if (!$("#Friday-tab").hasClass("current")) {
    $("#Saturday-tab").removeClass("current");
    $("#Sunday-tab").removeClass("current");
    $("#Friday-tab").addClass("current");
  }
});

$("#Saturday-tab").click(function(e) {
  e.preventDefault();
  if (!$("#Saturday-tab").hasClass("current")) {
    $("#Friday-tab").removeClass("current");
    $("#Sunday-tab").removeClass("current");
    $("#Saturday-tab").addClass("current");
  }
});

$("#Sunday-tab").click(function(e) {
  e.preventDefault();
  if (!$("#Sunday-tab").hasClass("current")) {
    $("#Friday-tab").removeClass("current");
    $("#Saturday-tab").removeClass("current");
    $("#Sunday-tab").addClass("current");
  }
});
