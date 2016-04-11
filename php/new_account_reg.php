<?php

include_once 'db_connect.php';
$con = connect_db();

$email= $_POST['field_email'];
$pwd = $_POST['field_pwd'];
$full_name = $_POST['field_name'];
$phone=$_POST['field_phone'];

$street = $_POST['field_streetname'];
$apt_suite =$_POST['apt_suite'];
$aptNum = $_POST['field_aptnum'];
$city = $_POST['field_city'];
$state = $_POST['state'];
$zipcode = $_POST['field_zip'];
$card_number = "000";
$role="customer";

$apt_details = $apt_suite.' '.$aptNum;

try
{

	$sql = "INSERT INTO users_reg (email, hash, full_name, phone, street, apt_suite_num, city, state, zip, card, role) VALUES ('$email', '$pwd', '$full_name', '$phone', '$street', '$apt_details', '$city', '$state', '$zipcode', '$card_number', '$role')";
  	$con->exec($sql);
  	$success=1;
  	$message = "sucess";
}
catch ( PDOException $exception )
{
    $success=0;
    $message = $exception->errorInfo[1];
}
 
 //Send data back to js via json
 //echo json_encode($success);

 echo json_encode(array(
	 	"success"=>$success,
	 	"message"=>$message
	 	));

?>