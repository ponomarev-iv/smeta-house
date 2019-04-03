<?php

$frm_name  = "Сообщение с сайта http://smetahouse.com/";
$recepient = "design-mr@mail.ru";
$sitename  = "smetahouse";
$subject   = "Сообщение с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["mess"]);
$files = trim($_POST["file"]);


$message = "
Имя: $name <br>
E-mail: $email <br>
Сообщение: $comment
$files
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
