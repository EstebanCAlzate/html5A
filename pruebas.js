$(document).ready(function() {
    'use strict';

    document.querySelector('#home .hvr-bubble-float-right')
        .addEventListener('click', function(event) {
            $('#contact-text').addClass('visible');
            console.log('evento boton');
            //cosas
        });
});
