var listLink = document.getElementById("list-link");
var listView = document.getElementById("list-view");
var addView = document.getElementById("add-view");

listLink.addEventListener("click", function() {
console.log("event listener")
  // listView.classList.add("hidden");
  addView.classList.add("hidden");

listView.classList.add("visible");
listView.classList.remove("hidden");

});
