function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #07\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp1;         // Variable temporal 1
    let _temp2;         // Variable temporal 2
    let _temp3;         // Variable temporal 3

    let _nA;            // Número A
    let _nB;            // Número B
    let _nC;            // Número C
    let _mayor;         // Número más grande
    let _medio;         // Número intermedio
    let _menor;         // Número menor

    const _n0 = 0;      // Número 0
    const _n1 = 1;      // Número 1

    let _BmA = false;   // B es mayor que A
    let _BmC = false;   // B es mayor que C
    let _CmA = false;   // C es mayor que A



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    alert("A continuación deberá ingresar el valor de 3 elementos (A, B y C) sin repetir.\nSolo se admitirán números enteros como valores correctos.")



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_nA', '_nB' y '_nC'
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
            do {
                // Ingresar el valor de B
                _nB = prompt(`Ingrese un número entero para el valor de B.`);
                if (_nB == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_nB)) {
                    alert(`No se ha ingresado no un número.\nIntente nuevamente.`);
                }
            } while (isNaN(_nB));
    
            // Verificar si el número ingresado es un entero
            if (_nB % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\nIntente nuevamente.`);
            }
        } while (_nB % _n1 != _n0);

        // Verificar si el número ingresado es repetido
        if (_nA == _nB) {
            alert(`No debe repitir los números.\nIntente nuevamente.`);
        }
    } while (_nA == _nB);

    do {
        do {
            do {
                do {
                    // Ingresar el valor de C
                    _nC = prompt(`Ingrese un número entero para el valor de C.`);
                    if (_nC == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }
        
                    // Verificar si el caracter ingresado es un número
                    if (isNaN(_nC)) {
                        alert(`No se ha ingresado no un número.\nIntente nuevamente.`);
                    }
                } while (isNaN(_nC));
        
                // Verificar si el número ingresado es un entero
                if (_nC % _n1 != _n0) {
                    alert(`El número ingresado no es un entero.\nIntente nuevamente.`);
                }
            } while (_nC % _n1 != _n0);

            // Verificar si el número ingresado es repetido
            if (_nA == _nC) {
                alert(`No debe repitir los números.\nIntente nuevamente.`);
            }
        } while (_nA == _nC);

        // Verificar si el número ingresado es repetido
        if (_nB == _nC) {
            alert(`No debe repitir los números.\nIntente nuevamente.`);
        }
    } while (_nB == _nC);

    // parseInt evita un problema al comprar con números negativos
    _nA = parseInt(_nA);
    _nB = parseInt(_nB);
    _nC = parseInt(_nC);

    // Verificar orden de mayor a menor
    _mayor = _nA;   // Establecer A como el número más grande
    _medio = _nA;   // Establecer A como el número intermedio
    _menor = _nA;   // Establecer A como el número menor
    _temp1 = "A";   // Establecer '_temp1' como "A"
    _temp2 = "A";   // Establecer '_temp2' como "A"
    _temp3 = "A";   // Establecer '_temp3' como "A"

    if (_nB > _nA) {
        // B es mayor que A
        _BmA = true;
    }
    if (_nB > _nC) {
        // B es mayor que C
        _BmC = true;
    }
    if (_nC > _nA) {
        // C es mayor que A
        _CmA = true;
    }

    if (_BmA == true && _BmC == true) {
        // Establecer B como el número más grande
        _mayor = _nB;
        _temp1 = "B";

        if (_CmA == true) {
            // Establecer C como el número intermedio
            _medio = _nC;
            _temp2 = "C";

        } else {
            // Establecer C como el número menor
            _menor = _nC;
            _temp3 = "C";
        }

    } else if (_CmA == true && _BmC == false) {
        // Establecer C como el número más grande
        _mayor = _nC;
        _temp1 = "C";

        if (_BmA == true) {
            // Establecer B como el número intermedio
            _medio = _nB;
            _temp2 = "B";

        } else {
            // Establecer B como el número menor
            _menor = _nB;
            _temp3 = "B";
        }
    } else {
        // A sigue siendo el número más grande

        if (_BmC == true) {
            // Establecer B como el número intermedio
            _medio = _nB;
            _temp2 = "B";

            // Establecer C como el número intermedio
            _menor = _nC;
            _temp3 = "C";

        } else {
            // Establecer C como el número intermedio
            _medio = _nC;
            _temp2 = "C";

            // Establecer B como el número menor
            _menor = _nB;
            _temp3 = "B";
        }
    }

    console.log(`
    ————————————————————
    Número mayor: ${_temp1} ${_mayor}
    Número medio: ${_temp2} ${_medio}
    Número menor: ${_temp3} ${_menor}
    ————————————————————
    `);
}

document.getElementById("start07").onsubmit = iniciar;