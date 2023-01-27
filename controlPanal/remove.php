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

$id = $_GET["id"];
$table = $_GET["table"];
$prePage = $_GET["prePage"];

$sql = "DELETE FROM `".$table."` WHERE `id` = '".$id."'";

$conn->query($sql);
header("Location: $prePage");

?>