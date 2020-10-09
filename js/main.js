



////////////////// Back to top button  //////////////////
var amountScrolled = 300;
function portfolioLink1() { 
    window.open( 
    "https://tefisaravia.github.io/rogue_pickings/index.html", "_blank"); 
    } 

function portfolioLink2() { 
    window.open( 
    "https://tefisaravia.github.io/unplugged-retreat/", "_blank"); 
    } 
function portfolioLink3() { 
    window.open( 
    "https://tefisaravia.github.io/clock-project/", "_blank"); 
    } 

function codePenPortfolio() { 
        window.open( 
        "https://codepen.io/your-work/", "_blank"); 
        }  

function gitHubPortfolio() { 
        window.open( 
        "https://github.com/tefisaravia?tab=repositories", "_blank"); 
        }   

$(document).ready(function(){
    $('.back-to-top').hide();
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



