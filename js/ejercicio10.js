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

    const _n0 = 0;
    const _n1 = 1;

    const _ene = [1,"Enero"];
    const _feb = [2,"Febrero"];
    const _mar = [3,"Marzo"];
    const _abr = [4,"Abril"];
    const _may = [5,"Mayo"];
    const _jun = [6,"Junio"];
    const _jul = [7,"Julio"];
    const _ago = [8,"Agosto"];
    const _sep = [9,"Septiembre"];
    const _oct = [10,"Octubre"];
    const _nov = [11,"Noviembre"];
    const _dic = [12,"Diciembre"];



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    while ((_mes < _ene[0]) || (_mes > _dic[0]) || (_mes % _n1 != _n0)) {

        // Ingresar número
        _mes = parseInt(prompt(`Ingrese un número entero entre ${_ene[0]} y ${_dic[0]}.`));

        // Si se presiona "Cancelar" en el prompt
        if (_mes == null) {
            // Cancelar el ejercicio
            return;
        }
    }

    // Identificar mes del año
    switch (_mes) {

        case _ene[_n0]:
            _mes = _ene[_n1];
            break;

        case _feb[_n0]:
            _mes = _feb[_n1];
            break;

        case _mar[_n0]:
            _mes = _mar[_n1];
            break;

        case _abr[_n0]:
            _mes = _abr[_n1];
            break;

        case _may[_n0]:
            _mes = _may[_n1];
            break;

        case _jun[_n0]:
            _mes = _jun[_n1];
            break;

        case _jul[_n0]:
            _mes = _jul[_n1];
            break;

        case _ago[_n0]:
            _mes = _ago[_n1];
            break;

        case _sep[_n0]:
            _mes = _sep[_n1];
            break;

        case _oct[_n0]:
            _mes = _oct[_n1];
            break;

        case _nov[_n0]:
            _mes = _nov[_n1];
            break;

        case _dic[_n0]:
            _mes = _dic[_n1];
            break;

        default:
            _mes = "ERROR";
            break;
    }

    // Presentar datos
    console.log(`Mes ingresado: ${_mes}`);
}

document.getElementById("start10").onsubmit = iniciar;