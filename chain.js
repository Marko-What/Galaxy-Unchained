
$('div#circle').bind("mouseenter", mouseEnterFunction);


function mouseEnterFunction(){ 	
		$("div#circleOuter").addClass('borderWhiteAlpha');
		/* class going to cover ...*/

		$('div#circleOuter').stop(true).animate({"width":"220px", "height":"220px", top: "-262"}, 350, function(){
		$('div#slide').delay(80).stop(true).slideDown(180);
		});
		$("div#chain").css('display', 'block');
	
		$("div#icon").css('display', 'none');



function horizontSlide(){ 

	$('div#slide.c').addClass("normal").delay(600).queue(function(next){
		$(this).removeClass("normal");
		next();
	});	

	$('div#slide.b').addClass("normal").delay(400).queue(function(next){
		$(this).removeClass("normal");
		next();
	});

	$('div#slide.a').addClass("normal").delay(200).queue(function(next){
		$(this).removeClass("normal");
		next();
	});
}
	/*horizontSlide();*/
	Interval = setInterval(horizontSlide, 850);


} /* end of mouseEnterFunction*/



$('div#circleOuter').on("mouseleave", function(){
	
	
	$('div#circleOuter').stop(true).animate({"width":"100px", "height":"100px", "top": "-206"},250);

	$('div#slide').css("display","none");
	
	$('div#circle, div#chain, div#icon').removeAttr('style');
	
});


$('div#circle').on("mouseleave", function(){

	$("div#circleOuter").on("mouseenter", function(){
		
	});


	$("div#circleOuter").removeClass('borderWhiteAlpha');

	$('div#circle').css({'border':'4px solid rgba(255,255,255, 0.7)'});

	clearInterval(Interval);


	

var po = $({
    deg: 0
});

// This is just the target object we want to change
$elem = $('div#chainUp');

// Use animate on the object, to make use of the step callback
po.animate({
    deg: 180
}, {
    duration: 550,
    step: function (now) {
	
        // Take the computed value and use it on a real element!
        $elem.css({
            transform: 'rotateY(' + now + 'deg)'
        });
    }
});


});



