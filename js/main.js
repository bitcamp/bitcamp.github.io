"use strict";

// FAQ Info Toggling
$(".faq-card h5").click(function() {
  $(this).parent().toggleClass("open");
});