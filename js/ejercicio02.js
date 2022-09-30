function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #02\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _asientos;
    let _inscriptos;
    let _diferencia;

    let _temp;

    const _n0 = 0;
    const _n1 = 1;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    function ingresarNumero(_mensaje) {
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
            if (isNaN(_temp) || _temp < _n1 || _asientos % _n1 != _n0) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero positivo.\n————————————————————`);
            }

        } while (isNaN(_temp) || (_temp < _n1 || _asientos % _n1 != _n0));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer la cantidad de asientos e inscriptos
    do {
        do {
            do {
                // Ingresar la cantidad de asientos
                _asientos = prompt(`Ingrese la cantidad de asientos.\n(Escriba un número entero positivo)`);
                if (_asientos == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_asientos)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_asientos));
    
            // Verificar si el número ingresado es un entero
            if (_asientos % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_asientos % _n1 != _n0);

        // Verificar si el número es igual o mayor que cero
        if (_asientos < _n0) {
            alert(`El número ingresado es negativo.\n`);
        }
    } while (_asientos < _n0);

    do {
        do {
            do {
                // Ingresar la cantidad de inscriptos
                _inscriptos = prompt(`Ingrese la cantidad de inscriptos.\n(Escriba un número entero positivo)`);
                if (_inscriptos == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_inscriptos)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_inscriptos));
    
            // Verificar si el número ingresado es un entero
            if (_inscriptos % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_inscriptos % _n1 != _n0);

        // Verificar si el número es igual o mayor que cero
        if (_inscriptos < _n0) {
            alert(`El número ingresado es negativo.\n`);
        }
    } while (_inscriptos < _n0);



    // Asignar un valor a la variable '_asientos'
    while (_asientos < _n1) {

        // Obtener la cantidad de asientos disponibles
        _asientos = ingresarNumero(`Ingrese la cantidad de asientos.\n(Escriba un número entero positivo)`);

        // Aplicar parseInt al valor de '_asientos'
        _asientos = parseInt(_asientos);

    }

    // Asignar un valor a la variable _inscriptos
    while (_inscriptos < _n1) {

        // Obtener la cantidad de inscriptos disponibles
        _inscriptos = ingresarNumero(`Ingrese la cantidad de inscriptos.\n(Escriba un número entero positivo)`);

        // Aplicar parseInt al valor de '_inscriptos'
        _inscriptos = parseInt(_inscriptos);

    }

    // Presentar la cantidad de asientos e inscriptos
    console.log(`Asientos: ${_asientos}\nInscriptos: ${_inscriptos}\n————————————————————`);

    // Calcular la diferencia entre asientos e inscriptos
    if ( !isNaN(_asientos) && !isNaN(_inscriptos)) {
        if (_inscriptos == _asientos) {
            // Misma cantidad de asientos e inscriptos
            console.log(`La cantidad de asientos e inscriptos es exactamente la misma.\n————————————————————`);
    
        } else if (_inscriptos > _asientos) {
            // Más inscriptos que asientos, mostrar cuantos asientos faltan
            _diferencia = _inscriptos - _asientos;
            console.log(`Faltan ${_diferencia} asientos.\n————————————————————`);
    
        } else {
            // Más asientos que inscriptos, mostrar cuantos asientos sobran
            _diferencia = _asientos - _inscriptos;
            console.log(`Sobran ${_diferencia} asientos.\n————————————————————`);
        }
    }
}

document.getElementById("start02").onsubmit = iniciar;