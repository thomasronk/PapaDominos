$(document).ready(function(){
	var original_cookie= document.cookie;
	
	cookies_array = original_cookie.split(";");
	console.log(cookies_array);

	cook_array = cookies_array[0].split("=")
	console.log(cook_array[1]);

	if(cook_array!=""){
		$(".hello_user_header").text("Hello "+cook_array[1]);
		$(".header_top").show();
		console.log(cook_array);
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

	user = cook_array[1];
	var dataString = 'userid=' + user;

	$.ajax({

		type: "GET",
 		url: "php/order_history.php",
 		data: dataString,
 		dataType : "json",
 		success: function(data){
            // console.log(data);
            //console.log(data.length);
            for(var i=0;i<data.length;i++){
            	console.log("Row no:"+(i+1));
            	console.log(data[i].ItemName);
            	console.log(data[i].DateofOrder);
				console.log(data[i].Qty);
				console.log(data[i].Price);
				$('#tb1 tr').last().after('<tr><td>'+data[i].ItemName+'</td>'+'<td>'+data[i].DateofOrder+'</td>'+'<td>'+data[i].Qty+'</td>'+'<td>'+data[i].Price+'</td>');

            }
         } 

	});

});