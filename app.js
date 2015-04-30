$(document).ready(function() {

  $(".record").on("click", function() {
    if($(this).hasClass('rotate')) {
      $("#stopwatch").timer('pause');
      pauseTracks();
      $(this).removeClass("rotate");
      clearTrack();
    }
    else {
      delayStart();
      $('#stopwatch').timer('resume');
      $(this).addClass("rotate");
    }
  })
});

function playTrack(track) {
  track.play();
};

function pauseTracks() {
  $.each($('audio'), function(index, track) {
    track.pause();
  });
};

function delayStart() {
  setTimeout(function(){ playTrack($('#raven').get(0)) }, 100);
  setTimeout(function(){ playTrack($('#drums1').get(0)) }, 3000);
  setTimeout(function(){ playTrack($('#didgi1').get(0)) }, 10000);
  setTimeout(function(){ playTrack($('#bass').get(0)) }, 7000);
  setTimeout(function(){ playTrack($('#didgi2').get(0)) }, 20000);
  setTimeout(function(){ playTrack($('#everything').get(0)) }, 30000);
};

function clearTrack() {
  clearTimeout();
};
