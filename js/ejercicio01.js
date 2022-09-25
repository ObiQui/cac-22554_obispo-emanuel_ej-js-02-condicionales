// Inicio
console.log(`Ejercicio #01`);
let _start;
_start = document.getElementById("start");

function proccess(e) {

    e.preventDefault();

    // Definir variable
    let _userNumber;

    // Establecer valor de la variable '_userNumber'

    do {
        _userNumber = parseInt(prompt(`Ingresa un número entero.`));

        if (isNaN(_userNumber)) {
            console.log(`El caracter ingresado no es un número.`);
        }
    } while (isNaN(_userNumber));

    alert(`El`);


}

_start.onsubmit = proccess;