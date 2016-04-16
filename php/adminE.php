<?php
	$dbName = "test";
	try{
		$connection = new PDO("mysql:dbname=".$dbName);
		$connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $ex) {
		echo "<p>Error in connection to mysql database.</p>";
		exit;		
	}

	$id = $_POST['id'];
	$name = $_POST['name'];
	$category = $_POST['category'];
	$price = $_POST['price'];
	$description = $_POST['description'];
	$image = $_POST['image'];

	$query = "UPDATE PRODUCTS SET name = '$name', category = '$category', price = '$price', description = '$description', image = '$image' WHERE id='$id'";

	try{
	$connection->exec($query);
	    echo "Record updated successfully";
	    }
	catch(PDOException $e)
	    {
	    echo $query . "<br>" . $e->getMessage();
	    }

	$connection = null;
	
	header('Location: ../admin.html');

?>