'use strict';

(function() {
    function validateForm() {

        //var inputs = Array.prototype.slice.call($('input'), 0);
        var inputs = $('#contact-text input,#contact-text textare');

        var validity = [];

        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push(elem.checkValidity());
        });

        return validity.reduce(function(total, value) {
            return total && value;
        }, true);

        //var i=0; lo mismo que arriba
        //var resul = true;
        //while (resul && (i < validity.length )) {
        //result = result && validity[i];
        //i++;
        //}
        //return resul;

    }

    validateForm();

    var button = document.querySelector('#contact-text button')
        .addEventListener('click', function(event) {
            event.preventDefault();

            var resul = validateForm();
            console.log('resul', resul);

            if (!resul) {
                return;
            }

            window.service = window.service || {};
            window.service.contact = window.service.contact || {};
            window.service.contact.send = function() {
                return Promise.resolve();
            };

            window.service.contact.send({
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val(),
                message: $('input[name="message"]').val()
            }).then(function() {
                alert('something heppend');
            });
        });
})();
