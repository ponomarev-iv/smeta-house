<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

$email = trim($_POST["email"]);

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->setFrom('order@ks2ks3.ru');
$mail->addAddress($email);
$mail->Subject  = 'Сообщение с сайта ks2ks3.ru';


$mail->Body     = "
Спасибо за обращение в нашу компанию. Наши специалисты свяжутся с Вами в течение 30 минут.
";
if(!$mail->send()) {
  echo 'Сообщение не было отправлено';
  echo 'Ошибка отправки: ' . $mail->ErrorInfo;
} else {
  echo 'Сообщение отправлено.';
}
?>