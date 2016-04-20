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

	$name = $_GET['product'];
	
	
	// the table name is "babynames"
	if ($name == '*'){
		$query = "SELECT * from PRODUCTS";
	}
	else{
		$query = "SELECT * from PRODUCTS WHERE UPPER(name) LIKE UPPER('%{$name}%')";
	}
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