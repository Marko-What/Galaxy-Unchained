
$('body').mousemove(function( event ) { 
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
	// $("div#mouse_text").text(msg);
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

	if(Mousedown){
		rotateValueA = rotateValue;
	}else {
		rotateValueA = 0;
	}




var po = $({
    deg:rotateValueA
});

// This is just the target object we want to change
$elem = $('div#chainUp');

// Use animate on the object, to make use of the step callback
po.animate({
    deg: rotateValueA
}, {
    duration: 550,
    step: function (now) {
	
        // Take the computed value and use it on a real element!
        $elem.css({
            transform: 'rotateY(' + (now*1.6) + 'deg)'
        });
    }
});







});






$('body').on('click', function(){
	/*locateX = mouseCurrentX + 50;*/
	


	



	
});











$('div#circle').on('mouseenter', function(){
		circleFlag = "true";
		/*confirm(circleFlag);*/
});


$('body').on('mousedown', function(){

	
	Mousedown = true;
	

	



	$('div#chainUp').css({'transform': 'rotate(0deg)'});

	xxx =  mouseCurrentX;
	yyy =  mouseCurrentY;


	if(65 > mouseCurrentX){
		confirm('border');

	}


	if(65 > mouseCurrentY){
		confirm('border');
	}




	$('div#wrap_box').css('left', mouseCurrentX-180);
	$('div#wrap_box').css('top', mouseCurrentY-255);
	$('div#wrap_box').css('display', 'block');
	
	

});


$('body').on('mouseup', function(){
	/*rotateValue = 0;*//*$('div#chainUp').css({'transform': 'rotate(0deg)!important'});*/
	
	
	Mousedown = false;
	//$('div#chainUp').addClass('rotateNone');

	
	//$('div#chainUp').removeAttr('style');
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


function unchaind(){
	$('div#box_wrapper').slideUp(750);
}

function mouseOutWhat(){
	/*confirm('sdsds');*/
	/*if(circleFlag == "false"){ confirm('testing mouseout ...');}*/
}



$('div#circleOuter').on("mouseleave", function(){
	/*confirm(xxx);*/
	xxx =xxx;/*mouse down value*/
	yyy =yyy;
	
	
	if((xxx +70) < mouseCurrentX){
	/*rotateValue = mouseCurrentX - xxx;*/
		unchaind();
	}
	

	if((xxx -70) > (mouseCurrentX)){
		unchaind();
	}
	if((yyy +70) < mouseCurrentY){
	/*rotateValue = mouseCurrentX - xxx;*/
		unchaind();
	}
	if((yyy -70) > (mouseCurrentY)){
		unchaind();
	}


	/* diagonal think about it ... */



	if(yyy < mouseCurrentX){/* $('div#box_wrapper').slideUp(750);*/}
	
	$('div#circleOuter').stop(true).animate({"width":"100px", "height":"100px", "top": "-206"},250);

	$('div#slide').css("display","none");
	
	$('div#circle, div#chain, div#icon').removeAttr('style');

	
	setTimeout(unchained, 250);
	
});






$('div#circle').on("mouseleave", function(){
	circleFlag = "false";
	
	$("div#circleOuter").on("mouseenter", function(){
		
	});


	$("div#circleOuter").removeClass('borderWhiteAlpha');

	$('div#circle').css({'border':'4px solid rgba(255,255,255, 0.7)'});

	clearInterval(Interval);


	




});










function redLoop(){
		function elementA(){
			$('div#circleA.a').css("display","none");		
		}
		setTimeout(elementA, 500);
		
		function elementB(){
			$('div#circleA.b').css("display","none");		
		}
		setTimeout(elementB, 1000);

		function elementC(){
			$('div#circleA.c').css("display","none");		
		}
		setTimeout(elementC, 1500);

		function display(){
		$('div#circleA').css("display","block");
		}
		setTimeout(display, 2000);
			
	}
	redLoop();
	setInterval(redLoop, 2500);


