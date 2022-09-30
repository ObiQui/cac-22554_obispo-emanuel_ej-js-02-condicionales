function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #06\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;              // Variable temporal

    let _empEdad;           // Edad del empleado: entre 16 y 90
    let _empSalario;        // Salario del empleado: $10.000 o mayor
    let _salarioConAp;      // Salario después de descontar los aportes
    let _aporte;            // Aportes al sindicato

    const _n0 = 0;          // Número 0
    const _n1 = 1;          // Número 1
    const _n0p3 = 0.3;      // Número 0.3 - 30%
    const _n0p7 = 0.7;      // Número 2.7
    const _n1p4 = 1.4;      // Número 1.4
    const _n2p1 = 2.1;      // Número 2.1
    const _n2p8 = 2.8;      // Número 2.8
    const _n16 = 16;        // Número 16 - Edad mínima: 16
    const _n30 = 30;        // Número 30 - Edad 30
    const _n90 = 90;        // Número 90 - Edad máxima: 90
    const _n100 = 100;      // Número 100 - Para la regla de 3 simple
    const _n10M = 10000;    // Número 10.000
    const _n20M = 20000;    // Número 20.000
    const _n30M = 30000;    // Número 30.000
    const _n40M = 40000;    // Número 40.000



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_empEdad' y '_empSalario'
    // Ingresar la edad del empleado
    do{
        do {
            do {
                do {
                    // Ingresar el número para la edad
                    _empEdad = prompt(`Ingrese la edad del empleado.\nSe considera como edad válida aquella entre 16 y 90 (inclusive).`);

                    // Cancelar el ejercicio
                    if (_empEdad == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }

                    // Verificar si el caracter ingresado es un número
                    if ( isNaN(_empEdad) ) {
                        alert(`Debe ingresar un número.`);
                    }
                } while ( isNaN(_empEdad) );

                // Verificar si el número ingresado es un entero
                if (_empEdad % _n1 != _n0) {
                    alert(`El número ingresado no es un entero.\n`);
                }
            } while (_empEdad % _n1 != _n0);

            // Para evitar problemas
            _empEdad = parseInt(_empEdad);

            // Verificar si la edad ingresada es mayor a 0
            if (_empEdad < _n16) {
                alert(`La edad ingresada no es válida.\n`);
            }
        } while ( _empEdad < _n16);

        // Verificar si la edad ingresada es menor a 121
        if (_empEdad > _n90) {
            alert(`La edad ingresada no es válida.\n`);
        }
    } while (_empEdad > _n90);

    // Ingresar el salario del empleado
    do {
        do {
            //Ingresar el número para el salario
            _empSalario = prompt(`Ingrese el salario mensual del empleado.\nSolo se consideran válidos los números enteros de 10.000 (diez mil) en adelante.\nEscriba el valor numérico sin caracteres especiales (puntuaciones, símbolos, etc).`);

            // Cancelar ejercicio
            if (_empSalario == null) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Verificar si se ha ingresado un número
            if (isNaN(_empSalario)) {
                alert(`Debe ingresar un número.`);
            }
        } while (isNaN(_empSalario));

        // Verificar si el salario es mayor o igual a 10.000
        if (_empSalario < _n10M) {
            alert(`El salario es inferior a 0.\nEl monto es inválido.\nIntente nuevamente.`);
        }
    } while (_empSalario < _n10M);

    // Para evitar posibles problemas
    if (_empSalario % _n1 != _n0) {
        alert(`El salario ingresado no es un número entero.\nLos decimales del monto serán truncados.`);
        _empSalario = parseInt(_empSalario);
    }

    // Remover el punto de los números enteros
    _empSalario = String(_empSalario);
    _temp =_empSalario.replaceAll('.', '');
    _empSalario = _temp;

    /* Calculando aportes - Regla de 3 simple
       100% ______ $ Salario
    Aporte% ______ $ ¿? ($ Aporte)
    */ 
    if (_empSalario < _n20M) {
        // El salario es inferior a $20.000
        // Aporte = (0.7 * Salario) / 100
        _aporte = (_n0p7 * _empSalario) / _n100;

    } else if (_empSalario >= _n20M && _empSalario < _n30M) {
        // El salario esta entre los $20.000 y $29.999
        // Aporte = (Salario * 1.4) / 100
        _aporte = (_n1p4 * _empSalario) / _n100;

    } else if (_empSalario >= _n30M && _empSalario < _n40M) {
        // El salario esta entre los $30.000 y $39.999 
        // Aporte = (Salario * 2.1) / 100
        _aporte = (_n2p1 * _empSalario) / _n100;

    } else {
        // El salario es igual o mayor a $40.000
        // Aporte = (Salario * 2.8) / 100
        _aporte = (_n2p8 * _empSalario) / _n100;
    }

    // Aporte extra por edad
    if (_empEdad < _n30) {
        // Aporte = (aporte * 0.3) + aporte
        _aporte = (_aporte * _n0p3) + _aporte;
        
    }

    // Salario final
    _salarioConAp = _empSalario - _aporte;

    console.log(`
    ————————————————————
    Edad: ${_empEdad}
    Salario: ${_empSalario}
    Aporte: ${_aporte}
    Salario con aportes: ${_salarioConAp}
    ————————————————————`);



}

document.getElementById("start06").onsubmit = iniciar;