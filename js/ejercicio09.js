function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #09\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;          // Variable temporal

    let _ladoA;          // Primer ángulo
    let _ladoB;          // Segundo ángulo
    let _ladoC;          // Tercer ángulo

    const _n0 = 0;      // Número 0
    const _n1 = 1;      // Número 1

    let _triangulo = "";     // Tipo de triángulo: Equilatero, isóseles o escaleno



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    alert(`A continuación deberá ingresar el la longitud de los 3 lados de un triángulo.\nRecuerde que para que un triángulo sea válido, cada uno de sus lados no puede ser más largo que la suma de los otros dos.`)



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_ladoA', '_ladoB' y '_ladoC'
    // Ingresar el primer lado
    do {
        do {
            do {
                // Ingresar el valor de A
                _ladoA = prompt(`Ingrese el valor del primer ángulo.\nEl número debe ser un entero positivo.`);
                if (_ladoA == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_ladoA)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_ladoA));
    
            // Verificar si el número ingresado es un entero
            if (_ladoA % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_ladoA % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_ladoA < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_ladoA < _n1);

    // Establecer el segundo lado
    do {
        do {
            do {
                // Ingresar el valor de B
                _ladoB = prompt(`Ingrese el valor del segundo ángulo.\nEl número debe ser un entero positivo.`);
                if (_ladoB == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }

                // Verificar si el caracter ingresado es un número
                if (isNaN(_ladoB)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_ladoB));
    
            // Verificar si el número ingresado es un entero
            if (_ladoB % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_ladoB % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_ladoB < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_ladoB < _n1);

    // Establecer el tercer lado
    do {
        do {
            do {
                // Ingresar el valor de C
                _ladoC = prompt(`Ingrese el valor del tercer ángulo.\nEl número debe ser un entero positivo.`);
                if (_ladoC == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }

                // Verificar si el caracter ingresado es un número
                if (isNaN(_ladoC)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_ladoC));
    
            // Verificar si el número ingresado es un entero
            if (_ladoC % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_ladoC % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_ladoC < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_ladoC < _n1);

    // parseInt evita un problema al comprar con números negativos
    _ladoA = parseInt(_ladoA);
    _ladoB = parseInt(_ladoB);
    _ladoC = parseInt(_ladoC);

    // Verificar si el triángulo es un error
    if (_ladoA > (_ladoB + _ladoC)) {
        // El triángulo es inválido
        _temp = false;

    } else if (_ladoB > (_ladoA + _ladoC)) {
        // El triángulo es inválido
        _temp = false;

    } else if (_ladoC > (_ladoA + _ladoB)) {
        // El triángulo es inválido
        _temp = false;
    } else {
        // El triángulo es válido
        _temp = true;
    }


    // Verificar que tipo de triángulo se ingreso
    if (_temp == false) {
        // Se ingresó un triángulo rectángulo
        _triangulo = "inválido";

    } else if (_ladoA == _ladoB && _ladoA == _ladoC) {
        // Se ingresó un triángulo equilátero
        _triangulo = "equilátero";

    } else if (_ladoA != _ladoB && _ladoA != _ladoC && _ladoB != _ladoC) {
        // Se ingresó un triángulo escaleno
        _triangulo = "escaleno";

    } else {
        // Se ingresó un triángulo isóseles
        _triangulo = "isóseles";
    }

    // Presentar datos
    console.log(`
        ————————————————————
        1er lado: ${_ladoA}
        2do lado: ${_ladoB}
        3er lado: ${_ladoC}
        Se ingresó un triángulo ${_triangulo}.
        ————————————————————`);
}

document.getElementById("start09").onsubmit = iniciar;