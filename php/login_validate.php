<?php

include_once 'db_connect.php';

$con = connect_db();

$email= $_POST['email'];
$pwd = $_POST['pwd'];

$sql= "SELECT hash,full_name FROM users_reg WHERE email = '$email'";
$stmt = $con->query($sql); 
$row =$stmt->fetchObject();

//echo $row->hash;

if ($pwd==$row->hash){
	$success=1;
	$fullname = $row->full_name;
	//setcookie('username', $_POST['username'], false);
    //setcookie('password', md5($_POST['password']), false);
    //header('Location:test.php');
}
else{
	$success=0;
	//echo "Invalid Username and pwd!";

}
	 //echo json_encode($success);

	 echo json_encode(array(
	 	"success"=>$success,
	 	"username"=>$fullname
	 	));

?>