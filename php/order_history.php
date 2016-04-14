<?php

include_once 'db_connect.php';
$con = connect_db();

//$userid= "ron@ron.com";
$userid = $_GET['userid'];

$sql= "SELECT DateofOrder,ItemName,Qty,Price FROM order_history WHERE UserID = '$userid'";
$stmt = $con->query($sql); 
//$row =$stmt->fetchObject();

while($row = $stmt->fetchObject())
{
	$rows[] = $row;
}
echo json_encode($rows);

?>