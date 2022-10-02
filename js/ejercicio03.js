function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #03\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _nA = "a";
    let _nB = "b";

    let _temp;

    const _n0 = 0;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    console.log(`Ingrese 2 números, *A* y *B*. A continuación se mostrará cual de los 2 es el mayor.\n`);

    alert(`Ingrese 2 números, *A* y *B*. A continuación se mostrará cual de los 2 es el mayor.\n`);



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
            if (isNaN(_temp)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número.`);
            }

        } while (isNaN(_temp));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Asignar un valor a la variable '_nA'
    while (_nA == "a") {

        // Obtener la cantidad de asientos disponibles
        _nA = ingresarNumero(`Ingrese un número *A*.\n(Escriba un número entero positivo)`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt al valor de '_nA'
        _nA = parseInt(_nA);

    }

    // Asignar un valor a la variable '_nB'
    while (_nB == "b") {

        // Obtener la cantidad de inscriptos disponibles
        _nB = ingresarNumero(`Ingrese un número *B*.\n(Escriba un número entero positivo)`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt al valor de '_nB'
        _nB = parseInt(_nB);

    }

    // Presentar los números ingresados, indicando cual es el mayor
    if ( _nA == _nB ) {
        console.log(`A(${_nA}) es igual a B(${_nB}).`);
    } else if ( _nA > _nB ) {
        console.log(`A(${_nA}) es mayor que B(${_nB}).`);
    } else {
        console.log(`B(${_nB}) es mayor que A(${_nA}).`);
    }
}

document.getElementById("start03").onsubmit = iniciar;