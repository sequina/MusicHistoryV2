var addMusic = document.getElementById("add-music");
var addView = document.getElementById("add-view");

addMusic.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

addView.classList.add("visible");
addView.classList.remove("hidden");

});
