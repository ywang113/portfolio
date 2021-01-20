<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
require './PHPMailer/src/Exception.php';
$mail = new PHPMailer(true);
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

echo $message;
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';  
    echo !extension_loaded('openssl')?"Not Available":"Available";                  // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'MailBotAtlas@gmail.com';                     // SMTP username
    $mail->Password   = 'wyf940517';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('from@example.com', $email );
    $mail->addAddress('glariewang@gmail.com');     // Add a recipient
    // chickennmeat@robboscm.com.au
    // Attachment

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = " {$name} has send you an email";
    $mail->Body    = "<h4> {$message} </h4>  <p> Subject: {$subejct} </p>"  ;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $message = "Message has been sent, we will reply you asap";
    echo "<script> alert('$message');</script>";
} catch (Exception $e) {
    
    echo "Message could not be sent due to unknown error, please check your email address, or you can ring us directly";
}
?>
<!--  -->