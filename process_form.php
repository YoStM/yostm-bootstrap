<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once "./vendor/phpmailer/phpmailer/src/Exception.php";
require_once "./vendor/phpmailer/phpmailer/src/PHPMailer.php";
require_once "./vendor/phpmailer/phpmailer/src/SMTP.php";

if (isset($_POST['submit'])) {
    // Get values from html form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Instanciate the email to be sent
    $mail = new PHPMailer(true);

    // configuration
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; // debug Info

    //SMTP Config
    $mail->isSMTP();
    $mail->Host = "yohan-saint-martin.fr";
    $mail->SMTPAuth = true;
    $mail->Port = 143;
    $mail->Username = "contact@yohan-saint-martin.fr";
    $mail->Password = "gibson333";

    // sender and receiver config
    $mail->From = "contact@yohan-saint-martin.fr";
    $mail->FromName = "YStM - website";
    $mail->addAddress("contact@yohan-saint-martin.fr");

    // email content
    $mail->isHTML(true);

    $mail->Subject = "message envoyé depuis mon site";

    $mail->Body = "
    <html>
        <body>
        <table style='width:600px;'>
        <tbody>
            <tr>
                <td style='width:150px'><strong>Name: </strong></td>
                <td style='width:400px'>$name</td>
            </tr>
            <tr>
                <td style='width:150px'><strong>Email ID: </strong></td>
                <td style='width:400px'>$email</td>
            </tr>
            <tr>
                <td style='width:150px'><strong>Mobile No: </strong></td>
                <td style='width:400px'>$mobile</td>
            </tr>
            <tr>
                <td style='width:150px'><strong>Message: </strong></td>
                <td style='width:400px'>$message</td>
            </tr>
        </tbody>
        </table>
        </body>
    </html>
    ";

    // Send Email
    if ($mail->send()) {
        header("Location: ./index.php");
        echo "<script>
        alert('Votre email a bien été envoyé à Yohan ! Merci.');
    </script>";
    } else {
        echo "<script>
            alert('Une erreur est survenue lors de l'envoi de votre email.<br />
            Merci de recommencer.');
        </script>";
    }
}
