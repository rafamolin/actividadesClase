// 1. lo primero es verificar que la vinculacion es correcta 
// ENVIAMOS UN MENSAJE 

console.log("HOLA MUNDO - estoy vinculado con mi html");

// VARIABLES DE JAVASRCRIPT

/* DEFINICION - ESPACIO DE MEMORIA - cajita que guarda informacion en forma de datos de diferentes tipos, numerico (2, 2.3, 4.65487465874), boleabnos, arreglos, texto (strings), objetos */

// definimos para usarlos constantemente 

/*
VARIABLES EN JS
(no se usa var)
1. var - nos guarda datos que pueden cambiar en un tiempo (en desuso)

2. let - nos guarda datos que pueden cambiar en un tiempo
3. const - nos guarda datos constantes - es decir no cambian en el tiempo
*/

// 2. DECLARACION DE VARIABLES
/* 
1. definir que tipo de variable (let o const)
2. darle nombrfe a la variable
3. decirle que va a  guardar
*/
let nombreVariable = 'nombre';

// numericos

let numero = 3;
const pi = 3.14;

// texto - strings

let texto = 'hola';
const nombre = 'rafa';

// booleanos - verdadero o falso

// true: verdadero
let esVerdadero = true;
// false: falso
const esFalso = false;

// arreglos - permiten guardar mas de un dato - del mismo tipo
// se reconocen por uso de corchetes y los datos se separan por comas
let arregloNumero = [5, 6, 7, 3, 9];
const arregloNombres = ['luisa', 'manuela', 'daniel'];

// POO -> programacion orientada a objetos
// OBJETOS - son datos que representan en codigo, elementos o cosas de la vida real para que podamos darle instrucciones logicas.

// todos los elementos de la vida real los podemos definir en terminos de caracteristicas (atributos (codigo)), de acciones (metodos (codigo))

/*
    []-> corchetes con los arreglos de datos
    {} -> llaves los tipos de objetos
    () -> metodos -> funciones

    estructura -> clave valor -> los atrivutos y metodos se separan por comas

    yo puedo accedr no solo al objeto completo si no a sus propierades si no a sus metodos de forma especipfica.

    Como:
    nombreObjeto.atributo
    nombreObjeto.método
*/


const persona1 = {
// clave: valor;
nombre: "luisa",
edad:23,
// si es un proceso matematico dejarlo como numero y si no dejarlo como texto
altura:"170 cm",
nacionalidad: "colombiana",
// metodos -> funciones
saludar: function(){
    console.log("hola desarrolladores")
},
despedir: function(){
    console.log("chao desarrolladores")
}

}


let productos = {
    nombre: 'computador',
    precio: 10000,
    cantidad: 20,
    descripcion: 'es muy rápido',
    comprar: function(){
        console.log('comprando producto')
    }
}


// --------------------- funciones --------------------------

/*
¿ como se usan las funciones en js?

1. declaraciones tipicas de funciones
2. funciones anonimas -> funciones sin nombre
3. funciones flecha -> los estandares modernos de programacion en js
4. funciones incorporadas -> funciones que ya vienen establecidas dentro de js, para que nosotros los podamos usar

*/

// 1. DECLARACION BASICA DE FUNCIONES
/*
    function nombreFuncion(){
        logica dentro de la funcion
    }
*/

function saludar(){
    console.log("holiiiiiiiiiiiii");
}

// funciones anonimas

let despedida = function(){
    console.log("chauuuuu")
}

// 3. funciones flecha -> forma moderna

let suma = () => {
    console.log(5+4);
}

//4. funciones incorporadas
/*
alert -> enviarle un mensaje al usuario
prompt -> pedri datos al usuario
parseInt -> convertir un dato a entero
parseFloat -> convertir un dato a flotante(decimal)
console -> nos envía mensaje a la consola del desarrolador
Math -> nos permite hacer operacione smatemáticas más complejas


*/