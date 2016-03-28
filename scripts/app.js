$(document).on("ready", function() {

  var $bluedot = $('#blue-dot');
  var $reddot = $('#red-dot');

  $(document).on("keydown", function(event) {

    var $bluePos = $bluedot.offset().left;
    var $redPos = $reddot.offset().left;
    var $finishLine = ($('#track').width());
    var $results = $("#results-box");

    function checkWinner() {
      $results.text("");
      if (($bluePos >= $finishLine) || ($redPos >= $finishLine)) {
        if ($bluePos > $redPos) {
          $results.text("Blue wins!");
          $results.css("color", "blue");
          }
        else if ($redPos > $bluePos) {
          $results.text("Red wins!");
          $results.css("color", "red");
          }
        else {
          $results.text("Tie game!");
        }
        $(document).unbind(event);
    }
  }
  checkWinner();
      // if the p key is clicked and the blue dot hasn't reached the finish line,
      // move the blue dot right
      if ((event.keyCode === 80) &&
          ($bluePos < $finishLine)) {
            $bluedot.animate({
              'left': '+=70px',
              // 'height': 'toggle',
            }, 200);
      }
      // if the q key is clicked and the red dot hasn't reached the finish line,
      // move the red dot right
      else if ((event.keyCode === 81) &&
          ($redPos < $finishLine)) {
            $reddot.animate({
              'left': '+=70px',
              // 'width': 'toggle',
            }, 200);
      }
  });
});
