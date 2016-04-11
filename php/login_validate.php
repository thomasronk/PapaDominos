<?php

include_once 'db_connect.php';

$con = connect_db();

$email= $_POST['email'];
$pwd = $_POST['pwd'];

$sql= "SELECT hash,full_name,email,phone,street,apt_suite_num,city,state,zip FROM users_reg WHERE email = '$email'";
$stmt = $con->query($sql); 
$row =$stmt->fetchObject();

//echo $row->hash;

if ($pwd==$row->hash){
	$success=1;
	$username=$row->email;
	$fullname = $row->full_name;
	$phone = $row->phone;
	$street = $row->street;
	$apt=$row->apt_suite_num;
	$city=$row->city;
	$state = $row->state;
	$zip = $row->zip;
}
else{
	$success=0;

}
	 //echo json_encode($success);

	 echo json_encode(array(
	 	"success"=>$success,
	 	"username"=>$username,
	 	"fullname"=>$fullname,
	 	"phone"=>$phone,
	 	"street"=>$street,
	 	"apt"=>$apt,
	 	"city"=>$city,
	 	"state"=>$state,
	 	"zip"=>$zip
	 	));

?>