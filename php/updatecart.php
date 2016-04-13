<?php
session_start(); 
$quantity = $_POST['quantity'];
if(isset($_SESSION['quantity']))
{
 //   $i = $_SESSION['counter'] ;
//    $i += 1;
    
    echo $_POST['name'];
     echo $_POST['size'];
     echo $_POST['quantity'];
    
  /*  echo "set";
    echo $i;
    $_SESSION['counter'] = $i;
    echo $_POST['size'];
    echo $_POST['pasta'] ;*/
    
    
 /*   if(($_SESSION['quantity'])>1)
    {
        
    }
    
    
   if(isset($_POST['type']))
   {
       
   }
    else if(isset($_SESSION['pasta']))
    {
        
    }
    else if(isset($_SESSION['chocolate']))
    {
        
    }
    else
    {
        
    } */
}
else
{
    $_SESSION['quantity'] = $quantity;
    $_SESSION['counter'] = 1;
  /*  echo "not set" ;*/
}

//header('Location: http://localhost/papaDominos/menu.php?msg=Item added to cart');
?>