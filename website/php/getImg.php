<?php

if (isset($_POST["activityName"])) {
    $activityName = $_POST["activityName"];
    $conn = mysqli_connect("localhost", "root", "", "sfi");
    $conn->set_charset("utf8");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql = "SELECT `attachment` FROM `attachments` WHERE `activity_name`='" . $activityName . "'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $img = $row["attachment"];
        echo $img;
    } else {
        echo "Image not found";
    }
    mysqli_close($conn);
}
