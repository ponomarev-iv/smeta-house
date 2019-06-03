<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->setFrom('order@ks2ks3.ru');
$mail->addAddress('info@ks2ks3.ru');
$mail->Subject  = 'Сообщение с сайта http://ks2ks3.ru';


$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["mess"]);
$file = $_FILES['files']['tmp_name'];
$filetype = $_FILES['files']['type'];
$filesize = $_FILES['files']['size'];

if (array_key_exists('files', $_FILES)){
	for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['files']['name'][$ct]));
        $filename = $_FILES['files']['name'][$ct];
        if (move_uploaded_file($_FILES['files']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
}

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