// vlaidar el funcionamiento
console.log("hola estoy funcionando");

// cuando se va a manioular elementos del html desde su js, siempre traer los elementos primero

// traer mis elementos del html
// declarando nuestras variables globales no se encuantran encerradas en llaves sepueden usar en todo el codigo


// validar la ejecucion en el inspeccionador de mi pagina web

//   // cuando usamos el console.log -> solo de decimos a js que vamos a usar variables - poner en nombre de la variable sin comillas y si quiere mostrar mas de una separar por comas
//   // ejemplo 1
//     console.log(numero1);
//   // ejemplo 2
//     console.log(numero2, pantalla);


// concatenacion -> texto + variable o numero - algo que no va en comillas y otros que no van entre comillas


// console.log('el elemento input numero 1 es: ' + numero1);
// no es concatenacion
// console.log(5+6);
// si es concatenacion entre texto y numero
// console.log('5'+6);


// VARIALBLES LOCALES
let numero1;
let numero2;
let pantalla;
let resultado = 0; //inicializacion en cero

// asignar a mis variables los elementos de html
// document - me accede al html
// getElementbyti - trae el elemento por su id

numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
pantalla = document.getElementById("pantalla");



function suma() {
    // .value -> me da el valor de mi input
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    // typeof - me dice el tipo de datos
    // console.log(typeof(numero1));
    // console.log(typeof(numero2));

    /*
    let num1 = parceInt(numero1);
    let num2 = parseInt(numero2);

    console.log(typeof(num1));
    console.log(typeof(num1));
    */

    // variable local -> solo funciona en la funcion suma
    let resultadoSuma = parseInt(numero1) + parseInt(numero2);
    console.log(resultadoSuma);
    pantalla.textContent = resultadoSuma;
}

function resta() {
    // .value -> me da el valor de mi input
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseInt(numero1) - parseInt(numero2);
    // variable global
    pantalla.textContent = resultado;
}

function multiplicar() {
    // .value -> me da el valor de mi input
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseInt(numero1) * parseInt(numero2);
    // variable global
    pantalla.textContent = resultado;
}


function division() {
    // .value -> me da el valor de mi input
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseFloat(numero1) / parseFloat(numero2);
    // variable global
    // toffixed -> me muestra la cantidad de decimales que yo quiera
    // math.ceil -> redondea por encima
    // math.round -> redondea numeros
    pantalla.textContent = resultado.toFixed(3);
}


