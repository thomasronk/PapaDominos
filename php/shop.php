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

	$categ = $_GET['category'];
	
	
	// the table name is "babynames"
	$query = "SELECT * from PRODUCTS WHERE category = '$categ'";
	$rows = $connection->query($query);
	
	
	$info = array();
	
	foreach($rows as $row){
		$info[] = $row['id'];
		$info[] = $row['name'];
		$info[] = $row['category'];
		$info[] = $row['price'];
		$info[] = $row['description'];
		$info[] = $row['image'];
	}
	echo json_encode($info);
	
	
	
?>