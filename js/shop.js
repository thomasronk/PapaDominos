$(document).ready(function(){

	var original_cookie= document.cookie;
	console.log(original_cookie);
	
	cookies_array = original_cookie.split(";");
	//console.log(cookies_array);

	cook_array = cookies_array[0].split("=")
	//console.log(cook_array[1]);

	if(cook_array!=""){
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
		window.location.replace("../index.html");

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

	//initialize product divison with all products
	var name = "*";

	$.ajax({
		type: 'get',
		url: 'php/shopsearch.php',
		data: {product:name},
		dataType: 'json',
		success: function(data){

			$("#productlist").empty();
			

			if (data.length != 0){

				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = "";

					if (data[i+2]=="pizza" || data[i+2]=="pasta"){
					str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ 'Size <select name=\x22size\x22>'
						      			+ '<option value=\x22' + smallprice.toFixed(2) + '\x22> Small $' + smallprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + medprice.toFixed(2) + '\x22> Medium $' + medprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + largeprice.toFixed(2) + '\x22> Large $' + largeprice.toFixed(2) + '</option>'
						      		+ '</select>'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';
					}
					

					else{
					str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';
					} // end of else
					$("#productlist").append(str);

				} // end of for
			}// if data length not 0
			else{
				str = '<p>Could not find matching products</p>';
				$("#productlist").append(str);
			}



		} // end of success function

	});	

	// end of product initialization

	$("#all").click(function(){
		var name = "*";

		$.ajax({
			type: 'get',
			url: 'php/shopsearch.php',
			data: {product:name},
			dataType: 'json',
			success: function(data){

				$("#productlist").empty();
				

				if (data.length != 0){

					for (var i=0;i<data.length;i=i+6){
						var modalid = data[i] + "modal";
						var medprice = parseFloat(data[i+3]);
						var smallprice = medprice*0.85;
						var largeprice = medprice*1.25;
						var str = "";

						if (data[i+2]=="pizza" || data[i+2]=="pasta"){
						str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
						'<img src=\x22' + data[i+5] + '\x22 />' +
						'<h2>$' + data[i+3] + '</h2>' +
						'<p>' + data[i+1] + '</p>' +
						'<p>Description: ' + data[i+4] + '</p>' +
						'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
						+ '</div>' + '</div>' + '</div>'

						+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
							  + '<div class=\x22modal-dialog\x22>'


							    + '<div class=\x22modal-content\x22>'
							      + '<div class=\x22modal-header\x22>'
							        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
							        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
							      + '</div>'
							      + '<div class=\x22modal-body\x22>'
							      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
							      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
							      		+ 'Size <select name=\x22size\x22>'
							      			+ '<option value=\x22' + smallprice.toFixed(2) + '\x22> Small $' + smallprice.toFixed(2) + '</option>'
							      			+ '<option value=\x22' + medprice.toFixed(2) + '\x22> Medium $' + medprice.toFixed(2) + '</option>'
							      			+ '<option value=\x22' + largeprice.toFixed(2) + '\x22> Large $' + largeprice.toFixed(2) + '</option>'
							      		+ '</select>'
							      		+ 'Quantity <select name=\x22quantity\x22>'
							      			+ '<option value=\x221\x22> 1' + '</option>'
							      			+ '<option value=\x222\x22> 2' + '</option>'
							      			+ '<option value=\x223\x22> 3' + '</option>'
							      			+ '<option value=\x224\x22> 4' + '</option>'
							      			+ '<option value=\x225\x22> 5' + '</option>'
							      			+ '<option value=\x226\x22> 6' + '</option>'
							      			+ '<option value=\x227\x22> 7' + '</option>'
							      			+ '<option value=\x228\x22> 8' + '</option>'
							      			+ '<option value=\x229\x22> 9' + '</option>'
							      			+ '<option value=\x2210\x22> 10' + '</option>'
							      		+ '</select>'
							      		
							      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
							      	+ '</form>'
							      + '</div>'
							      + '<div class=\x22modal-footer\x22>'
							        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
							      + '</div>'
							    + '</div>'

							  + '</div>'
							+ '</div>';
						}
						

						else{
						str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
						'<img src=\x22' + data[i+5] + '\x22 />' +
						'<h2>$' + data[i+3] + '</h2>' +
						'<p>' + data[i+1] + '</p>' +
						'<p>Description: ' + data[i+4] + '</p>' +
						'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
						+ '</div>' + '</div>' + '</div>'

						+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
							  + '<div class=\x22modal-dialog\x22>'


							    + '<div class=\x22modal-content\x22>'
							      + '<div class=\x22modal-header\x22>'
							        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
							        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
							      + '</div>'
							      + '<div class=\x22modal-body\x22>'
							      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
							      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
							      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
							      		+ 'Quantity <select name=\x22quantity\x22>'
							      			+ '<option value=\x221\x22> 1' + '</option>'
							      			+ '<option value=\x222\x22> 2' + '</option>'
							      			+ '<option value=\x223\x22> 3' + '</option>'
							      			+ '<option value=\x224\x22> 4' + '</option>'
							      			+ '<option value=\x225\x22> 5' + '</option>'
							      			+ '<option value=\x226\x22> 6' + '</option>'
							      			+ '<option value=\x227\x22> 7' + '</option>'
							      			+ '<option value=\x228\x22> 8' + '</option>'
							      			+ '<option value=\x229\x22> 9' + '</option>'
							      			+ '<option value=\x2210\x22> 10' + '</option>'
							      		+ '</select>'
							      		
							      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
							      	+ '</form>'
							      + '</div>'
							      + '<div class=\x22modal-footer\x22>'
							        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
							      + '</div>'
							    + '</div>'

							  + '</div>'
							+ '</div>';
						} // end of else
						$("#productlist").append(str);

					} // end of for
				}// if data length not 0
				else{
					str = '<p>Could not find matching products</p>';
					$("#productlist").append(str);
				}



			} // end of success function

		});
	}); // end of #all click function


	$("#searchbutton").click(function(){


		var name = document.getElementById("searcharg").value;

		$.ajax({
			type: 'get',
			url: 'php/shopsearch.php',
			data: {product:name},
			dataType: 'json',
			success: function(data){

				$("#productlist").empty();
				

				if (data.length != 0){

					for (var i=0;i<data.length;i=i+6){
						var modalid = data[i] + "modal";
						var medprice = parseFloat(data[i+3]);
						var smallprice = medprice*0.85;
						var largeprice = medprice*1.25;
						var str = "";

						if (data[i+2]=="pizza" || data[i+2]=="pasta"){
						str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
						'<img src=\x22' + data[i+5] + '\x22 />' +
						'<h2>$' + data[i+3] + '</h2>' +
						'<p>' + data[i+1] + '</p>' +
						'<p>Description: ' + data[i+4] + '</p>' +
						'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
						+ '</div>' + '</div>' + '</div>'

						+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
							  + '<div class=\x22modal-dialog\x22>'


							    + '<div class=\x22modal-content\x22>'
							      + '<div class=\x22modal-header\x22>'
							        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
							        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
							      + '</div>'
							      + '<div class=\x22modal-body\x22>'
							      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
							      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
							      		+ 'Size <select name=\x22size\x22>'
							      			+ '<option value=\x22' + smallprice.toFixed(2) + '\x22> Small $' + smallprice.toFixed(2) + '</option>'
							      			+ '<option value=\x22' + medprice.toFixed(2) + '\x22> Medium $' + medprice.toFixed(2) + '</option>'
							      			+ '<option value=\x22' + largeprice.toFixed(2) + '\x22> Large $' + largeprice.toFixed(2) + '</option>'
							      		+ '</select>'
							      		+ 'Quantity <select name=\x22quantity\x22>'
							      			+ '<option value=\x221\x22> 1' + '</option>'
							      			+ '<option value=\x222\x22> 2' + '</option>'
							      			+ '<option value=\x223\x22> 3' + '</option>'
							      			+ '<option value=\x224\x22> 4' + '</option>'
							      			+ '<option value=\x225\x22> 5' + '</option>'
							      			+ '<option value=\x226\x22> 6' + '</option>'
							      			+ '<option value=\x227\x22> 7' + '</option>'
							      			+ '<option value=\x228\x22> 8' + '</option>'
							      			+ '<option value=\x229\x22> 9' + '</option>'
							      			+ '<option value=\x2210\x22> 10' + '</option>'
							      		+ '</select>'
							      		
							      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
							      	+ '</form>'
							      + '</div>'
							      + '<div class=\x22modal-footer\x22>'
							        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
							      + '</div>'
							    + '</div>'

							  + '</div>'
							+ '</div>';
						}
						

						else{
						str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
						'<img src=\x22' + data[i+5] + '\x22 />' +
						'<h2>$' + data[i+3] + '</h2>' +
						'<p>' + data[i+1] + '</p>' +
						'<p>Description: ' + data[i+4] + '</p>' +
						'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
						+ '</div>' + '</div>' + '</div>'

						+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
							  + '<div class=\x22modal-dialog\x22>'


							    + '<div class=\x22modal-content\x22>'
							      + '<div class=\x22modal-header\x22>'
							        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
							        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
							      + '</div>'
							      + '<div class=\x22modal-body\x22>'
							      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
							      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
							      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
							      		+ 'Quantity <select name=\x22quantity\x22>'
							      			+ '<option value=\x221\x22> 1' + '</option>'
							      			+ '<option value=\x222\x22> 2' + '</option>'
							      			+ '<option value=\x223\x22> 3' + '</option>'
							      			+ '<option value=\x224\x22> 4' + '</option>'
							      			+ '<option value=\x225\x22> 5' + '</option>'
							      			+ '<option value=\x226\x22> 6' + '</option>'
							      			+ '<option value=\x227\x22> 7' + '</option>'
							      			+ '<option value=\x228\x22> 8' + '</option>'
							      			+ '<option value=\x229\x22> 9' + '</option>'
							      			+ '<option value=\x2210\x22> 10' + '</option>'
							      		+ '</select>'
							      		
							      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
							      	+ '</form>'
							      + '</div>'
							      + '<div class=\x22modal-footer\x22>'
							        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
							      + '</div>'
							    + '</div>'

							  + '</div>'
							+ '</div>';
						} // end of else
						$("#productlist").append(str);

					} // end of for
				}// if data length not 0
				else{
					str = '<p>Could not find matching products</p>';
					$("#productlist").append(str);
				}



			} // end of success function

		});

	});





	$("#pizza").click(function(){
		

		var categ = "pizza";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){


				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ 'Size <select name=\x22size\x22>'
						      			+ '<option value=\x22' + smallprice.toFixed(2) + '\x22> Small $' + smallprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + medprice.toFixed(2) + '\x22> Medium $' + medprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + largeprice.toFixed(2) + '\x22> Large $' + largeprice.toFixed(2) + '</option>'
						      		+ '</select>'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#pasta").click(function(){
		
		var categ = "pasta";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ 'Size <select name=\x22size\x22>'
						      			+ '<option value=\x22' + smallprice.toFixed(2) + '\x22> Small $' + smallprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + medprice.toFixed(2) + '\x22> Medium $' + medprice.toFixed(2) + '</option>'
						      			+ '<option value=\x22' + largeprice.toFixed(2) + '\x22> Large $' + largeprice.toFixed(2) + '</option>'
						      		+ '</select>'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#sandwich").click(function(){
		
		var categ = "sandwich";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#chicken").click(function(){
		
		var categ = "chicken";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#sidedish").click(function(){
		
		var categ = "side";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#drink").click(function(){
		
		var categ = "drink";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});

	$("#dessert").click(function(){
		
		var categ = "dessert";
		
		$.ajax({
			type: 'get',
			url: 'php/shop.php',
			data: {category:categ},
			dataType: 'json',
			success: function(data){
				
				$("#productlist").empty();
				
				
				for (var i=0;i<data.length;i=i+6){
					var modalid = data[i] + "modal";
					var medprice = parseFloat(data[i+3]);
					var smallprice = medprice*0.85;
					var largeprice = medprice*1.25;
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>$' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22\x22 class=\x22btn btn-default add-to-cart\x22 data-toggle=\x22modal\x22 data-target=\x22#' + modalid + '\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					+ '<div id=\x22' + modalid + '\x22 class=\x22modal fade\x22 role=\x22dialog\x22>'
						  + '<div class=\x22modal-dialog\x22>'


						    + '<div class=\x22modal-content\x22>'
						      + '<div class=\x22modal-header\x22>'
						        + '<button type=\x22button\x22 class=\x22close\x22 data-dismiss=\x22modal\x22>&times;</button>'
						        + '<h4 class=\x22modal-title\x22>' + data[i+1] + '</h4>'
						      + '</div>'
						      + '<div class=\x22modal-body\x22>'
						      	+ '<form action=\x22php/updatecart.php\x22 method=\x22POST\x22>'
						      		+ '<input type=\x22hidden\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
						      		+ '<input type=\x22hidden\x22 name=\x22size\x22 value=\x22' + medprice.toFixed(2) + '\x22><br />'
						      		+ 'Quantity <select name=\x22quantity\x22>'
						      			+ '<option value=\x221\x22> 1' + '</option>'
						      			+ '<option value=\x222\x22> 2' + '</option>'
						      			+ '<option value=\x223\x22> 3' + '</option>'
						      			+ '<option value=\x224\x22> 4' + '</option>'
						      			+ '<option value=\x225\x22> 5' + '</option>'
						      			+ '<option value=\x226\x22> 6' + '</option>'
						      			+ '<option value=\x227\x22> 7' + '</option>'
						      			+ '<option value=\x228\x22> 8' + '</option>'
						      			+ '<option value=\x229\x22> 9' + '</option>'
						      			+ '<option value=\x2210\x22> 10' + '</option>'
						      		+ '</select>'
						      		
						      		+ '<input type=\x22submit\x22 class=\x22btn btn-primary\x22 value=\x22Confirm\x22>'
						      	+ '</form>'
						      + '</div>'
						      + '<div class=\x22modal-footer\x22>'
						        + '<button type=\x22button\x22 class=\x22btn btn-default\x22 data-dismiss=\x22modal\x22>Close</button>'
						      + '</div>'
						    + '</div>'

						  + '</div>'
						+ '</div>';

					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});
	
	
});