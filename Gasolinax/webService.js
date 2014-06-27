$(document).ready(

	// Se llama a la funcion invocarJson
	invocarJson

);

function invocarJson() {

	$.ajax({
          type: "POST",
          //url: "http://movil.iswug.net/insofnew/functions/services/searchInsof.php?tipo=movil_evento&callback=?",
          url: "http://monkey.somee.com/Gasolinax/preciosGasolinaMexico.php",
          data: "{}",
          contentType: "application/jsonp; charset=utf-8",
          dataType: "jsonp",
          success: function(response) { 
          	//alert(response); 
			window.listadoI = response; 
		  	inyectarListado(listadoI)

               //console.log(listadoI)
          },
          error: function(XMLHttpRequest, textStatus, Error) {
          	console.log(XMLHttpRequest, textStatus, Error);
          }
    });

} //invocarJson

function inyectarListado(listado) {

     $.each(listado.preciosGasolina, function(clave, valor) {

          $('#inyectar').append('<h2>"'+valor.importe+'"</h2>');
     
     }); 

} //inyectarListado