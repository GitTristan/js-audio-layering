$(document).ready(function() {

  $(".record").on("click", function() {
    if($(this).hasClass('rotate')) {
      $("#stopwatch").timer('pause');
      pauseTracks();
      $(this).removeClass("rotate");
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

var arrIDs = [];
function pauseTracks() {
  $.each($('audio'), function(index, track) {
    track.pause();
  });
    arrIDs.forEach(function(x) {
    window.clearTimeout(x);
  })
  arrIDs = [];
};

function delayStart() {
  arrIDs.push(setTimeout(function(){ playTrack($('#raven').get(0)) }, 100));
  arrIDs.push(setTimeout(function(){ playTrack($('#drums1').get(0)) }, 3000));
  arrIDs.push(setTimeout(function(){ playTrack($('#didgi1').get(0)) }, 10000));
  arrIDs.push(setTimeout(function(){ playTrack($('#bass').get(0)) }, 7000));
  arrIDs.push(setTimeout(function(){ playTrack($('#didgi2').get(0)) }, 20000));
  arrIDs.push(setTimeout(function(){ playTrack($('#everything').get(0)) }, 30000));
};
