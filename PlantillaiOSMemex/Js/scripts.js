function MuestraOculta ( id )
{

    // Se obtiene el id.

     if ( document.getElementById ) {

         // Se define la variable igual a nuestro div.

        var elemento = document.getElementById ( id ); 

        // Si la variable no viene nula o indefinida se aplica la propiedad.

        if ( typeof elemento !== 'undefined' && elemento !== null ) {

            // Damos un atributo display:none que oculta el div.

            elemento.style.display = ( elemento.style.display == 'none' ) ? 'block' : 'none'; 

        }

    }

}

window.onload = function ()
{

    // Hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente. 

    MuestraOculta ( 'navEquipos' );

    // El parametro es el nombre que le dimos al DIV. 

}
