function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #07\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _elemA = "UAS";            // Número A
    let _elemB = "UAS";            // Número B
    let _elemC = "UAS";            // Número C
    let _mayorNumero;         // Número más grande
    let _medioNumero;         // Número intermedio
    let _menorNumero;         // Número menor
    let _mayorElem;         // Letra
    let _medioElem;         // Variable temporal 2
    let _menorElem;         // Variable temporal 3

    let _temp;

    const _n0 = 0;      // Número 0
    const _n1 = 1;      // Número 1

    const _stringA = "A";
    const _stringB = "B";
    const _stringC = "C";

    let _BmA = false;   // B es mayor que A
    let _BmC = false;   // B es mayor que C
    let _CmA = false;   // C es mayor que A

    let _quit = false;   // Cancelar ejercicio



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log("Ingrese el valor de 3 elementos (A, B y C) sin repetir.\nSolo se admitirán números enteros como valores correctos.");

    alert("Ingrese el valor de 3 elementos (A, B y C) sin repetir.\nSolo se admitirán números enteros como valores correctos.");



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

    while ((_elemC == "UAS") || (_elemC == _elemA) || (_elemC == _elemB)) {

        // Asignar un valor a la variable
        _elemC = ingresarNumero(`Ingrese un número entero para el elemento *C*.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        if (_elemC == _elemA) {

            // Si el número de *C* es igual al de *A*
            alert(`Entrada inválida.\nEl número asignado al elemento *C* debe ser distinto al de *A*.`);

        } else if (_elemC == _elemB) {

            // Si el número de *C* es igual al de *B*
            alert(`Entrada inválida.\nEl número asignado al elemento *C* debe ser distinto al de *B*.`);

        } else {

            // Aplicar parseInt a la variable
            _elemC = parseInt(_elemC);

        }
    }

    // Verificar orden de mayor a menor
    _mayorNumero = _elemA;   // Establecer A como el número más grande
    _medioNumero = _elemA;   // Establecer A como el número intermedio
    _menorNumero = _elemA;   // Establecer A como el número menor

    _mayorElem = _stringA;   // Establecer '_mayorElem' como '_stringA'
    _medioElem = _stringA;   // Establecer '_medioElem' como '_stringA'
    _menorElem = _stringA;   // Establecer '_menorElem' como '_stringA'

    if (_elemB > _elemA) {
        // B es mayor que A
        _BmA = true;
    }
    if (_elemB > _elemC) {
        // B es mayor que C
        _BmC = true;
    }
    if (_elemC > _elemA) {
        // C es mayor que A
        _CmA = true;
    }

    if (_BmA == true && _BmC == true) {
        // Establecer B como el número más grande
        _mayorNumero = _elemB;
        _mayorElem = _stringB;

        if (_CmA == true) {
            // Establecer C como el número intermedio
            _medioNumero = _elemC;
            _medioElem = _stringC;

        } else {
            // Establecer C como el número menor
            _menorNumero = _elemC;
            _menorElem = _stringC;
        }

    } else if (_CmA == true && _BmC == false) {
        // Establecer C como el número más grande
        _mayorNumero = _elemC;
        _mayorElem = _stringC;

        if (_BmA == true) {
            // Establecer B como el número intermedio
            _medioNumero = _elemB;
            _medioElem = _stringB;

        } else {
            // Establecer B como el número menor
            _menorNumero = _elemB;
            _menorElem = _stringB;
        }
    } else {
        // A sigue siendo el número más grande

        if (_BmC == true) {
            // Establecer B como el número intermedio
            _medioNumero = _elemB;
            _medioElem = _stringB;

            // Establecer C como el número intermedio
            _menorNumero = _elemC;
            _menorElem = _stringC;

        } else {
            // Establecer C como el número intermedio
            _medioNumero = _elemC;
            _medioElem = _stringC;

            // Establecer B como el número menor
            _menorNumero = _elemB;
            _menorElem = _stringB;
        }
    }

    console.log(`
    ————————————————————
    Número mayor: ${_mayorElem} ${_mayorNumero}
    Número medio: ${_medioElem} ${_medioNumero}
    Número menor: ${_menorElem} ${_menorNumero}
    ————————————————————
    `);
}

document.getElementById("start07").onsubmit = iniciar;