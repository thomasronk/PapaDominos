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
                     	console.log("username is"+username);
                     	//Cookies.set('username', 'ron');
                     	document.cookie = "username="+username;
                     	window.location.replace("http://localhost:8888/PapaDominos/index.html");
            		 }
            		 else{
            		 	console.log("Invalid email and pwd cmbination");
            		 }
                 }
		 	})
 	 	 }
	});

});