function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #11\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _romano;

    const _lista = ["I","II","III","V","X","L","C","D","M"];



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer variables
    do {
        // Ingresar letra
        _romano = String(prompt(`Ingresa un símbolo númerico romano.\nI   II   III   V   X   L   C   D   M`));
        if (_romano == null || _romano == "null") {
            console.log("Ejercicio cancelado.");
            return;
        }

        // Convertir letra en mayúscula
        _temp = _romano.toUpperCase();
        _romano = _temp;

        // Verificar si el caracter ingresado es válido.
        if (_lista.includes(_romano)) {
            _temp = true;
        } else {
            console,log("El caracter ingresado no corresponde a un número romano.");
            _temp == false;
        }
    } while (_temp == false);

    // Identificar el valor del número romano
    switch (_romano) {
        case "I":
            _romano = 1;
            _temp = "I";
            break;
        
        case "II":
            _romano = 2;
            _temp = "II";
            break;

        case "III":
            _romano = 3;
            _temp = "III";
            break;

        case "V":
            _romano = 5;
            _temp = "V";
            break;

        case "X":
            _romano = 10;
            _temp = "X";
            break;

        case "L":
            _romano = 50;
            _temp = "L";
            break;

        case "C":
            _romano = 100;
            _temp = "C";
            break;
        
        case "D":
            _romano = 500;
            _temp = "D";
            break;

        case "M":
            _romano = 1000;
            _temp = "M";
            break;
    }

    // Presentar datos
    console.log(`${_temp} = ${_romano}`);
}

document.getElementById("start11").onsubmit = iniciar;