<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->setFrom('order@ks2ks3.ru');
$mail->addAddress('design-mr@mail.ru');
$mail->Subject  = 'Сообщение с сайта http://ks2ks3.ru';


$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["mess"]);
$file = $_FILES['files']['tmp_name'];
$filename = $_FILES['files']['name'];
$filetype = $_FILES['files']['type'];
$filesize = $_FILES['files']['size'];

$mail->addAttachment($file, $filename, 'base64', $filetype);

$mail->Body     = "
Имя: {$name}, 
Email: {$email}, 
Сообщение: {$comment}
";
if(!$mail->send()) {
  echo 'Сообщение не было отправлено';
  echo 'Ошибка отправки: ' . $mail->ErrorInfo;
} else {
  echo 'Сообщение отправлено.';
}
?>