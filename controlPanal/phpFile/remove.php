<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sfi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = trim($_POST["id"]);
$table = trim($_POST["table"]);
$feild = trim($_POST["feild"]);

$sql = "DELETE FROM `".$table."` WHERE `".$feild."` = '".$id."'";

$conn->query($sql);

if ($conn->query($sql) === TRUE) {
  echo "remove successfully";
} else {
  echo $conn->error;
}

?>