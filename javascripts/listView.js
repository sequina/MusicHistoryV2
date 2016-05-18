$(document).ready(function () {

  $.ajax ({
      url: "https://musicv2.firebaseio.com/songs.json"
    }).done(function(data){
      // for (song in data) {
      //   console.log("data", data);
      //   songList.unshift(data[song]);
      //   console.log(songList);
      //   loadSongs(songList);
      // }
      loadSongs(data);
    });

  });
//Putting songs into DOM
  function loadSongs (songs) {
    for (let song in songs) {
      console.log(song);
      // console.log("i", i);
      $("#list-view").append("<div id = '"+ song + "' class = 'list-view'><h2>" + songs[song].artist + "</h2><h3>" + songs[song].album + "</h3><div>" + songs[song].title + "</div><button class = 'del'>Delete</button><button class = 'edit'>Edit</div>");

      // console.log("works",songs[i].artist);
      };
      //event listener for edit button edit's song


      //event listener for delete button, removes current song once clicked
      var delButton = $(".del");
      for (var i = 0; i < delButton.length; i++) {
        // delButton[i];
        $(delButton[i]).click(function(e) {
          console.log(e.currentTarget);
      var currentTarget = e.currentTarget
        $(currentTarget).closest(".list-view").remove();

      var songID = $(currentTarget).closest(".list-view").attr("id");
        console.log(delButton);
        removeDataFromFirebase(songID);
        });
      };

  };

//trying to delete songs from firebase through DOM
function removeDataFromFirebase(songID) {
  console.log(songID);
   $.ajax({
       url:"https://musicv2.firebaseio.com/songs/" + songID + ".json",
       type: "DELETE"
     }).done(function() {
      loadSongs();
     });
  };

//click event hide and show views when list button is clicked
$("#list-link").click(function() {
  console.log("im clicked for list link");

  $("#home").hide();
  $("#list-view").show();

  $("#add-view").hide();
});
