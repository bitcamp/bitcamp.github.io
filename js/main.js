'use strict';

// Store whether or not the window is in the middle of a smooth scroll animation
let isSmoothScrolling = false;

// Setup event listeners
$('.faq-card h5').click(toggleFAQInfo);
$('#nav .nav-link').click(handleNavLinkClick);
$('#ScheduleTabs .nav-item').click(switchScheduleTab);
$(window).scroll(adjustFixedNavbar);
$(document).ready(adjustFixedNavbar);
$('.navbar-toggler').click(toggleExpandedNav);

// Apply an expanded class to the nav when the toggler is clicked
function toggleExpandedNav() {
  $('#nav').toggleClass('expanded');
}

// Open up the faq-card info
function toggleFAQInfo(event) {
  $(event.target).parent().toggleClass('open');
}

// Make nav fixed to the top after leaving the intro section
function adjustFixedNavbar() {
  const body = $('body');

  if($(window).scrollTop() > $('#about').offset().top || isSmoothScrolling) {
    body.addClass('fixed-nav');
  } else {
    body.removeClass('fixed-nav no-animation');
  }
}

// Prevent the default animation behavior of the navbar on a link click
function handleNavLinkClick() {
  collapseNavbar();
  turnOffNavbarAnimation();
  timeSmoothScrolling();
}

// Hide the expanded menu on mobile devices when a link is pressed
function collapseNavbar() {
  $('.navbar-collapse').collapse('hide');
}

// Ensure that the fixed-nav doesn't animate into frame
function turnOffNavbarAnimation() {
  $('body').addClass('fixed-nav no-animation');
}

// Ensure that the scroll events aren't being triggered during a smooth scroll due to a link click
function timeSmoothScrolling() {
  const SMOOTH_SCROLL_DURATION = 500; // ms

  isSmoothScrolling = true;
  setTimeout(() => {
    isSmoothScrolling = false;
  }, SMOOTH_SCROLL_DURATION);
}

// Navigate between different tabs in the schedule section
function switchScheduleTab(event) {
  event.preventDefault();
  if (!$(event.currentTarget).hasClass('current')) {
    $('#ScheduleTabs .nav-item').removeClass('current');
    $(event.currentTarget).addClass('current');
  }
}