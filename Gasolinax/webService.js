// Hay que calcular con variables.
$(document).delegate('#Diesel', 'click', calcularDiesel);

$(document).ready(

	// Se llama a la funcion invocarJson.
	//invocarJson

  obtenerPrecios

);

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
          
          },
          
          error: function(XMLHttpRequest, textStatus, Error) {
          
          	console.log(XMLHttpRequest, textStatus, Error);
          
          }

    });

} //invocarJson

function inyectarListado(listado) {

     $.each(listado.preciosGasolina, function(clave, valor) {

          //$('#inyectarPrecios').append('<h2>'+valor.tipo+': '+valor.importe+'</h2>');

          $('#navPrecios ul').append('<li><a href="calculos.html" id="'+valor.tipo+'">'+valor.tipo+' $'+valor.importe+'</a></li>');
     
      var tipo = valor.tipo;
      var importe = valor.importe;
      localStorage.setItem(tipo, importe);

     }); 

} //inyectarListado


function guardarPrecios(){
     
      var tipo = 'Diesel';
      var importe = '12.3';
      localStorage.setItem(tipo, importe);

}


function obtenerPrecios(){

     var importe = localStorage.getItem('Diesel') || '<empty>';
      $('#navPrecios ul').append('<li><a href="calculos.html">'+importe+'</a></li>');

}

function limpiarPrecios(){

    localStorage.clear();

}



