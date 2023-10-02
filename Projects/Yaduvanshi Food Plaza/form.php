<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "kunalyaduvanshi@icloud.com"; // Replace with your own email address
    $subject = "New Contact Form Submission";
    $body = "Name: " . $name . "\n\nPhone: " . $email . "\n\nPhone: " . $email . "\n\nMessage: " . $message;

    if (mail($to, $subject, $body)) {
        echo "Thank you for contacting us!";
    } else {
        echo "There was a problem sending the email.";
    }
}
?>