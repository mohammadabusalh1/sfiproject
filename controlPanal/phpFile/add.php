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

$sql = $_POST["sqlAdd"];


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo $conn->error;
  }

?>
