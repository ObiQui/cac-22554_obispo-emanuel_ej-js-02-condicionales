function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #11\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _romano;
    let _arabico;

    const _listaRomano = ["I","II","III","V","X","L","C","D","M"];  // Numeros romanos
    const _listaArabico = [1,2,3,5,10,50,100,500,1000];             // Equivalentes arábicos


    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer variables
    while (!_listaRomano.includes(_romano)) {
        // Ingresar letra
        _romano = String(prompt(`Ingresa un símbolo númerico romano.\nI   II   III   V   X   L   C   D   M`));

        // Si se presiona el botón cancelar en el prompt
        if (_romano == null || _romano == "null") {
            // Cancelar ejercicio
            console.log("Ejercicio cancelado.");
            return;
        }

        // Convertir letra en mayúscula
        _romano = _romano.toUpperCase();

        // Verificar si el caracter ingresado es válido.
        if (!_listaRomano.includes(_romano)) {
            console.log("El caracter ingresado no corresponde a un número romano.");
        }
    }

    // Identificar el valor del número romano
    switch (_romano) {
        case "I":
            _arabico = _listaArabico[0];
            break;
        
        case "II":
            _arabico = _listaArabico[1];
            break;

        case "III":
            _arabico = _listaArabico[2];
            break;

        case "V":
            _arabico = _listaArabico[3];
            break;

        case "X":
            _arabico = _listaArabico[4];
            break;

        case "L":
            _arabico = _listaArabico[5];
            break;

        case "C":
            _arabico = _listaArabico[6];
            break;
        
        case "D":
            _arabico = _listaArabico[7];
            break;

        case "M":
            _arabico = _listaArabico[8];
            break;
    }

    // Presentar datos
    console.log(`El número arábico equivalente al número romano ${_romano} es ${_arabico}.`);
}

document.getElementById("start11").onsubmit = iniciar;