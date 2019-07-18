$(function() {
  'use strict';

  /*************************************
    The below function generates the checkerboard by adding div elements to the DOM through a double loop logic.
    First, we loop through the number of columns then loop through the rows alternating the color
  *************************************/
  function generateCheckerboard(number, color1, color2) {
    let columns,
      rows;

    for (columns = number; columns > 0; columns--) {
      $('#checkerboard-space').append('<div class="row">');

      for (rows = number; rows > 0; rows--) {
        let color;

        /*************************************
          The below logic checks if the row is even/odd then checks if the column is even/odd and
          alternates setting the background color from black/red.  This creates the checkered effect
          for the squares.
        *************************************/
        if (rows % 2 === 0) {
          if (columns % 2 === 0) {
            color = color1;  // if the row and column are both even add black
          } else {
            color = color2;  // if the row is even and the column is odd add redd
          }
        } else {
          if (columns % 2 === 0) {
            color = color2;  // if the row is odd and the column is even add red
          } else {
            color = color1; // if the row and column are both odd add black
          }
        }

        $('#checkerboard-space').append('<div class="square ' + color + '"></div>');
      }

      $('#checkerboard-space').append('</div>');
    }
  }

  /*************************************
    Event handler to call the generateCheckerboard function once the button is clicked
  *************************************/
  $(document).on('click', 'button', function() {
    let number = $('#checkerboard-size').val(), // capture the number from the input field
      color1 = $('#color-1').val(), // capture the first color
      color2 = $('#color-2').val(); // capture the second color

    number = parseInt(number); // the input number is captured as a string so we have to change it to a number

// debugger;

    $('#checkerboard-space').empty(); // empty the checkerboard space
    generateCheckerboard(number, color1, color2);
  });
});
