/*(function() {
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

/*for (var i = 0; i < 5; i++) {
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
};*/

/*(function() {
    console.log(1);
    setTimeOut(function() { console.log(2) }, 1000);
    setTimeOut(function() { console.log(3) }, 0);
    console.log(4);

*/

//el time out se ejecuta despues de que todo el for se ha hecho, se hace la 
//evaluacion comoleta. arreglada
//
//for (var i = 0; i < 5; i++) {
//    setTimeout((function(index) {
//        return function() {
//            console.log(index);
//        };
//    })(i), i * 1000);
//}
// cambia el color del boton con seleccion de elementos con js
//
//$('button').click(function(event) {
//console.log(event);
//$('nav a').css('color', 'green');
//$(this).css('color', 'red');
//$(event.target).css('color', 'red');
//});
//
////devuelve la propiedad href del elemento por el cual pasas por encima
//$('.nav-item a').mouseover(funcion() {
//console.log($(this).attr('href'));
//});
//
//
////para descargar un poco los cambios a medida de un scrooll
//$(document).scroll(function() {
//requestAnimationFrame(function() {
//$('header').css('top', window.superCalculus);
//});
//});

//ajax puedes perguntar por informacion por algun elemente a una BBDD
//y de esta manera cambias la web asi no tienes que recargar la pagina

//Proemesas:


//var root = 'https://jsonplaceholder.typicode.com';


//Para hacer como un barrier de todas las tareas asincronas
//promise.all()

/*



        var root = 'https://jsonplaceholder.typicode.com';
        // callback
        // $.ajax({
        //     dataType: 'json',
        //     url: root + '/posts/1',
        //     method: 'GET',
        //     success: function() {
        //     },
        //     error: function() {
        //     }
        // });
        // promesas
        var promise = $.ajax({
            dataType: 'json',
            url: root + '/posts/1',
            method: 'GET'
        });


        promise.then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });


        var promises = [];
        for (var i = 1; i < 11; i++) {
            var promise = $.ajax({
                dataType: 'json',
                url: root + '/posts/' + i,
                method: 'GET'
            });
            promises.push(promise);
        }

        Promise.all(promises).then(function(responses) {
            console.log(responses);
            var html = responses.reduce(function(total, response) {
                return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
            }, '');
            $('#about-us').append(html);
        }).catch(function() {
            console.log(arguments);
        });

        // barrera solo de la primera tarea

        Promise.race(promises).then(function() {
            //alguna termina
        }).catch(function() {
            //si alguan termina con error
        });


        //promesas anidadas para que vayan haciendo promesas.
        var promise1 = $.ajax({
            dataType: 'json',
            url: root + '/posts/1',
            method: 'GET'
        });
        var promise2 = $.ajax({
            dataType: 'json',
            url: root + '/posts/1',
            method: 'GET'
        });

        var promise3 = $.ajax({
            dataType: 'json',
            url: root + '/posts/1',
            method: 'GET'
        });


        //caulquiera de las dos, controlamos cada promesa por separad si falla
        promise2.catch(funcion() {
            //codigo de error
        })

        function doStuff() {


            promise1.then(function() {
                return promise2; //.catch(function(){
                //cod erro especifico
            });
        }.then(function() {
            return promise3;
        }).then(function() {
            //your code , ya se han ejecutado todas las promises de forma asincrona
            //y secuencial
        }).catch(function() {
            //error
        });

    }

    doStuff().then(function(response) {
        //43
    });

    var quickPromise = Promise.resolve(true); //promise que ya esta resuelta

    quickPromise.then(function(resolve) {
        return response ? 10 : 0;
    }).then(function(response) {
        return response > i ? {} : [];
    });

    //login: se van añadiendo cosas pero siempre en cadena
    function login(username, password) {
        login('facebook').then(function(responseFB) {
            return loginOauth(responseFB);
        }).then(function(responseOauth) {
            return loginWithServer(responseOauth);
        }).then(function() {
            return getLoggedInUser();
        });
    }



    var createPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            //do stuff
            resolve('magic'); //cuando salte el timeOut
        }, 5000);
    });

    createPromise.then(function(resolve) {
        //magic
    })


    //al hacer un JS meterlo en una funcion que se auto-llama para que las
    // variables sean propias de ese JS.


})();
*/
