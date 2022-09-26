function proccess(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #04\n————————————————————`);

    // Definir variables
    let _nA;
    let _nB;
    let _nC;
    const _n0 = 0;
    const _n1 = 1;

    // Establecer el valor de las variables '_nA', '_nB' y '_nC'
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

    do {
        do {
            // Ingresar el valor de C
            _nC = prompt(`Ingrese el valor de C.\n(Escriba un número entero)`);
            if (_nC == null) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Verificar si el caracter ingresado es un número
            if (isNaN(_nC)) {
                alert(`No se ha ingresado no un número.`);
            }
        } while (isNaN(_nC));

        // Verificar si el número ingresado es un entero
        if (_nC % _n1 != _n0) {
            alert(`El número ingresado no es un entero.\n`);
        }
    } while (_nC % _n1 != _n0);

    // parseInt evita un problema al comprar con números negativos
    _nA = parseInt(_nA);
    _nB = parseInt(_nB);
    _nC = parseInt(_nC);

    // Presentar los números ingresados, indicando cual es el mayor
    if ( _nA == _nB && _nA == _nC ) {
        // A, B y C son iguales
        console.log(`Los valores de A(${_nA}), B(${_nB}) y C(${_nC}) son idénticos.`);

    } else if ( _nA > _nB && _nA > _nC ) {
        // A es mayor que B y C
        console.log(`A(${_nA}) es mayor que B(${_nB}) y C(${_nC}).`);

    } else if ( _nA == _nB && _nA > _nC ) {
        // A es igual a B y mayor que C
        console.log(`A(${_nA} es igual a B(${_nB}) y mayor que C(${_nC}).`);

    } else if ( _nA == _nC && _nA > _nB ) {
        // A es igual a C y mayor que B
        console.log(`A(${_nA} es igual a C(${_nC}) y mayor que B(${_nB}).`);

    } else if ( _nB > _nA && _nB > _nC ) {
        // B es mayor que A y C
        console.log(`B(${_nB}) es mayor que A(${_nA}) y C(${_nC}).`);

    } else if ( _nB == _nC && _nB > _nA ) {
        // B es igual a C y mayor que A
        console.log(`B(${_nB}) es igual a C(${_nC}) y mayor que A(${_nA}).`);

    } else {
        // C es mayor que A y B
        console.log(`C(${_nC}) es mayor que A(${_nA}) y B(${_nB}).`);

    }
}

document.getElementById("start04").onsubmit = proccess;