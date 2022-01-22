<?php

// Check form submission and then mail the form data
if (isset($_POST['submit'])) {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
}

?>