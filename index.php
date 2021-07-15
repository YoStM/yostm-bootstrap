<?php
if (isset($_POST['submit'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);


    $recipient = "contact@yohan-saint-martin.fr"; //recipient
    $mail_body = $message; //mail body
    $subject = "YSTM - Nouveau message"; //subject
    $header = "From: " . $name . " <" . $email . ">\r\n"; //optional headerfields

    mail($recipient, $subject, $mail_body, $header); //mail command :)
}
include_once("index.html");
