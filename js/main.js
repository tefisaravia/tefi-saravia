



////////////////// Back to top button  //////////////////
var amountScrolled = 300;

$(document).ready(function(){

    //fade in back to top button
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    //scroll animation back to top
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

  




});



