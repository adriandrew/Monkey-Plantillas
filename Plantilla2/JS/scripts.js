// alert("prueba");

function Ocultar(obj) {

    var equipos = document.getElementById(obj);

        equipos.style.display = 'none';

}


function Cargada(id){

	alert("prueba");

}

function MuestraOculta(id){

if (document.getElementById){ //se obtiene el id
var equipos = document.getElementById(id); //se define la variable "equipos" igual a nuestro div
equipos.style.display = (equipos.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
}

}

window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/

muestra_oculta('contenido_a_mostrar');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */

