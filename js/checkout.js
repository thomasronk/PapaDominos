$(document).ready(function(){
	var dummy=0;

	checkCookie();

	$("#delivery").click(function(){
		console.log("delivery radio button");
		if(dummy){
			$("#delivery_address").collapse('show');
			$("#carryout_address").collapse('hide');
		}
		else
		{
			$("#delivery_address").collapse('show');
			dummy++;
		}

	});

	$("#carryout").click(function(){
		console.log("carryout radio button");
		if(dummy){
			$("#carryout_address").collapse('show');
			$("#delivery_address").collapse('hide');
		}	
		else{
			$("#carryout_address").collapse('show');
			dummy++;
		}
	});

	$("#login_modal").click(function(){
		if(  ($("#email").val().length!=0)&&($("#pwd").val().length!=0)){
			//console.log("both values are not null");
			var email=$("#email").val();
			var pwd=$("#pwd").val();
			var dataString = 'email=' + email + '&pwd=' +pwd;
			console.log("Values passed are "+email +pwd);
			  $.ajax({
		 		type: "POST",
		 		url: "php/login_validate.php",
		 		data: dataString,
		 		dataType : "json",
		 		success: function(data){

                     console.log(data);
                     if(data.success==1){
                     	var username = data.username;
                     	var fullname = data.fullname;
                     	var phone = data.phone;
                     	var street = data.street;
                     	var apt = data.apt;
                     	var city = data.city;
                     	var state = data.state;
                     	var zip = data.zip;

                     	//Cookies.set('username', 'ron');
                     	document.cookie = "username="+username;
                     	document.cookie = "fullname="+fullname;
                     	document.cookie = "phone="+phone;
                     	document.cookie = "street="+street;
                     	document.cookie = "apt="+apt;
                     	document.cookie = "city="+city;
                     	document.cookie = "state="+state;
                     	document.cookie = "zip="+zip;
                     	window.location.replace("checkout.html");
            		 }
            		 else{
            		 	console.log("Invalid email and pwd cmbination");
            		 }
                 }
		 	})
		}
	});

	jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
	    phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || phone_number.length > 9 &&
			phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	}, "Please specify a valid phone number");


	$("#acc-checkoutForm").validate({
		rules:{
			full_name_display:{
				required:true
			},
			email_display:{
				required:true,
				email:true
			},
			phone_display:{
				required:true,
				phoneUS:true
			},
			field_streetname:{
				required:true
			},
			field_aptnum:{
				required:true
			},
			field_city:{
				required:true
			},
			field_zip:{
				required:true
			},
			card_no:{
				required:true
			},
			security_code:{
				required:true
			},
			name_card:{
				required:true
			},
			zip_card:{
				required:true
			}
		},
		messages:{
			field_confirm_email:{
				equalTo:"Emails do not match"
			}
		},
		submitHandler: function(form) {
				//if(document.cookie!=""){
 			if(cook_array[0]=="username"){
			//console.log("cookie not empty");
 				dataString = 'userid=' + cook_array[1];
 			//console.log(dataString);
 				$.ajax({
 					type: "GET",
 			 		url: "php/order_cart_insert.php",
 			 		data: dataString,
 			 		dataType : "json",
 				 	success: function(data){
 				 		console.log("inside success function"+data); 
 				 		window.location.replace("order_complete.html");    
 	        		} 
 				});
			}
			else{
				console.log("cookie empty");
				window.location.replace("order_complete.html");
			}
 		 }
	});


	function checkCookie() {

		var original_cookie= document.cookie;
		
		cookies_array = original_cookie.split(";");
		console.log(cookies_array);

		cook_array = cookies_array[0].split("=")
		console.log(cook_array[1] + " " + cook_array[0]);

		if(cook_array[0]=="username")
		{

			$("#member_login").hide();

			var email = cookies_array[0].split("=");
			console.log(email[1]);
			$("#email_display").val(email[1]);

			var fullname = cookies_array[1].split("=");
			console.log(fullname[1]);
			$("#full_name_display").val(fullname[1]);

			var phone = cookies_array[2].split("=");
			console.log(phone[1]);
			$("#phone_display").val(phone[1]);

			$("#delivery_address").collapse('show');
			
			var street = cookies_array[3].split("=");
			console.log(street);
			$("#field_streetname").val(street[1]);

			var apt = cookies_array[4].split("=");
			console.log(apt);
			$("#field_aptnum").val(apt[1]);

			var city = cookies_array[5].split("=");
			console.log(city);
			$("#field_city").val(city[1]);

			var state = cookies_array[6].split("=");
			console.log(state);
			$("#state").val(state[1]);

			var zip = cookies_array[7].split("=");
			console.log(zip);
			$("#field_zip").val(zip[1]);

			
		}
		else
		{
			console.log("No Cookie found");
		}
	}


});