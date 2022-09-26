function proccess(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #03\n————————————————————`);

    // Definir variables
    let _nA;
    let _nB;
    const _n0 = 0;
    const _n1 = 1;

    // Establecer el valor de las variables '_nA' y '_nB'
    do {
        do {
            // Ingresar el valor de A
            _nA = prompt(`Ingrese el valor de A.\n(Escriba un número entero)`);
            if (_nA == null) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Verificar si el caracter ingresado es un número
            if (isNaN(_nA)) {
                alert(`No se ha ingresado no un número.`);
            }
        } while (isNaN(_nA));

        // Verificar si el número ingresado es un entero
        if (_nA % _n1 != _n0) {
            alert(`El número ingresado no es un entero.\n`);
        }
    } while (_nA % _n1 != _n0);

    do {
        do {
            // Ingresar el valor de B
            _nB = prompt(`Ingrese el valor de B.\n(Escriba un número entero)`);
            if (_nB == null) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Verificar si el caracter ingresado es un número
            if (isNaN(_nB)) {
                alert(`No se ha ingresado no un número.`);
            }
        } while (isNaN(_nB));

        // Verificar si el número ingresado es un entero
        if (_nB % _n1 != _n0) {
            alert(`El número ingresado no es un entero.\n`);
        }
    } while (_nB % _n1 != _n0);

    // parseInt evita un problema al comprar con números negativos
    _nA = parseInt(_nA);
    _nB = parseInt(_nB);

    // Presentar los números ingresados, indicando cual es el mayor
    if ( _nA == _nB ) {
        console.log(`A(${_nA}) es igual a B(${_nB}).`);
    } else if ( _nA > _nB ) {
        console.log(`A(${_nA}) es mayor que B(${_nB}).`);
    } else {
        console.log(`B(${_nB}) es mayor que A(${_nA}).`);
    }
}

document.getElementById("start03").onsubmit = proccess;