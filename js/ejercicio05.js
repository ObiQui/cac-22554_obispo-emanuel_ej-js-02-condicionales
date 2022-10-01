function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #05\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _edad;                                  // Edad a ingresar
    let _genero;                                // Género F o M
    let _yearsNeeded;                           // Años necesarios para alcanzar la jubilación

    let _temp;

    const _n0 = 0;
    const _n1 = 1;

    const _edadMinima = parseInt(0);                      // Edad mínima permitida a ingresar
    const _edadMaxima = parseInt(120);                    // Edad máxima permitida a ingresar

    const _jubilaciónFemenina = parseInt(60);             // Edad mínima jubilatoria femenina
    const _jubilacionMasculina = parseInt(65);            // Edad mínima jubilatoria masculina

    let _faltaFaltan = "faltan";                // Falta o faltan
    let _yearYears = "años";                    // Año o años

    const _minusFem = "f";
    const _minusMas = "m";
    const _signarFemenino = `F`;                // Caracter permitido correspondiente al género femenino
    const _signarMasculino = `M`;               // Caracter permitido correspondiente al género masculino

    const _generoFemenino = "Femenino";         // Texto: Femenino
    const _generoMasculino = "Masculino"        // Texto: Masculino

    let _pass = false;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    // Función para registrar el género
    function ingresarGenero(_mensaje) {
        do {
            // Ingresar el número que se asignará a '_temp'
            _temp = prompt(`${_mensaje}`,"Ingrese aquí F o M.");

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                _quit = true;
                return;
            }
            
            if ((_temp == "") || (_temp == "Ingrese aquí F o M.")) {
                // Si no se ingreso ningún valor, el predeterminado es '—'
                _temp = "—";
            }

            // Pasar "f" y "m" a mayúsculas
            if (_temp == _minusFem) {
                _temp = _temp.toUpperCase();
            } else if (_temp == _minusMas) {
                _temp = _temp.toUpperCase();
            }

            // Verificar si lo ingresado es correcto
            if (_temp == _signarFemenino) {

                // Si '_temp' es igual a "F"
                _pass = true;

            } else if (_temp == _signarMasculino) {

                // Si '_temp' es igual a "M"
                _pass = true;

            } else {

                // Si '_temp' no es igual a "F" o "M"
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar la letra ' F ' (efe) para femenino o la letra ' M ' (eme) para masculino.`);

            }

        } while (_pass == false);

        // Regresar valor de '_temp'
        return _temp;
    }

    // Función para registrar la edad
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
            if (isNaN(isNaN(_temp) || (_temp  % _n1 != _n0) || (_temp < _edadMinima) || (_temp > _edadMaxima))) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero positivo entre 0 y 120 (inclusive).`);
            }

        } while (isNaN(_temp) || (_temp  % _n1 != _n0) || (_temp < _edadMinima) || (_temp > _edadMaxima));

        // Regresar valor de '_temp'
        return _temp;
    }

    function yearsToReachRetirement() {

        // Años necesarios para alcanzar la jubilación
        if (_genero == _generoFemenino) {

            // Jubilación femenina
            _yearsNeeded = _jubilaciónFemenina - _edad; 

        } else if (_genero == _generoMasculino) {

            // Jubilación masculina
            _yearsNeeded = _jubilacionMasculina - _edad; 

        } else {

            // Error
            console.log(`[ERROR]`);
            return;
        }

        // Plural o singular
        if (_yearsNeeded != _n1) {

            // Plural
            _faltaFaltan = "faltan";
            _yearYears = "años";

        } else {

            // Singular
            _faltaFaltan = "falta";
            _yearYears = "año";

        }
    }

    function jubilacionSi() {

        // Ya puede jubilar
        console.log(`\n————————————————————\nGénero: ${_genero}\nEdad: ${_edad}\nTiene la edad suficiente para jubilarse.\n————————————————————`);
    }

    function jubilacionNo() {

        // Le faltan años para jubilarse
        console.log(`\n————————————————————\nGénero: ${_genero}\nEdad: ${_edad}\nLe ${_faltaFaltan} ${_yearsNeeded} ${_yearYears} para jubilarse.\n————————————————————`);
    }


    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Obtener género
    _genero = ingresarGenero(`Ingrese su género utilizando la letra ' M ' (eme) para masculino o la letra ' F ' (efe) para femenino.`)

    // Obtener edad
    _edad = ingresarNumero(`Ingrese su edad.\nSe considera como edad válida aquella entre 1 y 120 (inclusive).\nPor casos extra-ordinarios, presentarse en la sucursal más cercana.\nRecuerde que debe escribir un número entero.`);

    // Aplicar parseInt a la variable '_edad'
    _edad = parseInt(_edad);

    // Calcular datos ingresados
    if (_genero == _signarFemenino) {

        // El registro corresponde a una persona de género femenino
        _genero = String(_generoFemenino);

        if (_edad >= _jubilaciónFemenina) {

            // Puede jubilarse
            jubilacionSi();

        } else if (_edad < _jubilaciónFemenina) {

            // Calcular años faltantes para jubilarse
            yearsToReachRetirement();

            // Le falta para jubilarse
            jubilacionNo();

        } else {

            // Error
            console.log(`[ERROR]`);
            return;
    
        }

    } else if (_genero == _signarMasculino) {

        // El registro corresponde a una persona de género masculino
        _genero = String(_generoMasculino);

        if (_edad >= _jubilacionMasculina) {

            // Puede jubilarse
            jubilacionSi();
    
        } else if (_edad < _jubilacionMasculina) {

            // Calcular años faltantes para jubilarse
            yearsToReachRetirement();

            // Le falta para jubilarse
            jubilacionNo();
    
        } else {
    
            // Error
            console.log(`[ERROR]`);
            return;
    
        }

    } else {

        // Error
        console.log(`[ERROR]`);
        return;

    }
}

document.getElementById("start05").onsubmit = iniciar;