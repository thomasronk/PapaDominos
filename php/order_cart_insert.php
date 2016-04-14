<?php

include_once 'db_connect.php';
$con = connect_db();


$userid = $_GET['userid'];	//This is the user ID from the cookie

echo json_encode($userid);


?>