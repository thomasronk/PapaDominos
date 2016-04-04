$(document).ready(function(){
	
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
					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'


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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
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
					var str = '<p>Rank:' + data[i+2] + ' Name:' + data[i] + ' Gender:M</p>';


					var str = '<div class=\x22col-sm-4\x22>' + '<div class=\x22single-products\x22>' + '<div class=\x22productinfo text-center\x22>' + 
					'<img src=\x22' + data[i+5] + '\x22 />' +
					'<h2>' + data[i+3] + '</h2>' +
					'<p>' + data[i+1] + '</p>' +
					'<p>Description: ' + data[i+4] + '</p>' +
					'<a href=\x22#\x22 class=\x22btn btn-default add-to-cart\x22><i class=\x22fa fa-shopping-cart\x22></i>Add to cart</a>'
					+ '</div>' + '</div>' + '</div>'

					
					$("#productlist").append(str);
				}
				
			}
			
		
		
		});
		
		
	
	});
	
	
});