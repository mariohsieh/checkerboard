$(function() {
  'use strict';

  let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  rows.forEach(function(row) {
    $('body').append('<div class="row">');

    columns.forEach(function(col) {
      if (row % 2 === 0) {
        if (col % 2 === 0) {
          $('body').append('<div class="square black"></div>');
        } else {
          $('body').append('<div class="square red"></div>');
        }
      } else {
        if (col % 2 === 0) {
          $('body').append('<div class="square red"></div>');
        } else {
          $('body').append('<div class="square black"></div>');
        }
      }
    });

    $('body').append('</div>');
  });
});
