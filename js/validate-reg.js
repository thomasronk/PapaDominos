$(document).ready(function(){
	
	$("#reset").after('<span id="successfulSpan" class="successfulSpan" style="display:none">Successfully added record!</span>');
	$("#reset").after('<span id="errorSpan" class="errorSpan" style="display:none">Error adding record!</span>');

	$("#reset").click(function(){
		$("#successfulSpan").hide();
		$("#errorSpan").hide();
	});

	$('#field_pwd').keyup(function() {
    	var pswd = $(this).val();
    	var isComplex = 1;

    	if ( pswd.length < 8 ) {
	    	$('#length').removeClass('valid').addClass('invalid');
	    	isComplex = 0;
		} else {
	   	 	$('#length').removeClass('invalid').addClass('valid');
	   	 	isComplex = 1;
		}

		if ( pswd.match(/[A-z]/) ) {
		    $('#letter').removeClass('invalid').addClass('valid');
		    isComplex = 1;
		} else {
		    $('#letter').removeClass('valid').addClass('invalid');
		    isComplex = 0;
		}

		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
		    $('#capital').removeClass('invalid').addClass('valid');
		    isComplex = 1;
		} else {
		    $('#capital').removeClass('valid').addClass('invalid');
		    isComplex = 0;
		}

		//validate number
		if ( pswd.match(/\d/) ) {
		    $('#number').removeClass('invalid').addClass('valid');
		    isComplex = 1;
		} else {
		    $('#number').removeClass('valid').addClass('invalid');
		    isComplex = 0;
		}

	}).focus(function() {
    	$('#pswd_info').show();
	}).blur(function() {
    	$('#pswd_info').hide();
	});

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
		},

		submitHandler: function(form) {
    		  $.ajax({
				type: $(form).attr("method"),
				url: $(form).attr("action"),
				data: $(form).serialize(),
				dataType : "json",
				success: function(data){
                    if(data=="1"){
                    	$("#successfulSpan").show();
                    }
                    else{
                    	$("#errorSpan").show();
                    }
                }
			})

 		 }
	});
		
});