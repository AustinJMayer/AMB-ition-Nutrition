$(document).ready(function() {
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      500,
      "linear"
    );
  });
  $(".fa-bars").on("touchstart click", function() {
    $("#burger-menu").toggle(250);
  });
  $("#burger-menu a").on("touchstart click", function() {
    $("#burger-menu").toggle(250);
  });

  $("#gold-button").on("touchstart click", function() {
    $("#overlay").fadeIn(1000);
    $("#gold-modal").fadeIn(500);
  });
  $(".close").on("touchstart click", function() {
    $("#overlay").fadeOut(1000);
    $(".menu-modal").fadeOut(500);
  });

  $("#silver-button").on("touchstart click", function() {
    $("#overlay").fadeIn(1000);
    $("#silver-modal").fadeIn(500);
  });
  $(".close").on("touchstart click", function() {
    $("#overlay").fadeOut(1000);
    $(".menu-modal").fadeOut(500);
  });

  $("#bronze-button").on("touchstart click", function() {
    $("#overlay").fadeIn(1000);
    $("#bronze-modal").fadeIn(500);
  });
  $(".close").on("touchstart click", function() {
    $("#overlay").fadeOut(1000);
    $(".menu-modal").fadeOut(500);
  });

  $("#overlay").on("touchstart click", function() {
    $("#overlay").fadeOut(1000);
    $(".menu-modal").fadeOut(500);
  });
});
