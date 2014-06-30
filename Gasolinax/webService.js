// Hay que calcular con variables.
$(document).delegate('#Diesel', 'click', calcularDiesel);

$(document).ready(

  llamarFunciones

	// Se llama a la funcion invocarJson.
	//invocarJson

  // Se llama a la funcion obtenerPrecios de cada tipo.
  //obtenerPrecios('Diesel'),
  //obtenerPrecios('Magna'),
  //obtenerPrecios('Premium')

);

function llamarFunciones(){

try {
    //Block of code to try

    // Se llama a la funcion invocarJson.
  invocarJson,

    // Se llama a la funcion obtenerPrecios de cada tipo.
   // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel'),
  obtenerPrecios('Magna'),
  obtenerPrecios('Premium')

}
catch(err) {
    //Block of code to handle errors

    //invocarObtenerPrecios

      // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel'),
  obtenerPrecios('Magna'),
  obtenerPrecios('Premium')

}

}


//TODO. Falló al hacerlo de esta manera u.u
function invocarObtenerPrecios(){

  // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel'),
  obtenerPrecios('Magna'),
  obtenerPrecios('Premium')

}


function calcularDiesel() {
    //document.getElementById("Diesel").innerHTML = "YOU CLICKED ME!";
    alert('diesel');
  
  $tipo = 'diesel';
  $precio = '';

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

           // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel'),
  obtenerPrecios('Magna'),
  obtenerPrecios('Premium')
          },
          
          error: function(XMLHttpRequest, textStatus, Error) {
          
            // Se llama a la funcion obtenerPrecios de cada tipo.
  obtenerPrecios('Diesel'),
  obtenerPrecios('Magna'),
  obtenerPrecios('Premium')


          	console.log(XMLHttpRequest, textStatus, Error);
          
          }

    });

} //invocarJson

function inyectarListado(listado) {

     $.each(listado.preciosGasolina, function(clave, valor) {

          //$('#inyectarPrecios').append('<h2>'+valor.tipo+': '+valor.importe+'</h2>');

        //  $('#navPrecios ul').append('<li><a href="calculos.html" id="'+valor.tipo+'">'+valor.tipo+' $'+valor.importe+'</a></li>');
     
        var tipo = valor.tipo;
        var importe = valor.importe;
//      localStorage.setItem(tipo, importe);

      guardarPrecios(tipo, importe)

      //obtenerPrecios(tipo)

     }); 

} //inyectarListado


function guardarPrecios(tipo, importe){
     
    //  var tipo = 'Diesel';
    //  var importe = '12.3';
      localStorage.setItem(tipo, importe);

}


function obtenerPrecios(tipo){

     var importe = localStorage.getItem(tipo) || '<empty>';
      $('#navPrecios ul').append('<li><a href="calculos.html">'+tipo+' $ '+importe+'</a></li>');

}

function limpiarPrecios(){

    localStorage.clear();

}



