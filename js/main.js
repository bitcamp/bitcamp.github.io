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

function handleWorkshops() {
  document.getElementById('workshops-btn').classList.add('active-btn');
  document.getElementById('workshops-btn').children[0].checked = true;
  document.getElementById('schedule-btn').classList.remove('active-btn');
  document.getElementById('schedule-btn').children[0].checked = false;
  let workshops = document.getElementsByClassName('workshops');
  let schedule = document.getElementsByClassName('schedule-div');
  for (let i = 0; i < 3; i++) {
    workshops[i].style.display = 'block';
    schedule[i].style.display = 'none';
  }
}

function handleSchedule() {
  document.getElementById('workshops-btn').classList.remove('active-btn');
  document.getElementById('workshops-btn').children[0].checked = false;
  document.getElementById('schedule-btn').classList.add('active-btn');
  document.getElementById('schedule-btn').children[0].checked = true;
  let workshops = document.getElementsByClassName('workshops');
  let schedule = document.getElementsByClassName('schedule-div');
  for (let i = 0; i < 3; i++) {
    workshops[i].style.display = 'none';
    schedule[i].style.display = 'block';
  }
}

function switchScheduleWorkshop(elt) {
  if (!elt.children[0].checked) {
    elt.children[0].checked = true;
    elt.classList.add('active-btn');
    let workshops = document.getElementsByClassName('workshops');
    let schedule = document.getElementsByClassName('schedule-div');
    if (elt.id === 'schedule-btn') {
      document.getElementById('workshops-btn').classList.remove('active-btn');
      document.getElementById('workshops-btn').children[0].checked = false;
      for (let i = 0; i < 3; i++) {
        workshops[i].style.display = 'none';
        schedule[i].style.display = 'block';
      }
    } else {
      document.getElementById('schedule-btn').classList.remove('active-btn');
      document.getElementById('schedule-btn').children[0].checked = false;
      for (let i = 0; i < 3; i++) {
        workshops[i].style.display = 'block';
        schedule[i].style.display = 'none';
      }
    }
  }
}
