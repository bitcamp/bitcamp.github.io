"use strict";

// Setup event listeners
$(".faq-card h5").click(toggleFAQInfo);
$('#nav .nav-link').click(handleNavLinkClick);
$(window).scroll(adjustFixedNavbar);
$(document).ready(adjustFixedNavbar);
$('.parallax-bg div').inViewport(makeVisible);

function makeVisible(px) {
  if(px) {
    $(this).addClass('visible');
  } else {
    $(this).removeClass('visible');
  }
}

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
