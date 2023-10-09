// Estructura HTML del proyecto. 
// Variables de JS necesarias. 
// Funciones esenciales del proceso a simular.
// Objetos de JS.
// Arrays.
// Métodos de búsqueda y filtrado sobre el Array.

const array = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789"]
let longitudContraseña = parseInt(prompt("Ingresa el largo de la contraseña que deseas"))
let contraseñaGenerada = ""
let paridad = ""
let contraseña = ""
let mayusculas = ""
let minusculas = ""
let numeros = ""

function generarContraseña() {
    for (let i = 0; i < longitudContraseña; i++) {
        const elementoAleatorio = Math.floor(Math.random() * array.length)
        const indexAleatorio = Math.floor(Math.random() * array[elementoAleatorio].length)

        let caracteres = array[elementoAleatorio].charAt(indexAleatorio)
        contraseñaGenerada += caracteres
    }

    if (contraseñaGenerada.length % 2 === 0) {
        paridad = "Par"
    } else {
        paridad = "Impar"
    }

    const conntieneMayusculas = contraseñaGenerada.split("").some(caracter => array[0].includes(caracter))
    const conntieneMinusculas = contraseñaGenerada.split("").some(caracter => array[1].includes(caracter))
    const conntieneNumeros = contraseñaGenerada.split("").some(caracter => array[2].includes(caracter))

    if (conntieneMayusculas) {
        mayusculas = "Si"
    } else {
        mayusculas = "No"
    }
    if (conntieneMinusculas) {
        minusculas = "Si"
    } else {
        minusculas = "No"
    }
    if (conntieneNumeros) {
        numeros = "Si"
    } else {
        numeros = "No"
    }

    contraseña = {
        "Contraseña": contraseñaGenerada,
        "Longitud": longitudContraseña,
        "Paridad de la longitud": paridad,
        "Incluye mayusculas": mayusculas,
        "Incluye minusculas": minusculas,
        "Incluye numeros": numeros
    }

}

generarContraseña()
alert("Tu contraseña es: " + contraseñaGenerada)
console.log(contraseña)
