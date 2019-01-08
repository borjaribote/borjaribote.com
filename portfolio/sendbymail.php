
<?php
require_once "Mail.php";
$nombre = $_POST['name'];
$correo = $_POST['email'];
$body =  $_POST['message'];
$message = "De: ".$nombre."\r\n"."\r\n"."Correo: ".$correo."\r\n"."\r\n".$body;
$to = "Borja Ribote <borjaribote@gmail.com>";
$from = "correo@borjaribote.com";
$subject = "Correo Pagina web!";


$host = "ssl://secureuk57.sgcpanel.com";
$port = "465";
$username = "correo@borjaribote.com";
$password = "45752615a"; 
$headers = array ('From' => $from,
'To' => $to,
'Subject' => $subject);
$smtp = Mail::factory('smtp',
array ('host' => $host,
'port' => $port,
'auth' => true,
'username' => $username,
'password' => $password));
$mail = $smtp->send($to, $headers, $message);/*
if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
} else {
echo("<p>Message successfully sent!</p>");
}*/
?>