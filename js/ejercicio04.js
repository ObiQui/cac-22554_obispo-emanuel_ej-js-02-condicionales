function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #04\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _nA = "a";
    let _nB = "b";
    let _nC = "c";

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

    // Establecer el valor de las variables '_nA', '_nB' y '_nC'
    while (_nA == "a") {

        // Obtener un valor para '_nA'
        _nA = ingresarNumero(`Ingrese un número *A*.\n(Escriba un número entero positivo)`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt al valor de '_nA'
        _nA = parseInt(_nA);

    }

    while (_nB == "b") {

        // Obtener un valor para '_nB'
        _nB = ingresarNumero(`Ingrese un número *B*.\n(Escriba un número entero positivo)`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt al valor de '_nB'
        _nB = parseInt(_nB);

    }

    while (_nC == "c") {

        // Obtener un valor para '_nC'
        _nC = ingresarNumero(`Ingrese un número *C*.\n(Escriba un número entero positivo)`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt al valor de '_nC'
        _nC = parseInt(_nC);

    }

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

document.getElementById("start04").onsubmit = iniciar;