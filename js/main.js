$("#menu-btn").click(function(e) {
  e.preventDefault();
  if ($("#mobile-top").hasClass("hidden")) {
    $("#mobile-top").removeClass("hidden")
  } else {
    $("#mobile-top").addClass("hidden");
  }
});

// Make nav fixed to the top after leaving the intro section
$(window).scroll(function() {
  if($(this).scrollTop() > 528) {
    $('body').addClass('fixed-nav');
  } else {
    $('body').removeClass('fixed-nav no-animation');
  }
});

$('#nav .nav-link').click(function() {
  $('body').addClass('no-animation');
});


