// Inicio
console.log(`Ejercicio #01`);
let _start;
_start = document.getElementById("start");

function proccess(e) {

    e.preventDefault();

    // Definir variable
    let _userNumber;
    const _n0 = 0;
    const _n1 = 1;
    const _n2 = 2;

    // Establecer valor de la variable '_userNumber'

    // Verificar si el número es un entero
    do {
        do {
            _userNumber = parseFloat(prompt(`Ingresa un número entero.`));

            // Verificar si el caracter ingresado es un número
            if (isNaN(_userNumber)) {
                alert(`No se ha ingresado no un número.`);
            }
        } while (isNaN(_userNumber));

        // Verificar si el número ingresado es un entero
        
        if (_userNumber % _n1 != _n0) {
            alert(`El número ingresado no es un entero.\n`);
        }
    } while (_userNumber % _n1 != _n0);

    console.log(`Número ingresado: ${_userNumber}`);

    // Verificar si el número ingresado es par o impar
    if (_userNumber % _n2 != _n0) {
        console.log(`${_userNumber} es un número impar.\n————————————————————`);
    } else {
        console.log(`${_userNumber} es un número par.\n————————————————————`);
    }
}

_start.onsubmit = proccess;