(function {

    'use strict';

    /*console.log('hello');

    var hello = {
        pepe: true,
        juan: 'ok'
    }

    console.log(hello);

    //alert('tu ordenador no es SEGURO');

    /**
     * @param  {[type]}
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    //function pepe (arg1,arg2,arg3);
    //console.log((1 + '1') + " hola ");
    /*
    var compra = ['leche', 'pan', 'azucar'];

    function list() {
        compra.forEach(function(elementoCompra) {
            console.log(elementoCompra);
        });
    }


    function quiarGluten() {
        compra = compra.filter(function(elementoCompra, index) {
            return elementoCompra !== 'pan';
        });
    }

    quiarGluten();
    console.log(compra);


    var fecha = '2017/05/04';
    var fechaNum = fecha.split('').map(function(item) {
        return parseInt(item);
    });
    //console.log(item);


    function Player(name, lastName, level) {
        this.name = name;
        this.lastName = lastName;
        this.level = level;
        this.play = function() {
            console.log('play');
        }
    }

    var player = new Player('jose', 'perez', '532');

    player.play();

    var obj = {
        nombre: 'Pepe',
        saludo: function() {
            return 'hola ' + this.nombre + '!';
        }
    };

    obj.nombre;
    obj.saludo;
    obj['saludo']();
    var fn = obj['saludo'];
    fn();

    //selectores de eventos
    fn.call(obj);
    fn.bind(obj)();

    // creacion de html por js
    var compraListNodeVirtual = document.createElement('ul');
    compra.forEach(function(item) {
        var a = document.createElement('li');
        a.innerHTML = item;
        compraListNodeVirtual.appendChild(a);
    });
    compraListNode.appendChild(compraListNodeVirtual);

    //transformacion de un NODE a un ARRAY
    var array = document.querySelectorAll('.nav a');
    var newArray = Array.prototype.slice.call(array, 0);
    newArray.map(function(item) {
        item.style.color = 'red';
    });

    function argumentsArray() {
        console.log(arguments);
    }

    argumentsArray(1, 2, 4, 'string');*/
    /* originarl
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('Button');
        btn.appendChild(document.createTextNode('Button' + i));
        btn.addEventListener('click', function() {
            console.log();
        });
        document.body.appendChild(btn);
    };*/

    //mejorado, hacemos un contexto con la funcion function(i) para mantener
    // el valor de i para que los indices pueden moverse

    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('Button');
        btn.appendChild(document.createTextNode('Button' + i));
        //se obliga a que coja el i que devuelve la funcion y no el general
        //que esta puesto a 0
        btn.addEventListener('click', (function(i) {
            return function() {
                console.log(i);
            };
        })(i));
        document.body.appendChild(btn);
    };

    //al hacer un JS meterlo en una funcion que se auto-llama para que las
    // variables sean propias de ese JS.
})();
