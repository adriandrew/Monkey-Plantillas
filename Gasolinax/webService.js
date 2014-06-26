$(document).ready(

	// Se llama a la funcion invocarJson
	invocarJson

);

function invocarJson() {

	$.ajax({
          type: "POST",
          url: "http://movil.iswug.net/insofnew/functions/services/searchInsof.php?tipo=movil_evento&callback=?",
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(response) { 
          	//alert(response); 
          	console.log(response); 
			window.listadoI = response; 
		  	inyectarListado(listadoI)
          },
          error: function(XMLHttpRequest, textStatus, error) {
          	alert("Error");}
    });

} //invocarJson

function inyectarListado(listado) {

	$.each(listado.items, function(clave, valor) {

		$('#inyectar').append('<h1>"'+valor.nombre+'"</h1>');
	
	});

} //inyectarListado