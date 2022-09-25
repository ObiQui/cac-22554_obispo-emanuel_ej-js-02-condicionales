function proccess(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #02\n————————————————————`);

    e.preventDefault();

    // Definir variables
    let _asientos;
    let _inscriptos;
    let _diferencia;
    const _n0 = 0;
    const _n1 = 1;

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
                _inscriptos = prompt(`Ingrese la cantidad de inscriptos.\n(Escriba un número entero)`);
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

    // Calcular la diferencia entre asientos e inscriptos
    if ( !isNaN(_asientos) && !isNaN(_inscriptos)) {
        if (_inscriptos == _asientos) {
            // Misma cantidad de asientos e inscriptos
            console.log(`La cantidad de asientos e inscriptos es la misma.`);
    
        } else if (_inscriptos > _asientos) {
            // Más inscriptos que asientos, mostrar cuantos asientos faltan
            _diferencia = _inscriptos - _asientos;
            console.log(`Faltan ${_diferencia} asientos.`);
    
        } else {
            // Más asientos que inscriptos, mostrar cuantos asientos sobran
            _diferencia = _asientos - _inscriptos;
            console.log(`Sobran ${_diferencia} asientos.`);
        }
    }
}

document.getElementById("start02").onsubmit = proccess;