$(document).ready(function() {

  $(".record").on("click", function() {
    playTrack($('#drums1').get(0));
    $('#stopwatch').timer('resume');
    if($(this).hasClass('rotate')) {
      $("#stopwatch").timer('pause');
      pauseTrack($(audio));
    }
    $(this).toggleClass("rotate");
  })
})


function playTrack(track) {
  track.play();
};

function pauseTrack(track) {
  track.pause();
};
