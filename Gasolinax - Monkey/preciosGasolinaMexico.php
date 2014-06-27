<?php 

header('Content-type: application/json; charset=utf-8');

//header("access-control-allow-origin: *");

$listadoPrecios = array('preciosGasolina' => array( 
array('importe' => '12.5'), 
array('importe' => '13.2'),
array('importe' => '12.2') 
)); 

$datosJSON = json_encode($listadoPrecios);

echo isset($_GET['callback'])
		? "{$_GET['callback']}($datosJSON)"
		: $datosJSON;
		
?>