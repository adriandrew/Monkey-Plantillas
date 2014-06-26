$(document).ready(

	// Se llama a la funcion invocarJson
	invocarJson

);

function invocarJson() {

	$.ajax({
          type: "POST",
          //url: "http://movil.iswug.net/insofnew/functions/services/searchInsof.php?tipo=movil_evento&callback=?",
          url: "http://monkey.somee.com/searchInsof.php",
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(response) { 
               //alert("CORRECTO");
          	//alert(response); 
          	console.log(response); 
			window.listadoI = response; 
		  	inyectarListado(listadoI)

               console.log(listadoI)
          },
          error: function(XMLHttpRequest, textStatus, Error) {
          	alert(XMLHttpRequest, textStatus, Error);}
    });

} //invocarJson

function inyectarListado(listado) {

//	$.each(listado.items, function(clave, valor) {

//		$('#inyectar').append('<h2>"'+valor.nombre+'"</h2>');
	
//	});

     $.each(listado.precioDiesel, function(clave, valor) {

          $('#inyectar').append('<h2>"'+valor.precioDiesel+'"</h2>');
     
     });     

} //inyectarListado