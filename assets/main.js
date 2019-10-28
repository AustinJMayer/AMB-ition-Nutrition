$(document).ready(function() {
  if ($(window).width() <= 991) {
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
    $(".fa-bars").on("click", function() {
      $("#burger-menu").toggle(250);
    });
    $("#burger-menu a").on("click", function() {
      $("#burger-menu").toggle(250);
    });
  } else {
  }
});
