<?php 

header('Content-type: application/json; charset=utf-8');
header("acces-control-allow-origin: *");

$datosJSON = json_encode(array('precioDiesel' => "12.5", 'precioMagna' => "13.5"));

echo isset($_GET['callback'])
		? "{$_GET['callback']}($datosJSON)"
		: $datosJSON;
		
?>