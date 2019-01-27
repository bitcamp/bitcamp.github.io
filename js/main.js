$("#menu-btn").click(function(e) {
  e.preventDefault();
  if ($("#mobile-top").hasClass("hidden")) {
    $("#mobile-top").removeClass("hidden")
  } else {
    $("#mobile-top").addClass("hidden");
  }
});

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
