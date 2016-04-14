$(document).ready(function(){
	$(".isa_error").hide();

	$("#acc-loginForm").validate({
		rules:{
			email:{
				required:true,
				email:true
			},
			pwd:{
				required:true
			}
		},
		 submitHandler: function(form) {
     		  $.ajax({
		 		type: $(form).attr("method"),
		 		url: $(form).attr("action"),
		 		data: $(form).serialize(),
		 		dataType : "json",
		 		success: function(data){
                     console.log(data);
                     if(data.success==1){
                     	console.log(data.success);
                     	var username = data.username;
                     	var fullname = data.fullname;
                     	var phone = data.phone;
                     	var street = data.street;
                     	var apt = data.apt;
                     	var city = data.city;
                     	var state = data.state;
                     	var zip = data.zip;
                     	
                     	document.cookie = "username="+username;
                     	document.cookie = "fullname="+fullname;
                     	document.cookie = "phone="+phone;
                     	document.cookie = "street="+street;
                     	document.cookie = "apt="+apt;
                     	document.cookie = "city="+city;
                     	document.cookie = "state="+state;
                     	document.cookie = "zip="+zip;
                     	window.location.replace("/PapaDominos/index.html");
                     	//console.log(document.cookie); 
            		 }
            		 else{
            		 	console.log("Invalid email and pwd cmbination");
            		 	$(".isa_error").show();
            		 }
                 }
		 	})
 	 	 }
	});

});