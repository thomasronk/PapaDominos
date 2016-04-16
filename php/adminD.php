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

	
	// the table name is "babynames"
	$query = "DELETE FROM PRODUCTS WHERE id = '$id'";
	
	try{
	$connection->exec($query);
	    echo "Record deleted successfully";
	    }
	catch(PDOException $e)
	    {
	    echo $query . "<br>" . $e->getMessage();
	    }

	$connection = null;
	

	header('Location: ../admin.html');
	
	
?>