'use strict';

// Setup event listeners
$('.faq-card h5').click(toggleFAQInfo);
$('#ScheduleTabs .nav-item').click(switchScheduleTab);
$('#nav .nav-link').click(collapseNavbar);
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
  const nav = $('#nav');

  if($(window).scrollTop() > ($('#about').offset().top - 1)) {
    nav.addClass('below-hero');
  } else {
    nav.removeClass('below-hero');
  }
}

// Hide the expanded menu on mobile devices when a link is pressed
function collapseNavbar() {
  $('.navbar-collapse').collapse('hide');
}

// Navigate between different tabs in the schedule section
function switchScheduleTab(event) {
  event.preventDefault();
  if (!$(event.currentTarget).hasClass('current')) {
    $('#ScheduleTabs .nav-item').removeClass('current');
    $(event.currentTarget).addClass('current');
  }
}