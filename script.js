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

        /*
          The below logic checks if the row is even/odd then checks if the column is even/odd and
          alternates setting the background color from black/red.  This creates the checkered effect
          for the squares.
        */
        if (rows % 2 === 0) {
          if (columns % 2 === 0) {
            color = color1;  // if the row and column are both even add color 1
          } else {
            color = color2;  // if the row is even and the column is odd add color 2
          }
        } else {
          if (columns % 2 === 0) {
            color = color2;  // if the row is odd and the column is even add color 1
          } else {
            color = color1; // if the row and column are both odd add color 2
          }
        }

        // adding the square to the DOM
        $('#checkerboard-space').append('<div class="square ' + color + '"></div>');
      }

      $('#checkerboard-space').append('</div>');
    }
  }

  /*************************************
    Function to check if the input information is valid
  *************************************/
  function validateInput(number, color1, color2) {
    let errorText = '';

    if (!number || number < 0 || number > 10) { // check if number is valid
      errorText += 'Please input a valid number.\n';
    }

    if (color1 === '') { // check if first color is selected
      errorText += 'Please select color 1\n';
    }

    if (color2 === '') { // check if second color is selected
      errorText += 'Please select color 2\n';
    }

    if (errorText) { // if any of the above is wrong, alert the user
      alert(errorText);
      return true;
    }

    return false; // if no errors return false
  }

  /*************************************
    Event handler to call the generateCheckerboard function once the button is clicked
  *************************************/
  $(document).on('click', 'button', function() {
    let number = $('#checkerboard-size').val(), // capture the number from the input field
      color1 = $('#color-1').val(), // capture the first color
      color2 = $('#color-2').val(), // capture the second color
      hasError;

    number = parseInt(number); // the input number is captured as a string so we have to change it to a number
    hasError = validateInput(number, color1, color2);

    if (!hasError) { // if no errors then run logic to make checkerboard
      $('#checkerboard-space').empty(); // empty the checkerboard space
      generateCheckerboard(number, color1, color2);
    }
  });
});
