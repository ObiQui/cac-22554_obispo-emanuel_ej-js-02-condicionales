function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #08\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _elemA;         // Número A
    let _elemB;         // Número B

    const _n0 = 0;      // Número cero
    const _n1 = 1;      // Número uno

    let _string;        // Texto

    let _quit = false;  // Cancelar ejercicio



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
            if (isNaN(_temp) || (_temp % _n1 != _n0)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero.`);
            }

        } while (isNaN(_temp));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_elemA', '_elemB' y '_elemC'
    while (_elemA == "UAS") {

        // Asignar un valor a la variable
        _elemA = ingresarNumero(`Ingrese un número entero para el elemento *A*.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseInt a la variable
        _elemA = parseInt(_elemA);

    }

    while (_elemB == "UAS" || _elemB == _elemA) {

        // Asignar un valor a la variable
        _elemB = ingresarNumero(`Ingrese un número entero para el elemento *B*.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        if (_elemB == _elemA) {

            // Si el número de *B* es igual al de *A*
            alert(`Entrada inválida.\nEl número asignado al elemento *B* debe ser distinto al de *A*.`);

        } else {

            // Aplicar parseInt a la variable
            _elemB = parseInt(_elemB);

        }
    }

    console.log(`Los números ingresados son:\nA) ${_elemA}\nB) ${_elemB}\n————————————————————`);

    if (_elemA > _elemB) {
        // A es mayor que B

        if (_elemA % _elemB == 0) {
            // A es divisible por B
            _string = (`A(${_elemA}) es divisible por B(${_elemB}).`);

        } else {
            // A no es divisible por B
            _string = (`A(${_elemA}) no es divisible por B(${_elemB}).`);
        }

    } else if (_elemB > _elemA) {
        // B es mayor que A

        if (_elemB % _elemA == 0) {
            // A es divisible por B
            _string = (`B(${_elemB}) es divisible por A(${_elemB}).`);

        } else {
            // A no es divisible por B
            _string = (`B(${_elemB}) no es divisible por A(${_elemB}).`);
        }
    } else {
        // A y B son iguales
        _string = (`A(${_elemA}) y B(${_elemB}) son iguales,\npor tanto, ambos son divisibles entre sí.`);

    }

    // Presentar datos
    console.log(`${_string}\n————————————————————`);
}

document.getElementById("start08").onsubmit = iniciar;