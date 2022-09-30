function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _userNumber;

    const _n0 = 0;
    const _n1 = 1;
    const _n2 = 2;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    while ((isNaN(_userNumber)) || (_userNumber % _n1 != _n0)) {

        // Establecer valor de la variable '_userNumber'
        _userNumber = prompt(`Ingresa un número entero.`);

        // Si se presiona "Cancelar" en el prompt
        if (_userNumber == null) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Verificar si el número es correcto
        if (isNaN(_userNumber)) {
            alert(`No se ha ingresado no un número.`);

        } else if (_userNumber % _n1 != _n0) {
            
            alert(`El número ingresado no es un entero.\n`);
        }
    }

    // Presentar número ingresado
    console.log(`Número ingresado: ${_userNumber}`);

    // Verificar si el número ingresado es par o impar
    if (_userNumber % _n2 != _n0) {
        console.log(`${_userNumber} es un número impar.\n————————————————————`);
    } else {
        console.log(`${_userNumber} es un número par.\n————————————————————`);
    }
}

document.getElementById("start01").onsubmit = iniciar;