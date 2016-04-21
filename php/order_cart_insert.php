<?php
session_start();

include_once 'db_connect.php';
$con = connect_db();


$userid = $_GET['userid'];	//This is the user ID from the cookie
$date = date("Y/m/d");

try
{
    
    if(isset($_SESSION['cart']))
             {   
                foreach ($_SESSION['cart'] as $item) 
                     {
                         
                    $price = $item[1]*$item[2];
                    $sql = "INSERT INTO order_history (UserID, DateofOrder, ItemName, Qty, Price) VALUES ('$userid', '$date', '$item[0]', '$item[1]', '$price')";
  	                $con->exec($sql);
                    $success=1;
  	                $message = "success";
                            
                     }
                   
        unset($_SESSION['cart']);
              }
                       
}
catch ( PDOException $exception )
{
    $success=0;
    $message = $exception->errorInfo[1];
}


echo json_encode(array(
	 	"success"=>$success,
	 	"message"=>$message
	 	));

?>