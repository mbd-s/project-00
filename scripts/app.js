$(document).on("ready", function() {

  var $reddot = $('#red-dot');
  var $bluedot = $('#blue-dot');

  $(document).on("keydown", function(e) {
    if (e.keyCode === 80) {
      $bluedot.animate({'left': '+=20px'}, 250);
      // move blue dot right
    }

    else if (e.keyCode === 81) {
      $reddot.animate({'left': '+=20px'}, 250);
    }
    // move red dot right

  });

});
