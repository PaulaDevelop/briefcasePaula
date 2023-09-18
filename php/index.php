<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$para = $email;
$titulo = 'mensaje de la web';
$header = 'Form: ' $email;
$msjCorreo = "Nombre $nombre\n E-mail $email\n Mensaje: $mensaje\n";

?>