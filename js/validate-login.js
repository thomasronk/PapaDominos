$(document).ready(function(){

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
                     	var username = data.username;
                     	var fullname = data.fullname;
                     	var phone = data.phone;
                     	//Cookies.set('username', 'ron');
                     	document.cookie = "username="+username;
                     	document.cookie = "fullname="+fullname;
                     	document.cookie = "phone="+phone;
                     	window.location.replace("http://localhost:8888/PapaDominos/index.html");
                     	//console.log(document.cookie);
            		 }
            		 else{
            		 	console.log("Invalid email and pwd cmbination");
            		 }
                 }
		 	})
 	 	 }
	});

});