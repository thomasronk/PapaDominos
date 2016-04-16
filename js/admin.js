$(document).ready(function(){


	$.ajax({
		type: 'post',
		url: 'php/admin.php',
		data: {arg:''},
		dataType: 'json',
		success: function(data){
			$("#menu").empty();



			var str = "<table>";
			
			for (var i=0; i<data.length; i=i+6){
				str = str + "<tr><td><form action=\x22php/adminE.php\x22 method=\x22POST\x22>"
				+ 'ID: <input type=\x22text\x22 name=\x22id\x22 value=\x22' + data[i] + '\x22 readonly><br />'
				+ 'Name: <input type=\x22text\x22 name=\x22name\x22 value=\x22' + data[i+1] + '\x22><br />'
				+ 'Category: <select name=\x22category\x22>';
					if (data[i+2]=="pizza"){
						str = str + '<option value = \x22pizza\x22 selected=\x22selected\x22> Pizza</option>';
					}
					else{
						str = str + '<option value = \x22pizza\x22> Pizza</option>';
					}
					if (data[i+2]=="pasta"){
						str = str + '<option value = \x22pasta\x22 selected=\x22selected\x22> Pasta</option>';
					}
					else{
						str = str + '<option value = \x22pasta\x22> Pasta</option>';
					}
					if (data[i+2]=="sandwich"){
						str = str + '<option value = \x22sandwich\x22 selected=\x22selected\x22> Oven Baked Sandwiches</option>';
					}
					else{
						str = str + '<option value = \x22sandwich\x22> Oven Baked Sandwiches</option>';
					}
					if (data[i+2]=="chicken"){
						str = str + '<option value = \x22chicken\x22 selected=\x22selected\x22> Chicken</option>';
					}
					else{
						str = str + '<option value = \x22chicken\x22> Chicken</option>';
					}
					if (data[i+2]=="side"){
						str = str + '<option value = \x22side\x22 selected=\x22selected\x22> Sides</option>';
					}
					else{
						str = str + '<option value = \x22side\x22> Sides</option>';
					}
					if (data[i+2]=="drink"){
						str = str + '<option value = \x22drink\x22 selected=\x22selected\x22> Drinks</option>';
					}
					else{
						str = str + '<option value = \x22drink\x22> Drinks</option>';
					}
					if (data[i+2]=="dessert"){
						str = str + '<option value = \x22dessert\x22 selected=\x22selected\x22> Desserts</option>';
					}
					else{
						str = str + '<option value = \x22dessert\x22> Desserts</option>';
					}
				str = str + '</select><br />'

				str = str + 'Price: <input type=\x22text\x22 name=\x22price\x22 value=\x22' + data[i+3] + '\x22><br />'
				+ 'Description: <input type=\x22text\x22 name=\x22description\x22 value=\x22' + data[i+4] + '\x22><br />'
				+ 'Image path: <input type=\x22text\x22 name=\x22image\x22 value=\x22' + data[i+5] + '\x22><br />'
				+ '<img src=\x22' + data[i+5] + '\x22 /><br />'
				+ '<input type=\x22submit\x22 value=\x22Update\x22 name=\x22submit\x22>'
				+ '</form></td>'


				+ "<td><form action=\x22php/adminD.php\x22 method=\x22POST\x22>"
				+ '<input type=\x22hidden\x22 name=\x22id\x22 value=\x22' + data[i] + '\x22>'
				+ '<input type=\x22submit\x22 value=\x22Delete item\x22>'
				+ "</form></td></tr>"
				+ "<br />"
			}

			str = str + "</table>";

			$("#menu").append(str);



		}

	});
	
	
	
});