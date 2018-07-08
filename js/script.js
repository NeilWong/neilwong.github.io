$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 45});

  // Add smooth scrolling on all links inside the navbar
  $("#navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#home", offset: 45});

  // Add smooth scrolling on all links inside home section
  $("#home a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.navbar-inverse').css('background-color', '#222538')
                $('.navbar-inverse').css('border-color', 'black')
                $('.navbar-inverse').transition('background-color 3s')
                $('.navbar-inverse').fadeIn(500);
            } else {
                $('.navbar-inverse').css('background-color', 'rgba(44,47,64,0)').fadeIn(50);
                $('.navbar-inverse').css('border-color', 'transparent')
            }
        });
    });
})(jQuery);

/*
$('.navbar-inverse').css('background-color', '#222538')
$('.navbar-inverse').css('border-color', 'black')
$('.navbar-inverse').css.transition('background-color 1s')
$('.navbar-inverse').css.transition("border-color 1s")
*/
