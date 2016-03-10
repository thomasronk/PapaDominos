/*$(document).ready(function(){
	
	$("#field_email").after('<span id="field_emailSpan" style="display:none">OK</span>');
	$("#field_confirm_email").after('<span id="field_emailconfirmSpan" style="display:none">OK</span>');
	$("#field_confirm_pwd").after('<span id="field_pwdconfirmSpan" style="display:none">OK</span>');
	
	
	
	$("#field_email").focus(function(){
		$("#field_emailSpan").hide();
	});
	
	$("#field_confirm_email").focus(function(){
		$("#field_emailconfirmSpan").hide();
	});
	
	$("#field_confirm_pwd").focus(function(){
		$("#field_pwdconfirmSpan").hide();
	});
	
	
	
	
	$("#field_email").blur(function(){
		var emailid = $("#field_email").val();
		var find = "@";
		if(emailid.length==0){
			//TOdo Validate null string
		}
		if(emailid.indexOf(find)>-1)
		{
			$("#field_emailSpan").show();
			$("#field_emailSpan").text("OK");
		}
		else
		{
			$("#field_emailSpan").text("Warning!. That doesnt look like a valid email address!");
			$("#field_emailSpan").show();
		}
	});
	
	$("#field_confirm_email").blur(function(){
		
		if($.trim($('#field_email').val()) == $.trim($('#field_confirm_email').val()) && $('#field_confirm_email').val().length > 0){
			$("#field_emailconfirmSpan").show();
			$("#field_emailconfirmSpan").text("OK");
		}
		else{
			$("#field_emailconfirmSpan").text("Warning!. The Email addresses dont match");
			$("#field_emailconfirmSpan").show();
		}
	});
	
	$("#field_confirm_pwd").blur(function(){	
		console.log("Pwd coinfirm blur called");
		if($.trim($('#field_pwd').val()) == $.trim($('#field_confirm_pwd').val()) && $('#field_confirm_pwd').val().length > 0){
			$("#field_pwdconfirmSpan").show();
			$("#field_pwdconfirmSpan").text("OK");
		}
		else{
			$("#field_pwdconfirmSpan").text("Warning!. The passwords dont match");
			$("#field_pwdconfirmSpan").show();
		}
	});
	

	
});*/

$(document).ready(function(){
	
	jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, ""); 
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
	
	$("#acc-regForm").validate({
		rules:{
			field_email:{
				required:true,
				email:true
			},
			field_confirm_email:{
				required:true,
				email:true,
				equalTo:"#field_email"
			},
			field_pwd:{
				required:true
			},
			field_confirm_pwd:{
				required:true,
				equalTo:"#field_pwd"
			},
			field_phone:{
				required:true,
				phoneUS:true
			},
			agreement:{
				required:true
			}
		},
		messages:{
			field_confirm_email:{
				equalTo:"Emails do not match"
			}
		}
	});
	
	
});