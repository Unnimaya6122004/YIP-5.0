<?php
// Database connection
$host = "localhost";
$username = "root";
$password = "";
$dbname = "user_medical_info";

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user data from the form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$emergency_contact_name = $_POST['emergency_contact_name'];
$relationship = $_POST['relationship'];
$emergency_contact_number = $_POST['emergency_contact_number'];

// Insert user data into the users table
$sql = "INSERT INTO users (first_name, last_name, emergency_contact_name, relationship, emergency_contact_number)
        VALUES ('$first_name', '$last_name', '$emergency_contact_name', '$relationship', '$emergency_contact_number')";

if ($conn->query($sql) === TRUE) {
    // Get the last inserted user_id
    $user_id = $conn->insert_id;

    // Get medical details from the form
    $medications = $_POST['medications'];
    $allergies = $_POST['allergies'];
    $chronic_conditions = $_POST['chronic_conditions'];
    $surgeries = $_POST['surgeries'];
    $immunizations = $_POST['immunizations'];
    $health_conditions = $_POST['health_conditions'];
    $family_doctor = $_POST['family_doctor'];
    $doctor_contact = $_POST['doctor_contact'];
    $preferred_hospital = $_POST['preferred_hospital'];

    // Insert medical details into the medical_details table
    $sql_medical = "INSERT INTO medical_details (user_id, medications, allergies, chronic_conditions, surgeries, immunizations, health_conditions, family_doctor, doctor_contact, preferred_hospital)
                    VALUES ('$user_id', '$medications', '$allergies', '$chronic_conditions', '$surgeries', '$immunizations', '$health_conditions', '$family_doctor', '$doctor_contact', '$preferred_hospital')";

    if ($conn->query($sql_medical) === TRUE) {
        echo "User and medical information saved successfully!";
    } else {
        echo "Error: " . $sql_medical . "<br>" . $conn->error;
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>

