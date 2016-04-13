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
		window.location.replace("http://localhost:8888/PapaDominos/index.html");

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
						      	+ '<form>'
						      		+ '<select name=\x22sizes\x22>'
						      			+ '<option value=\x22small\x22> Small $' + smallprice.toFixed(2)
						      			+ '<option value=\x22small\x22> Medium $' + medprice.toFixed(2)
						      			+ '<option value=\x22small\x22> Large $' + largeprice.toFixed(2)
						      		+ '</select>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ '<select name=\x22sizes\x22>'
						      			+ '<option value=\x22small\x22> Small $' + smallprice.toFixed(2)
						      			+ '<option value=\x22small\x22> Medium $' + medprice.toFixed(2)
						      			+ '<option value=\x22small\x22> Large $' + largeprice.toFixed(2)
						      		+ '</select>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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
						      	+ '<form>'
						      		+ 'Quantity:<input type=\x22text\x22 name=\x22quantity\x22><br>'
						      		+ '<input type=\x22submit\x22 value=\x22Confirm\x22>'
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