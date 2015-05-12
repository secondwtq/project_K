<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Fundamental HTML</title>

	<!-- <script src="Foundation.js"></script> -->
</head>

<body>

	<?php
		$db = new mysqli('localhost', '@localhost', "", "test") or die("Failed to connect server!");
		$db->query("set character set 'utf8'");
        $db->query("set names 'utf8'");
		$result = $db->query("select * from test_table");
		while ($rec = $result->fetch_array(MYSQLI_ASSOC)) {
			echo "id: " . $rec['id']; echo ' ';
			echo "name: " . $rec['name'];
		}
		$result->close();
		$db->close();
	?>

</body>

</html>