<?php
// The message
$message = "This is a test message";

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
mail('alexrafteremail@gmail.com', 'My Subject', $message);
?>
