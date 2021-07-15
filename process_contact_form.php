<?php
if (isset($_POST['name']) and isset($_POST['email']) and isset($_POST['message'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);


    $recipient = "contact@yohan-saint-martin.fr"; //recipient
    $mail_body = $message; //mail body
    $subject = "YSTM - Nouveau message"; //subject
    $header = "From: " . $name . " <" . $email . ">\r\n"; //optional headerfields

    if (mail($recipient, $subject, $mail_body, $header)) {
        echo "<script>
            alert('Votre message à bien &eacute;t&eacute; envoy&eacute;.')
        </script>";
    } else {
        echo "<script>
            alert('Une erreur s\'est produite lors de l'envoie du message.')
        </script>";
    }
    header("Location: ./index.php");
}
