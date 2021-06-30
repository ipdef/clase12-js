//Usando JQuery para acceder y modificar objetos en el DOM
$(document).ready(function() {
    //Acceso a propiedades
    //$('#title').text('Texto agregando dinamemicamente desde JS usando la libreria JQuery');

    let textoPrevio = $('#title').text();
    console.log(textoPrevio);
    $('#title').text('Texto agregado dinamicamente desde JS usando la libreria JQuery');
    //Agregando eventos
    //Ingresa 
    $('h1').on('mouseover', function(){
        $(this).css('color','blue');
        //$(this).css('background-color','red');
        //document.getElementById('title').style.color = 'blue';
    })

    //Regresa a su estilo original
    $('h1').on('mouseleave', function(){
      $(this).css('color','black');
    })
});