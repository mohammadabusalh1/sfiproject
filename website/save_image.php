<?php

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sfi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn -> set_charset("utf8");
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the binary data from the AJAX request
$data = $_POST['image_data'];
$name = $_POST['name'];

// Prepare the SQL statement
$sql = "INSERT INTO `attachments`(`attachment`, `activity_name`) VALUES ('" . $data . "', '" . $name . "')";

// Execute the statement
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo $conn->error;
  }

  ?>