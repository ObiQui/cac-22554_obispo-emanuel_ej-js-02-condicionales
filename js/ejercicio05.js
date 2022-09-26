function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #05\n————————————————————`);

    // Definir variables
    let _userAge;       // User's age
    let _userGender;    // User's gender
    let _temp1;         // Para usos varios
    let _temp2;         // Falta o faltan
    let _temp3;         // Año o años
    let _pass = false;
    const _n0 = 0;
    const _n1 = 1;
    const _n60 = 60;
    const _n65 = 65;
    const _n120 = 120;

    // Establecer la edad del usuario
    do{
        do {
            do {
                do {
                    // Ingresar el número para la edad
                    _userAge = prompt(`Ingrese su edad.\nSe considera como edad válida aquella entre 1 y 120 (inclusive).\nPor casos extra-ordinarios, presentarse en la sucursal más cercana.`);
                    if (_userAge == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }

                    // Verificar si el caracter ingresado es un número
                    if ( isNaN(_userAge) ) {
                        alert(`El caracter ingresado no es un número.`);
                    }
                } while ( isNaN(_userAge) );

                // Verificar si el número ingresado es un entero
                if (_userAge % _n1 != _n0) {
                    alert(`El número ingresado no es un entero.\n`);
                }
            } while (_userAge % _n1 != _n0);

            // Para evitar problemas
            _userAge = parseInt(_userAge);

            // Verificar si la edad ingresada es mayor a 0
            if (_userAge < _n1) {
                alert(`La edad ingresada no es válida.\n`);
            }
        } while ( _userAge < _n1);

        // Verificar si la edad ingresada es menor a 121
        if (_userAge > _n120) {
            alert(`La edad ingresada no es válida.\n`);
        }
    } while (_userAge > _n120 );

    do {
        do {
            // Reestablecer '_pass' como 'false'
            _pass = false;

            // Ingresar el género del usuario
            _userGender = String(prompt(`Ingrese su género utilizando la letra ' M ' (eme) para masculino o la letra ' F ' (efe) para femenino.`));
            if (_userGender == null || _userGender == "null") {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            if (_userGender.length > 1) {
                alert(`Escriba solo 1 (una) letra.\nLa letra ' M ' (eme) para masculino.\nLa letra ' F ' (efe) para femenino.`)
            }
        } while (_userGender.length > 1);

        // Borrar letras más hallá de la primera y convertirla en mayuscula
        _temp1 = _userGender.toUpperCase();
        _userGender = _temp1;


        // Verificar si se ingresó el dato correcto
        if (_userGender.indexOf("M") > -1 ) {
            // Letra 'M' encontrada
            _pass = true;

        } else if (_userGender.indexOf("F") > -1 ) {
            // Letra 'F' encontrada
            _pass = true;
        }

        if (_pass == false) {
            alert(`La información ingresada es invalida.\nEscriba la letra ' M ' (eme) para masculino o la letra ' F ' (efe) para femenino.`);
        }
    } while (_pass == false);

    // Presentar información
    if (_userGender == "M") {
        // El usuario es de género masculino

        if (_userAge >= _n65)  {
            // Puede jubilarse
            console.log(`\n————————————————————\nGénero: Masculino\nEdad: ${_userAge}\nTiene la edad suficiente para jubilarse.\n————————————————————`);

        } else {
            // Le falta para jubilarse
            _temp1 = _n65 - _userAge;

            if (_temp1 == 1) {
                _temp2 = "falta";
                _temp3 = "año";
            } else {
                _temp2 = "faltan";
                _temp3 = "años";
            }

            console.log(`\n————————————————————\nGénero: Masculino\nEdad: ${_userAge}\nLe ${_temp2} ${_temp1} ${_temp3} para jubilarse.\n————————————————————`);
        }

    } else {
        // El usuario es de género femenino

        if (_userAge >= _n60)  {
            // Puede jubilarse
            console.log(`\n————————————————————\nGénero: Femenino\nEdad: ${_userAge}\nTiene la edad suficiente para jubilarse.\n————————————————————`);

        } else {
            // Le falta para jubilarse
            _temp1 = _n60 - _userAge;

            if (_temp1 == 1) {
                _temp2 = "falta";
                _temp3 = "año";
            } else {
                _temp2 = "faltan";
                _temp3 = "años";
            }

            console.log(`\n————————————————————\nGénero: Femenino\nEdad: ${_userAge}\nLe ${_temp2} ${_temp1} ${_temp3} para jubilarse.\n————————————————————`);
        }

    }
}

document.getElementById("start05").onsubmit = iniciar;