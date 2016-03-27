$(document).on("ready", function() {

  var $reddot = $('#red-dot');
  var $bluedot = $('#blue-dot');

  $(document).on("keydown", function(e) {
    // move blue dot right with p key
    if (e.keyCode === 80) {

      $bluedot.animate({

        'width': '+=20px',
        'height': '+=20px',
        }, 250);

    }
    // move red dot right with q key
    else if (e.keyCode === 81) {
      $reddot.animate({

      'width': '+=20px',
      'height': '+=20px',
      }, 250);
    }

  });

  var redWidth = $reddot.width();
  var blueWidth = $bluedot.width();

    //width of dot



});
