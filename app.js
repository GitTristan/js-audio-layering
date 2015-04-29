$(document).ready(function() {

  $(".record").on("click", function() {
    if($(this).hasClass('rotate')) {
      $("#stopwatch").timer('pause');
      $.each($('audio'), function(index, track) {
        pauseTrack(track)
      });
      $(this).removeClass("rotate");
    }
    else {
      playTrack($('#drums1').get(0));
      $('#stopwatch').timer('resume');
      $(this).addClass("rotate");
    }
  })
});


function playTrack(track) {
  track.play();
};

function pauseTrack(track) {
  track.pause();
};
