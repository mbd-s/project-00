$(document).on("ready", function() {

  $(document).on("keydown", function(e) {
    var $reddot = $('#red-dot');
    var $bluedot = $('#blue-dot');
    // move blue dot right with p key
    if (e.keyCode === 80) {

      $bluedot.animate({
        'left': '+=40px',
        // 'width': 'toggle',
        'height': 'toggle',
      }, 200);

    }
    // move red dot right with q key
    else if (e.keyCode === 81) {
      $reddot.animate({
        'left': '+=40px',
        'width': 'toggle',
        // 'height': 'toggle',
      }, 200);
    }

  });

  var redWidth = $reddot.width();
  var blueWidth = $bluedot.width();

    //width of dot



});
