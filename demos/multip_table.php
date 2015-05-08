<!DOCTYPE html>

<head>

	<meta charset="utf-8">

	<style type="text/css">
		body {
			font-family: Asana Math;
			background-color: #FAFAFA;
		}

		table {
			border-spacing: 0;
			margin: 0 auto;
			margin-top: 5%;
		}

		td {
			padding: 0.7em;
			border: solid 1px rgba(0, 0, 0, 0.07);
			box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05);
			min-width: 3.5em;
			color: #6b6b6b;
			text-align: center;
			vertical-align: middle;
		}

		tr {
			background-color: rgba(255, 255, 255, 0);
			transition: all 0.1s ease-in-out;
		}

		tr:hover {
			background-color: rgba(0, 0, 0, 0.015);
		}

		tr:nth-child(even) {
			background-color: rgba(0, 0, 0, 0.03);
		}

		tr:nth-child(even):hover {
			background-color: rgba(0, 0, 0, 0.04);
		}
	</style>

</head>

<html>

<table>
<?php

for ($i = 1; $i < 10; $i++) {
	echo '<tr>';
	for ($j = 1; $j <= $i; $j++) {
		echo '<td>';
		echo $i . ' * ' . $j . ' = ' . $i*$j . ' ';
		echo '</td>';
	}

	echo '</tr>';
}

?>
</table>

</html>