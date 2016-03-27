$(document).on("ready", function() {

  var $reddot = $('#red-dot');
  var $bluedot = $('#blue-dot');
  var redPos = $reddot.position();
  var bluePos = $bluedot.position();

  $(document).on("keydown", function(e) {

    // var $yellowdot =$('#yellow-dot');

    // move blue dot right with p key
    if (e.keyCode === 80) {

      $bluedot.animate({
        'left': '+=40px',
        // 'height': 'toggle',
      }, 200);
      console.log(bluePos);
    }
    // move red dot right with q key
    else if (e.keyCode === 81) {
      $reddot.animate({
        'left': '+=40px',
        // 'width': 'toggle',
      }, 200);
      console.log(redPos);
    }
  });






});
