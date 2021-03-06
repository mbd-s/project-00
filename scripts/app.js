$(document).on('ready', function() {

  var $bluedot = $('#blue-dot');
  var $reddot = $('#red-dot');

  $(document).on('keydown', function(event) {

    var $bluePos = $bluedot.offset().left;
    var $redPos = $reddot.offset().left;
    var $finishLine = ($('#track').width());
    var $results = $('#results-box');

    function checkWinner() {
      $results.text('');
      if (($bluePos >= $finishLine) || ($redPos >= $finishLine)) {
        if ($bluePos > $redPos) {
          $bluedot.animate({
            'left': '-=200',
            'width': '+=5000px',
            'height': '+=5000px',
          }, 1500);
          $reddot.animate({
            'left': '-=1000',
            'width': 'toggle',
            'height': 'toggle',
          }, 900);
          $results.text('Blue wins!');
          $results.css('color', 'blue');
          }
        else if ($redPos > $bluePos) {
          $reddot.animate({
            'left': '-=200',
            'width': '+=5000px',
            'height': '+=5000px',
          }, 1500);
          $bluedot.animate({
            'left': '-=1000',
            'width': 'toggle',
            'height': 'toggle',
          }, 900);
          $results.text('Red wins!');
          $results.css('color', 'red');
          }
        else {
          $results.text('Tie game!');
          $bluedot.animate({
            'left': '-=1000',
            'width': 'toggle',
            'height': 'toggle',
          }, 900);
          $reddot.animate({
            'left': '-=1000',
            'width': 'toggle',
            'height': 'toggle',
          }, 900);
        }

    }
  }
  checkWinner();
function startGame(){
      if ((event.keyCode === 80) &&
          ($bluePos < $finishLine) &&
          ($redPos < $finishLine)) {
            $bluedot.animate({
              'left': '+=70px',
              'width': 'toggle',
            }, 200);
      }
      else if ((event.keyCode === 81) &&
          ($bluePos < $finishLine) &&
          ($redPos < $finishLine)) {
            $reddot.animate({
              'left': '+=70px',
              'height': 'toggle',
            }, 200);
      }
  }
  startGame();
  });

  $('.btn').on('click', function(event) {
    $bluedot.removeAttr('style');
    $reddot.removeAttr('style');
    // listen for keydowns again
    startGame();
  });

});
