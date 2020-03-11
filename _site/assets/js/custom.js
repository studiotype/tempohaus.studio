(function($){

	"use strict"; 

/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */


$('.Preloader').delay(1050).fadeOut('slow');

/* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

$('a[href^="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});

$('#scroll-up').on("click", function(e){
	e.preventDefault();
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}

	if ($(this).scrollTop() > 10) {
		$(".scrolldown-arrow").fadeOut('show');
	} else {
		$(".scrolldown-arrow").fadeIn('show');
	}
	
});

$('.navbar-toggler').on("click", function(){
	setTimeout(function(){
		$('.navbar-toggler-close').show();	
	}, 500)
	
});


$('.navbar-toggler-close').on("click", function(){
	$('.navbar-collapse').removeClass("show");
	$('.navbar-toggler-close').hide();
});

$('.carousel-item:first').addClass("active")



$('#myForm').validator()

})(jQuery);