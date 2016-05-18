$("#add-music").click(function() {
  console.log("im clicked");

  $("#home").hide();
  $("#list-view").hide();

  $("#add-view").show();
  console.log ($("#add-view"));
});

$("#addSongs").click(function() {
  console.log("clicked add button")
  let newSong = {
      "album": $("#userAlbum").val(),
      "artist": $("#userArtist").val(),
      "title": $("#userTitle").val()
    }
    console.log(newSong);

//EDIT BUTTON
// function activateEditButton () {

// $("#editButton").click(function(e) {
//   console.log(e);
//   });
// };


  $.ajax({
      url: "https://musicv2.firebaseio.com/songs.json",
      type: "POST",
      data: JSON.stringify(newSong)
    }).done(function(dataPost) {
      loadSongs();
      console.log("yay! it saves", dataPost)
    });
  });
