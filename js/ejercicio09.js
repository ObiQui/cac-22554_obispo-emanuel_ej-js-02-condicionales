function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #09\n————————————————————`);

    // Definir variables
    let _angA;          // Primer ángulo
    let _angB;          // Segundo ángulo
    let _angC;          // Tercer ángulo
    let _angSuma;       // Suma de todos los ángulos
    let _triangulo;     // Tipo de triángulo
    let _temp;          // Variable temporal
    const _n0 = 0;      // Número 0
    const _n1 = 1;      // Número 1
    const _n90 = 90;    // Número 90
    const _n180 = 180;  // Número 180

    // Establecer el valor de las variables '_angA', '_angB' y '_angC'

    alert(`A continuación deberá ingresar el valor númerico de los 3 ángulos de un triángulo.\nRecuerde que la suma de los 3 ángulos debe ser igual a 180°.`)

    do {
        do {
            do {
                // Ingresar el valor de A
                _angA = prompt(`Ingrese el valor del primer ángulo.\nEl número debe ser un entero positivo.`);
                if (_angA == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_angA)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_angA));
    
            // Verificar si el número ingresado es un entero
            if (_angA % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_angA % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_angA < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_angA < _n1);

    // Calcular los grados restantes
    _temp = _n180 - _angA;

    // Establecer el segundo ángulo
    do {
        do {
            do {
                if (_angA >= _n180) {
                    // Ingresar el valor de B
                    _angB = prompt(`Ingrese el valor del segundo ángulo.\nEl número debe ser un entero positivo.`);
                    if (_angB == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }

                } else {
                    // Ingresar el valor de B
                    _angB = prompt(`Ingrese el valor del segundo ángulo.\nEl número debe ser un entero positivo.\n\nSugerencia:\nIngrese un número entre ${_n1} y ${_temp - _n1} (inclusive).`);
                    if (_angB == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }
                }

                // Verificar si el caracter ingresado es un número
                if (isNaN(_angB)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_angB));
    
            // Verificar si el número ingresado es un entero
            if (_angB % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_angB % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_angB < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_angB < _n1);

    // Calcular los grados restantes
    _temp = _temp - _angB;

    // Establecer el tercer ángulo
    do {
        do {
            do {
                if (_temp < _n1) {
                    // Ingresar el valor de C
                    _angC = prompt(`Ingrese el valor del tercer ángulo.\nEl número debe ser un entero positivo.`);
                    if (_angC == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }

                } else {
                    // Ingresar el valor de C
                    _angC = prompt(`Ingrese el valor del tercer ángulo.\nEl número debe ser un entero positivo.\n\nSugerencia:\nIngrese el número ${_temp}.`);
                    if (_angC == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }
                }

                // Verificar si el caracter ingresado es un número
                if (isNaN(_angC)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_angC));
    
            // Verificar si el número ingresado es un entero
            if (_angC % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_angC % _n1 != _n0);

        // Verificar si el número ingresado es un entero
        if (_angC < _n1) {
            alert(`El número ingresado debe ser positivo.\n`);
        }
    } while (_angC < _n1);

    // parseInt evita un problema al comprar con números negativos
    _angA = parseInt(_angA);
    _angB = parseInt(_angB);
    _angC = parseInt(_angC);

    // Verificar si el triángulo es posible
    _angSuma = _angA + _angB + _angC;

    if (_angSuma > _n180) {
        alert(`El valor ingresado para los ángulos es incorrecto.\nLa suma de los 3 ángulos es mayor a 180°.`);
        console.log(`El valor ingresado para los ángulos es incorrecto.\nLa suma de los 3 ángulos es mayor a 180°.`);
        return;

    } else if (_angSuma < _n180) {
        alert(`El valor ingresado para los ángulos es incorrecto.\nLa suma de los 3 ángulos es menor a 180°.`);
        console.log(`El valor ingresado para los ángulos es incorrecto.\nLa suma de los 3 ángulos es mnor a 180°.`);
        return;
    }

    // Verificar que tipo de triángulo se ingreso
    if (_angA == _n90 || _angB == _n90 || _angC == _n90) {
        // Se ingresó un triángulo rectángulo
        _triangulo = "rectángulo";

    } else if (_angA == _angB && _angA == _angC) {
        // Se ingresó un triángulo equilátero
        _triangulo = "equilátero";

    } else if (_angA != _angB && _angA != _angC && _angB != _angC) {
        // Se ingresó un triángulo escaleno
        _triangulo = "escaleno";

    } else {
        // Se ingresó un triángulo isóseles
        _triangulo = "isóseles";
    }

    // Presentar datos
    console.log(`
        ————————————————————
        1er ángulo: ${_angA}
        2do ángulo: ${_angB}
        3er ángulo: ${_angC}
        Se ingresó un triángulo ${_triangulo}
        ————————————————————`);
}

document.getElementById("start09").onsubmit = iniciar;