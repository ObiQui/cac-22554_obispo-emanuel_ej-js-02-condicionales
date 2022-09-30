function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #08\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _nA;        // Número A
    let _nB;        // Número B

    const _n0 = 0;  // Número cero
    const _n1 = 1;  // Número uno

    let _string;    // Texto



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_nA' y '_nB'
    do {
        do {
            // Ingresar el valor de A
            _nA = prompt(`Ingrese un número entero para el valor de A.`);
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
            _nB = prompt(`Ingrese un número entero para el valor de B.`);
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

    console.log(`
    ————————————————————
    Los números ingresados son:
    A) ${_nA}
    B) ${_nB}
    ————————————————————`);

    if (_nA > _nB) {
        // A es mayor que B

        if (_nA % _nB == 0) {
            // A es divisible por B
            _string = `A(${_nA}) es divisible por B(${_nB}).`;

        } else {
            // A no es divisible por B
            _string = `A(${_nA}) no es divisible por B(${_nB}).`;
        }

    } else if (_nB > _nA) {
        // B es mayor que A

        if (_nB % _nA == 0) {
            // A es divisible por B
            _string = `B(${_nB}) es divisible por A(${_nB}).`;

        } else {
            // A no es divisible por B
            _string = `B(${_nB}) no es divisible por A(${_nB}).`;
        }
    } else {
        // A y B son iguales
        _string = `A(${_nA}) y B(${_nB}) son iguales,\n    por tanto, ambos son divisibles entre sí.`;

    }

    // Presentar datos
    console.log(`
    ————————————————————
    ${_string}
    ————————————————————`);
}

document.getElementById("start08").onsubmit = iniciar;