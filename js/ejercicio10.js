function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #10\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _mes;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Ingresar número
    _mes = parseInt(prompt(`Ingrese un número entre 1 y 12.`));

    // Identificar mes del año
    switch (_mes) {

        case 1:
            _mes = "Mes: Enero";
            break;

        case 2:
            _mes = "Mes: Febrero.";
            break;

        case 3:
            _mes = "Mes: Marzo.";
            break;

        case 4:
            _mes = "Mes: Abril.";
            break;

        case 5:
            _mes = "Mes: Mayo.";
            break;

        case 6:
            _mes = "Mes: Junio.";
            break;

        case 7:
            _mes = "Mes: Julio.";
            break;

        case 8:
            _mes = "Mes: Agosto.";
            break;

        case 9:
            _mes = "Mes: Septiembre.";
            break;

        case 10:
            _mes = "Mes: Octubre.";
            break;

        case 11:
            _mes = "Mes: Noviembre.";
            break;

        case 12:
            _mes = "Mes: Diciembre.";
            break;

        default:
            _month = "ERROR";
            break;
    }

    // Presentar datos
    console.log(`${_month}`);
}

document.getElementById("start10").onsubmit = iniciar;