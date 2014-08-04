
// alert("prueba");
/*
function Cargada(id){

	alert("prueba");

};

*/


// Muestra Oculta
function MuestraOculta(id){
    if (document.getElementById){ // Se obtiene el id.
        var equipos = document.getElementById(id); // Se define la variable "equipos" igual a nuestro div.
        equipos.style.display = (equipos.style.display == 'none') ? 'block' : 'none'; // Damos un atributo display:none que oculta el div.
    }
}

window.onload = function(){ // Hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente.
    MuestraOculta('navEquipos'); // "navEquipos" es el nombre que le dimos al div.
}
// Termina Muestra Oculta

// Audio

/*

var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}

*/

// Termina Audio


$(document).ready(function() { 

    // aplicando efectos a todos los enlaces 
    //$("a").fancybox(); 
    
    $(".frame").fancybox({
        'width'             : '75%',
        'height'            : '75%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe'
    });

});

