/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});

	var original_cookie= document.cookie;
	console.log(original_cookie);
	
	cookies_array = original_cookie.split(";");
	console.log(cookies_array);

	cook_array = cookies_array[0].split("=")
	console.log(cook_array[1] + " " + cook_array[0]);

	if(cook_array[0]=="username"){
		$(".hello_user_header").text("Hello "+cook_array[1]);
		$(".header_top").show();
		//console.log(cook_array);
	}
	else{
		$(".header_top").hide();
	}

	$("#signout").click(function(){

		//console.log("signout now!");
		deleteAllCookies();
		window.location.replace("index.html");

	});


	function deleteAllCookies() {
		console.log("deleting all cookies");
    	var cookies = document.cookie.split(";");

    	for (var i = 0; i < cookies.length; i++) {
	    	var cookie = cookies[i];
	    	var eqPos = cookie.indexOf("=");
	    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
	    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    	}
	}

});
