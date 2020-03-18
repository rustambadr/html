<?php
  if( !count($_POST) )
    die('err');

  $emailTo = "dr.badridinoff@ya.ru";


  $response = "Телефон: <b>".$_POST['phone']."</b><br>";
  $response .= "Сообщение: <b>".$_POST['message']."</b><br>";

  $subject = 'Заявка';
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=utf-8\r\n";

  mail($emailTo, $subject, $response, $headers);
?>
