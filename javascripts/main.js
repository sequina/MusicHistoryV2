// $("#more-songs").click (function (moreSongs) {

//   $("#homeView").add("hidden");
//   $("#listView").add("hidden");

//   $("#moreSongs").add("visible");
//   $("#moreSongs").remove("hidden");
// })

// var jQuery = function() {
//   return new Promise((resolve, reject) => {
//   $.ajax ({
//       url: "songs.json"
//     }).done(function(data1){
//       resolve(data1);
//     }).fail(function(status, error) {
//       reject(error);
//     });
// console.log("jQuery");
//   });
// };

// $(document).ready(function() {
//   var displayDOM = [];

//   function moreSongs(displayDOM) {
//     for (var i = 0; i < displayDOM.songs.length; i++) {
//       var currentSong = displayDOM.songs[i];
//       $("#list-of-songs").append("<h1>" + currentSong.title + "</h1>");
//       $("#list-of-songs").append("<div>" + currentSong.artist + "</div>");
//       $("#list-of-songs").append("<div>" + currentSong.album + "</div>");
//     console.log("songs", displayDOM.songs)
//     };
//   };

//     $.ajax({
//       url: "https://musicv2.firebaseio.com/songs.json"
//     }).done(function(data) {
//       console.log("ajax", data);
//       moreSongs(data);
//     });
// });
