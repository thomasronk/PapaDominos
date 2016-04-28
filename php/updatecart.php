<?php
session_start(); 

if(isset($_SESSION['cart']))
{
   
   
    $items= array($_POST['name'],$_POST['quantity'],$_POST['size']);
    array_push($_SESSION['cart'],$items);
   
    $_SESSION['counter'] += 1;  
       
    echo  $_SESSION['counter'] ;
}
else
{
   $items= array($_POST['name'],$_POST['quantity'],$_POST['size']);
   $_SESSION['cart']=array($items);
   
   $_SESSION['counter'] = 1;
    
}

foreach ($_SESSION['cart'] as $item) {
      echo $item[0];
      echo $item[1];
      echo $item[2];
}


header('Location: ../shop.php');
?>