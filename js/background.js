/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

 document.addEventListener('DOMContentLoaded', function () {
   particleground(document.getElementById('particles'), {
     dotColor: 'rgba(0,0,0,.4)',
     lineColor: 'rgba(34,37,56,.6)',
   });
   var intro = document.getElementById('intro');
   intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
 }, false);
/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});

dotColor: 'rgba(0,0,0,.4)',
lineColor: 'rgba(34,37,56,.6)',
density: '15500',
parallax: 'false',
parallaxMultiplier: '5'
*/
