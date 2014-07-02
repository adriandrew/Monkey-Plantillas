// Hay que calcular con variables.
$(document).delegate('#Diesel', 'click', obtenerTipo('Diesel'));
$(document).delegate('#Magna', 'click', obtenerTipo('Magna'));
$(document).delegate('#Premium', 'click', obtenerTipo('Premium'));

$(document).delegate('#btnCalcularPesosLitros', 'click', calcularPesosLitros);
$(document).delegate('#btnCalcularLitrosPesos', 'click', calcularLitrosPesos);

var tipoGlobal;

try{

  $(document).ready( 
 
  // Se invocan todas las funciones 
  // Se actualizan los valores locales obtenidos del web service con el JSON y 
  // Se muestran los valores locales actualizados. 
  llamarFunciones
  
  );

}
catch(Error){

  // Se invocan los precios locales por cada tipo.
  invocarObtenerPrecios

}

function obtenerTipo(tipo){
  
  tipoGlobal = tipo;

}

function llamarFunciones(){

  // Se llama a la funcion invocarJson.
  invocarJson();

  // Se llama a la funcion invocarObtenerPrecios para obtener precios de cada tipo.
  invocarObtenerPrecios();

}

function invocarObtenerPrecios(){

  // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel');

  obtenerPrecios('Magna');

  obtenerPrecios('Premium');

}

function calcularPesosLitros() {

  var importe = localStorage.getItem(tipoGlobal) || '<empty>';

  var pesos = document.getElementById('txtPesosLitros').value;

  var total = pesos / importe;

  document.getElementById('lblTotalPesosLitros').innerHTML = 'Total '+total+' Litros.';

}

function calcularLitrosPesos() {

  var importe = localStorage.getItem(tipoGlobal) || '<empty>';

  var litros = document.getElementById('txtLitrosPesos').value;

  var total = litros * importe;

  document.getElementById('lblTotalLitrosPesos').innerHTML = 'Total '+total+' Pesos.';

}

function invocarJson() {

	$.ajax({

    type: "POST",
          
    url: "http://monkey.somee.com/Gasolinax/preciosGasolinaMexico.php",
          
    data: "{}",
          
    contentType: "application/jsonp; charset=utf-8",
          
    dataType: "jsonp",
          
    success: function(response) { 
		
    	window.listadoI = response; 
		
      	inyectarListado(listadoI)

    },
          
    error: function(XMLHttpRequest, textStatus, Error) {
          
    	console.log(XMLHttpRequest, textStatus, Error);
          
    }

  });

} //invocarJson

function inyectarListado(listado) {

  $.each(listado.preciosGasolina, function(clave, valor) {

    //  $('#navPrecios ul').append('<li><a href="calculos.html" id="'+valor.tipo+'">'+valor.tipo+' $'+valor.importe+'</a></li>');
     
    var tipo = valor.tipo;

    var importe = valor.importe;

    guardarPrecios(tipo, importe)

  }); 

} //inyectarListado


function guardarPrecios(tipo, importe){
     
  localStorage.setItem(tipo, importe);

}

function obtenerPrecios(tipo){

  var importe = localStorage.getItem(tipo) || '<empty>';

  $('#navPrecios ul').append('<li><a href="calculos.html" id="'+tipo+'">'+tipo+' $ '+importe+'</a></li>');

}

function limpiarPrecios(){

  localStorage.clear();

}