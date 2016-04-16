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

	$query = "INSERT INTO PRODUCTS (id, name, category, price, description, image) VALUES ('$id','$name','$category','$price','$description','$image')";

	try{
	$connection->exec($query);
	    echo "Record entered successfully";
	    }
	catch(PDOException $e)
	    {
	    echo $query . "<br>" . $e->getMessage();
	    }

	$connection = null;
	
	header('Location: ../admin.html');

?>