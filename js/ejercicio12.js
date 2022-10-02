function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #12\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES


    let _dia = "UAS";                       // Día de nacimiento
    let _mes = "UAS";                       // Nombre del mes
    let _nombreMes;                 // Número del mes
    let _maxDias;                   // Máxima cantidad de días del mes
    let _signo;                     // Signo zodiacal

    let _temp;

    const _n0 = 0;
    const _n1 = 1;                  // Corresponde al mes 1 y al signo 1
    const _n2 = 2;                  // Corresponde al mes 2 y al signo 2
    const _n3 = 3;                  // Corresponde al mes 3 y al signo 3
    const _n4 = 4;                  // Corresponde al mes 4 y al signo 4
    const _n5 = 5;                  // Corresponde al mes 5 y al signo 5
    const _n6 = 6;                  // Corresponde al mes 6 y al signo 6
    const _n7 = 7;                  // Corresponde al mes 7 y al signo 7
    const _n8 = 8;                  // Corresponde al mes 8 y al signo 8
    const _n9 = 9;                  // Corresponde al mes 9 y al signo 9
    const _n10 = 10;                // Corresponde al mes 10 y al signo 10
    const _n11 = 11;                // Corresponde al mes 11 y al signo 11
    const _n12 = 12;                // Corresponde al mes 12 y al signo 12

    const _mesMinimo = 1;           // Mínima cantidad de meses en un año
    const _mesMaximo = 12;          // Máxima cantidad de meses en un año

    const _diasMin = 1              // Mínima cantidad de días en un mes
    const _diasMax1 = 29;           // Máxima cantidad de días posibles para Febrero
    const _diasMax2 = 30;           // Máx. cantidad de días posibles para Abril, Junio, Septiembre y Noviembre
    const _diasMax3 = 31;           // Máx. cantidad de días posibles para el resto de los meses

    const _ariesStart = 21;         // Inicia Aries
    const _ariesEnd = 20;           // Termina Aries

    const _tauroStarts = 21;        // Inicia Tauro
    const _tauroEnds = 20;          // Termina Tauro

    const _geminisStarts = 20;      // Inicia Geminis
    const _geminisEnds = 20;        // Termina Geminis

    const _cancerStarts = 22;       // Inicia Cancer
    const _cancerEnds = 21;         // Termina Cancer

    const _leoStarts = 22;          // Inicia Leo
    const _leoEnds = 22;            // Termina Leo

    const _virgoStarts = 23;        // Inicia Virgo
    const _virgoEnds = 22;          // Termina Virgo

    const _libraStarts = 23;        // Inicia Libra
    const _libraEnds = 22;          // Termina Libra

    const _escorpioStarts = 23;     // Inicia Escorpio
    const _escorpioEnds = 22;       // Termina Escorpio

    const _sagitarioStarts = 23;    // Inicia Sagitario
    const _sagitarioEnds = 21;      // Termina Sagitario

    const _capricornioStarts = 22;  // Inicia Capricornio
    const _capricornioEnds = 20;    // Termina Capricornio

    const _acuarioStart = 21;       // Inicia Acuario
    const _acuarioEnds = 19;        // Termina Acuario

    const _piscisStarts = 20;       // Inicia Piscis
    const _piscisEnds = 20;         // Termina Piscis

    const _error = "ERROR";

    let _pass = false;
    let _quit = false;

    const _mesesCon30 = [4,6,9,11]
    const _mesesCon31 = [1,3,5,7,8,10,12]

    const _listaMeses = ["ERROR","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    const _listaZodiaco = ["ERROR","Aries","Tauro","Geminis","Cancer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"];



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    // Función para registrar la edad
    function ingresarMes(_mensaje) {
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

            // Verificar si el número es incorrecto
            if (isNaN(_temp) || (_temp  % _n1 != _n0) || (_temp < _mesMinimo) || (_temp > _mesMaximo)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero entre ${_mesMinimo} y ${_mesMaximo} (inclusive).`);
            }

        } while (isNaN(_temp) || (_temp  % _n1 != _n0) ||  (_temp < _mesMinimo) || (_temp > _mesMaximo));

        // Regresar valor de '_temp'
        return _temp;
    }

    // Función para registrar la edad
    function ingresarDia(_mensaje) {
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

            // Verificar si el número es incorrecto
            if (isNaN(isNaN(_temp) || (_temp  % _n1 != _n0) || (_temp < _diasMin) || (_temp > _diasMax3))) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero entre ${_diasMin} y ${_diasMax3} (inclusive).`);
            }

        } while (isNaN(isNaN(_temp) || (_temp  % _n1 != _n0) || (_temp < _diasMin) || (_temp > _diasMax3)));

        // Regresar valor de '_temp'
        return _temp;
    }


    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Obtener el mes de nacimiento
    if (_mes == "UAS") {

        // Asignar número al mes de nacimiento
        _mes = ingresarMes(`Ingrese el mes de su nacimiento.\nSolo se admiten números enteros entre ${_mesMinimo} y ${_mesMaximo}.`);

        // Si se presionó el botón cancelar en el prompt
        if (_quit == true) {
            console.log(`Ejercicio cancelado.`);
            return;
        }

        // Aplicar parseINt
        _mes = parseInt(_mes);

    }

    // Obtener nombre a través de la lista de meses
    _nombreMes = _listaMeses[_mes];

    // Convertir en string, por si las dudas
    _nombreMes = String(_nombreMes);

    // Obtener día de nacimiento
    if (_dia == "UAS") {

        while (_pass == false) {

            // Asignar un número al día de nacimiento
            _dia = ingresarDia(`Ingrese el día de su nacimiento.\nSolo son válidos los números enteros entre ${_n1} y ${_diasMax3}`);

            // Si se presionó el botón cancelar en el prompt
            if (_quit == true) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Comprobar que el día y mes son compatibles
            if (_mes == _n2 && _dia <= _diasMax1) { _pass = true; }
            else if (_mesesCon30.includes(_mes) && _dia <= _diasMax2) { _pass = true; }
            else if (_mesesCon31.includes(_mes) && _dia <= _diasMax3) { _pass = true; }
            else { _pass = false}


            if (_pass == false) {

                // Mensaje si '_dia' y '_mes' no corresponde
                alert(`[Entrada inválida].\nHa ingresado: ${_dia} de ${_nombreMes}.\nLa combinación entre el mes y el día no corresponden a una fecha posible.\nIntente nuevamente.`);

            } else {

                // Aplicar parseINt
                _dia = parseInt(_dia);

            }
        }
    }

    // Identificar errores al ingresar el mes mes del año
    /*
    switch (_mes) {

        case _n2:
            if (_dia > _diasMax1) { _nombreMes = _error}
            break;

        case _mesesCon30.includes(_mes):
            if (_dia > _diasMax2) { _nombreMes = _error}
            break;

        case _mesesCon31.includes(_mes):
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;
        /*
        case _n1:
            // Enero
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n2:
            // Febrero
            if (_dia > _diasMax1) { _nombreMes = _error}
            break;

        case _n3:
            // Marzo
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n4:
            // Abril
            if (_dia > _diasMax2) { _nombreMes = _error}
            break;

        case _n5:
            // Mayo
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n6:
            // Junio
            if (_dia > _diasMax2) { _nombreMes = _error}
            break;

        case _n7:
            // Julio
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n8:
            // Agosto
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n9:
            // Septiembre
            if (_dia > _diasMax2) { _nombreMes = _error}
            break;

        case _n10:
            // Octubre
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        case _n11:
            // Noviembre
            if (_dia > _diasMax2) { _nombreMes = _error}
            break;

        case _n12:
            // Diciembre
            if (_dia > _diasMax3) { _nombreMes = _error}
            break;

        default:
            // Error
            _nombreMes = _error;
            break;
    }*/

    if ((_dia >= _ariesStart && _mes == _n3) || (_dia <= _ariesEnd && _mes == _n4)) {

        _signo = _listaZodiaco[_n1]; // ARIES

    } else if ((_dia >= _tauroStarts && _mes == _n4) || (_dia <= _tauroEnds && _mes == _n5)) {

        _signo = _listaZodiaco[_n2]; // TAURO

    } else if ((_dia >= _geminisStarts && _mes == _n5) || (_dia <= _geminisEnds && _mes == _n6)) {

        _signo = _listaZodiaco[_n3]; // GEMINIS

    } else if ((_dia >= _cancerStarts && _mes == _n6) || (_dia <= _cancerEnds && _mes == _n7)) {

        _signo = _listaZodiaco[_n4]; // CANCER

    } else if ((_dia >= _leoStarts && _mes == _n7) || (_dia <= _leoEnds && _mes == _n8)) {

        _signo = _listaZodiaco[_n5]; // LEO

    } else if ((_dia >= _virgoStarts && _mes == _n8) || (_dia <= _virgoEnds && _mes == _n9)) {

        _signo = _listaZodiaco[_n6]; // VIRGO

    } else if ((_dia >= _libraStarts && _mes == _n9) || (_dia <= _libraEnds && _mes == _n10)) {

        _signo = _listaZodiaco[_n7]; // LIBRA

    } else if ((_dia >= _escorpioStarts && _mes == _n10) || (_dia <= _escorpioEnds && _mes == _n11)) {

        _signo = _listaZodiaco[_n8]; // ESCORPIO

    } else if ((_dia >= _sagitarioStarts && _mes == _n11) || (_dia <= _sagitarioEnds && _mes == _n12)) {

        _signo = _listaZodiaco[_n9]; // SAGITARIO

    } else if ((_dia >= _capricornioStarts && _mes == _n12) || (_dia <= _capricornioEnds && _mes == _n1)) {

        _signo = _listaZodiaco[_n10]; // CAPRICORNIO

    } else if ((_dia >= _acuarioStart && _mes == _n1) || (_dia <= _acuarioEnds && _mes == _n2)) {

        _signo = _listaZodiaco[_n11]; // ACUARIO

    } else if ((_dia >= _piscisStarts && _mes == _n2) || (_dia <= _piscisEnds && _mes == _n3)) {

        _signo = _listaZodiaco[_n12]; // PISCIS

    } else {

        console.log(_error)
        return;

    }

    console.log(`Naciste el día ${_dia} del mes de ${_nombreMes}.\nTu signo es ${_signo}.`);
}

document.getElementById("start12").onsubmit = iniciar;