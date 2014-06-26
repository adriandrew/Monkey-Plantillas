<?php 

header('Content-type: application/json; charset=utf-8');
header("acces-control-allow-origin: *");

$listado[0] = "12.5";
$listado[1] = "13.2";
$listado[2] = "12.1";

$datosJSON = json_encode(array('precioDiesel' => "12.5", 'precioMagna' => "13.5"));

$listado = array();



echo isset($_GET['callback'])
		? "{$_GET['callback']}($datosJSON)"
		: $datosJSON;
		
?>