
$('body').mousemove(function( event ) { 
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
/*  $("div#mouse_text").text(msg);*/
  mouseCurrentX= event.pageX;
  mouseCurrentY= event.pageY;

	if(xxx < mouseCurrentX){
	rotateValue1 = mouseCurrentX - xxx; 
	}


	if(yyy < mouseCurrentY){
	rotateValue2 = mouseCurrentY - yyy; 
	}


	/* */
	if(xxx > mouseCurrentX){
	rotateValue1 = xxx -  mouseCurrentX; 
	}


	if(yyy > mouseCurrentY){
	rotateValue2 =  yyy - mouseCurrentY; 
	}	


	/**/

	if(rotateValue1 > rotateValue2) {
		rotateValue = rotateValue1;
	} else {
		rotateValue = rotateValue2;
	}

	






var po = $({
    deg:rotateValue
});

// This is just the target object we want to change
$elem = $('div#chainUp');

// Use animate on the object, to make use of the step callback
po.animate({
    deg: rotateValue
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


$('body').on('click', function(){
	/*locateX = mouseCurrentX + 50;*/
	
	
});

$('div#circle').on('mouseenter', function(){
		circleFlag = true;
		/*confirm(circleFlag);*/
});


$('body').on('mousedown', function(){
	
	xxx =  mouseCurrentX;
	yyy =  mouseCurrentY;

	$('div#wrap_box').css('left', mouseCurrentX-180);
	$('div#wrap_box').css('top', mouseCurrentY-255);
	$('div#wrap_box').css('display', 'block');
	
	value = $('div#chainUp').transform('y');
	/*confirm(value);	*/
});


$('body').on('mouseup', function(){
	/*rotateValue = 0;*/
	
	$('div#box_wrapper').removeAttr('style');

	$('div#circleOuter').stop(true).animate({"width":"100px", "height":"100px", "top": "-207"},250);

	$('div#slide').css("display","none");
	$("div#circleOuter").removeAttr('style');
	$('div#circle, div#chain, div#icon').removeAttr('style');
	
	setTimeout("$('div#wrap_box').css('display', 'none');", 230);

});






$('div#circle').bind("mouseenter", mouseEnterFunction);


function mouseEnterFunction(){ 	


		$('div#box_wrapper').css('background-color', 'black');
		$('div#box_wrapper').css('opacity', '0.7');

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


function unchained(){
		if(!circleFlag){ 
			/*$('div#box_wrapper').slideUp(750);*/
			/*confirm('unchained');*/
		}
	}


$('div#circleOuter').on("mouseleave", function(){
	
/*	if(xxx < mouseCurrentX){
	rotateValue = mouseCurrentX - xxx;*/
	/*$('div#box_wrapper').slideUp(750);
		

}*/



	if(yyy < mouseCurrentX){/* $('div#box_wrapper').slideUp(750);*/}
	
	$('div#circleOuter').stop(true).animate({"width":"100px", "height":"100px", "top": "-206"},250);

	$('div#slide').css("display","none");
	
	$('div#circle, div#chain, div#icon').removeAttr('style');

	
	setTimeout(unchained, 250);
	
});


$('div#circle').on("mouseleave", function(){
	circleFlag = false;
	
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
    deg: rotateValue
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



