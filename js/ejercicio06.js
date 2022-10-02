function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #06\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;                                      // Variable temporal

    let _empEdad = "UAS";                           // Edad del empleado: entre 16 y 90
    let _empSalario = "UAS";                        // Salario del empleado: $10.000 o mayor
    let _salarioConAp;                              // Salario después de descontar los aportes
    let _aporte;                                    // Aportes al sindicato

    const _porcAdicional = 0.3;                     // 30%  - Porcentaje adicional por edad
    const _porcB = 0.007;                           // 0.7% - Porcentaje minimo
    const _porcC = 0.014;                           // 1.4% - Porcentaje intermedio 1
    const _porcD = 0.021;                           // 2.1% - Porcentaje intermedio 2
    const _porcE = 0.028;                           // 2.8% - Porcentaje mayor

    const _edadMinima = 16;                         // Edad mínima: 16 años
    const _edadMaxima = 90;                         // Edad máxima: 90 años
    const _edadAdicional = 30;                      // Edad hasta la cual se cobra un adicional: 30 años

    const _n0 = 0;                                  // Número 0
    const _n1 = 1;                                  // Número 1

    const _montoA = 20000;                          // $20.000
    const _montoB = 30000;                          // $30.000
    const _montoC = 40000;                          // $40.000

    const _pagaMinima = 10000;                      // $10.000
    const _pagaMinimaTexto = "(pesos diez mil)";    // Texto de ayuda junto al valor de '_pagaMinima'



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    function ingresarEdad(_mensaje) {
        do {
            // Ingresar el número que se asignará a '_temp'
            _temp = prompt(`${_mensaje}`, _n0);

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                _quit = true;
                return;
            }
            
            if (_temp == "") {
                // Si no se ingreso ningún valor, el predeterminado es 0 (cero)
                _temp = _n0;
            }

            // Verificar si el número es correcto
            if (isNaN(_temp) || (_temp % _n1 != _n0) || (_temp < _edadMinima) || (_temp > _edadMaxima)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero entre ${_edadMinima} y ${_edadMaxima}.`);
            }

        } while (isNaN(_temp) || (_temp % _n1 != _n0) || (_temp < _edadMinima) || (_temp > _edadMaxima));

        // Regresar valor de '_temp'
        return _temp;
    }

    function ingresarSalario(_mensaje) {
        do {
            // Ingresar el número que se asignará a '_temp'
            _temp = prompt(`${_mensaje}`, _n0);

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                _quit = true;
                return;
            }

            if (_temp == "") {
                // Si no se ingreso ningún valor, el predeterminado es 0 (cero)
                _temp = _n0;
            }

            // Verificar si el número es correcto
            if (isNaN(_temp) || (_temp < _pagaMinima)) {
                alert(`Ha ingresado: ${_temp}.\nDebe ingresar un monto superior a $${_pagaMinima} ${_pagaMinimaTexto}.\nEscriba el valor numérico sin caracteres especiales (puntuaciones, símbolos, etc).`);
            }

        } while (isNaN(_temp) || (_temp < _edadMinima));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_empEdad' y '_empSalario'
    // Ingresar la edad del empleado
    if (_empEdad == "UAS") {

        // Obtener la edad del empleado
        _empEdad = ingresarEdad(`Ingrese la edad del empleado.\nSe considera como edad válida aquella entre 16 y 90 (inclusive).`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt
        _empEdad = parseInt(_empEdad);
    }

    if (_empSalario == "UAS") {

        // Obtener el monto salarial del empleado
        _empSalario = ingresarSalario(`Ingrese el salario mensual del empleado.\nSolo se consideran válidos los números enteros de 10.000 (diez mil) en adelante.\nEscriba el valor numérico sin caracteres especiales (puntuaciones, símbolos, etc).`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Remover el punto de los números enteros
        _empSalario =_empSalario.replaceAll('.', '');

        // Aplicar parseInt
        _empSalario = parseInt(_empSalario);
    }

    if (_empSalario < _montoA) {
        // El salario es inferior a $20.000
        // Aporte = (Salario * 0.7%)
        _aporte = _porcB * _empSalario;

    } else if (_empSalario >= _montoA && _empSalario < _montoB) {
        // El salario esta entre los $20.000 y $29.999
        // Aporte = (Salario * 1.4%)
        _aporte = _porcC * _empSalario;

    } else if (_empSalario >= _montoB && _empSalario < _montoC) {
        // El salario esta entre los $30.000 y $39.999 
        // Aporte = (Salario * 2.1%)
        _aporte = _porcD * _empSalario;

    } else {
        // El salario es igual o mayor a $40.000
        // Aporte = (Salario * 2.8%)
        _aporte = _porcE * _empSalario;
    }

    // Aporte extra por edad
    if (_empEdad <= _edadAdicional) {
        // Aporte = (aporte * 30) + aporte
        _aporte = (_aporte * _porcAdicional) + _aporte;
        
    }

    // Salario final
    _salarioConAp = _empSalario - _aporte;

    console.log(`Edad: ${_empEdad}\nSalario: ${_empSalario}\nAporte: ${_aporte}\nSalario con aportes: ${_salarioConAp}\n————————————————————`);



}

document.getElementById("start06").onsubmit = iniciar;