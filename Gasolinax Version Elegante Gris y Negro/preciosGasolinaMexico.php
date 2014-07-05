<?php 

header('Content-type: application/json; charset=utf-8');

//header("access-control-allow-origin: *");

$listadoPrecios = array('preciosGasolina' => array( 
array('tipo' => 'Diesel', 'importe' => '12.2'), 
array('tipo' => 'Magna', 'importe' => '13.3'),
array('tipo' => 'Premium', 'importe' => '12.0') 
)); 

$datosJSON = json_encode($listadoPrecios);

echo isset($_GET['callback'])
		? "{$_GET['callback']}($datosJSON)"
		: $datosJSON;
		
?>