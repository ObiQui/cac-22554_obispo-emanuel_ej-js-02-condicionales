function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #09\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _ladoA = 0;          // Primer ángulo
    let _ladoB = 0;          // Segundo ángulo
    let _ladoC = 0;          // Tercer ángulo

    let _temp;          // Variable temporal

    const _n0 = 0;      // Número 0
    const _n1 = 1;      // Número 1

    let _triangulo = "";     // Tipo de triángulo: Equilátero, isóseles, escaleno o inválido



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log(`Ingrese la longitud (en centímetros) de los 3 lados de un triángulo.\nRecuerde que para que un triángulo sea válido, cada uno de sus lados no puede ser más largo que la suma de los otros dos.`)

    alert(`Ingrese la longitud (en centímetros) de los 3 lados de un triángulo.\nRecuerde que para que un triángulo sea válido, cada uno de sus lados no puede ser más largo que la suma de los otros dos.`)



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
            if (isNaN(_temp) || _temp < _n1) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número positivo.\n————————————————————`);
            }

        } while (isNaN(_temp) || (_temp < _n1));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer el valor de las variables '_ladoA', '_ladoB' y '_ladoC'

    // Obtener la longitud del primer lado
    while (_ladoA < _n1) {

        // Llamar a la función para obtener el valor de A
        _ladoA = ingresarNumero(`Ingresar la longitud en centímetros del lado A.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseFloat al valor A
        _ladoA = parseFloat(_ladoA);
    }

    // Obtener la longitud del segundo lado
    while (_ladoB < _n1) {

        // Llamar a la función para obtener el valor de B
        _ladoB = ingresarNumero(`Ingresar la longitud en centímetros del lado B.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseFloat al valor B
        _ladoB = parseFloat(_ladoB);
    }

    // Obtener la longitud del tercer lado
    while (_ladoC < _n1) {

        // Llamar a la función para obtener el valor de C
        _ladoC = ingresarNumero(`Ingresar la longitud en centímetros del lado C.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseFloat al valor C
        _ladoC = parseFloat(_ladoC);
    }

    // Verificar si el triángulo es un válido y que tipo de triángulo se ingresó
    if (_ladoA > (_ladoB + _ladoC)) {

        // El triángulo es inválido
        _triangulo = "inválido";

    } else if (_ladoB > (_ladoA + _ladoC)) {

        // El triángulo es inválido
        _triangulo = "inválido";

    } else if (_ladoC > (_ladoA + _ladoB)) {

        // El triángulo es inválido
        _triangulo = "inválido";

    } else if (_ladoA == _ladoB && _ladoA == _ladoC) {

        // Se ingresó un triángulo equilátero
        _triangulo = "equilátero";

    } else if (_ladoA != _ladoB && _ladoA != _ladoC && _ladoB != _ladoC) {

        // Se ingresó un triángulo escaleno
        _triangulo = "escaleno";

    } else {

        // Se ingresó un triángulo isóseles
        _triangulo = "isóseles";

    }

    // Presentar datos
    console.log(`————————————————————\n1er lado: ${_ladoA}\n2do lado: ${_ladoB}\n3er lado: ${_ladoC}\nSe ingresó un triángulo ${_triangulo}.\n————————————————————`);
}

document.getElementById("start09").onsubmit = iniciar;