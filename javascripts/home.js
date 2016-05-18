// $("#homeLink").click (function() {
//   $("#homeView").addClass("hidden");
//   $("#addView").addClass("hidden");

// $("#homeView").addClass("visible");
// $("homeView").removeClass("hidden");

// });

$("#home-link").click(function() {
  console.log("im clicked home");

  $("#home-view").show();
  $("#list-view").hide();

  $("#add-view").hide();
  console.log ($("#home-view"));
});
