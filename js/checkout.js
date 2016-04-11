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
		 		url: "http://localhost:8888/PapaDominos/php/login_validate.php",
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
                     	window.location.replace("http://localhost:8888/PapaDominos/checkout.html");
            		 }
            		 else{
            		 	console.log("Invalid email and pwd cmbination");
            		 }
                 }
		 	})
		}
	});

	function checkCookie() {

		var original_cookie= document.cookie;
		
		cookies_array = original_cookie.split(";");
		//console.log(cookies_array);

		if(cookies_array!="")
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