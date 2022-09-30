function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #12\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _dia;       // Día de nacimiento
    let _mes;       // Nombre del mes
    let _numMes;    // Número del mes
    let _maxDias;   // Máxima cantidad de días del mes
    let _signo;     // Signo zodiacal

    const _n0 = 0;
    const _n1 = 1;
    const _n2 = 2;
    const _n3 = 3;
    const _n4 = 4;
    const _n5 = 5;
    const _n6 = 6;
    const _n7 = 7;
    const _n8 = 8;
    const _n9 = 9;
    const _n10 = 10;
    const _n11 = 11;
    const _n12 = 12;
    const _n20 = 20;
    const _n21 = 21;
    const _n22 = 22;
    const _n23 = 23;
    const _n29 = 29;
    const _n30 = 30;
    const _n31 = 31;

    const _lista = ["ERROR","Aries","Tauro","Geminis","Cancer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Picis"];



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Establecer la variable '_numMes'
    do {
        do {
            do {
                // Ingresar el número del mes
                _numMes = prompt(`Ingrese el mes de su nacimiento.\nEscriba el número del mes, no el nombre.`);
                if (_numMes == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_numMes)) {
                    alert(`No se ha ingresado un número.`);
                }
            } while (isNaN(_numMes));
    
            // Verificar si el número ingresado es un entero
            if (_numMes % _n1 != _n0) {
                alert(`El número ingresado no es válido.\n`);
            }
        } while (_numMes % _n1 != _n0);

        // Verificar si el número esta entre 1 y 12 (inclusive)
        if (_numMes < _n1 || _numMes > _n12) {
            alert(`El número ingresado no es válido.\n`);
            _temp = false;
        } else {
            _temp = true
        }
    } while (_temp == false);

    _numMes = parseInt(_numMes);

    // Identificar mes del año
    switch (_numMes) {
        case 1:
            _mes = "Enero";
            _maxDias = _n31;
            break;

        case 2:
            _mes = "Febrero";
            _maxDias = _n29;
            break;

        case 3:
            _mes = "Marzo";
            _maxDias = _n31;
            break;

        case 4:
            _mes = "Abril";
            _maxDias = _n30;
            break;

        case 5:
            _mes = "Mayo";
            _maxDias = _n31;
            break;

        case 6:
            _mes = "Junio";
            _maxDias = _n30;
            break;

        case 7:
            _mes = "Julio";
            _maxDias = _n31;
            break;

        case 8:
            _mes = "Agosto";
            _maxDias = _n31;
            break;

        case 9:
            _mes = "Septiembre";
            _maxDias = _n30;
            break;

        case 10:
            _mes = "Octubre";
            _maxDias = _n31;
            break;

        case 11:
            _mes = "Noviembre";
            _maxDias = _n30;
            break;

        case 12:
            _mes = "Diciembre";
            _maxDias = _n31;
            break;

        default:
            _mes = "ERROR";
            break;
    }

    // Convertir en string
    _mes = String(_mes);

    // Establecer la variable '_dia'
    do {
        do {
            do {
                do {
                    // Ingresar valor de '_dia'
                    _dia = prompt(`Ha escogido el mes de ${_mes}.\nIngrese el día de su nacimiento.`);
                    if (_dia == null) {
                        console.log(`Ejercicio cancelado.`);
                        return;
                    }
        
                    // Verificar si el caracter ingresado es un número
                    if (isNaN(_dia)) {
                        alert(`No se ha ingresado un número.`);
                    }
                } while (isNaN(_dia));
        
                // Verificar si el número ingresado es un entero
                if (_dia % _n1 != _n0) {
                    alert(`El número ingresado no es válido.\n`);
                }
            } while (_dia % _n1 != _n0);
        
            if (_dia < _n1) {
                alert(`El número ingresado no es válido.\n`);
            }
        } while (_dia < _n1);

        // Verificar si el número es igual o mayor que cero
        if (_dia > _maxDias) {
            alert(`El número ingresado no es válido.\n`);
        }
    } while (_dia > _maxDias);

    if ((_dia > _n20 && _numMes == _n3) || (_dia < _n21 && _numMes == _n4)) {

        _signo = _lista[_n1]; // ARIES

    } else if ((_dia > _n20 && _numMes == _n4) || (_dia < _n21 && _numMes == _n5)) {

        _signo = _lista[_n2]; // TAURO

    } else if ((_dia > _n20 && _numMes == _n5) || (_dia < _n22 && _numMes == _n6)) {

        _signo = _lista[_n3]; // GEMINIS

    } else if ((_dia > _n21 && _numMes == _n6) || (_dia < _n22 && _numMes == _n7)) {

        _signo = _lista[_n4]; // CANCER

    } else if ((_dia > _n21 && _numMes == _n7) || (_dia < _n23 && _numMes == _n8)) {

        _signo = _lista[_n5]; // LEO

    } else if ((_dia > _n22 && _numMes == _n8) || (_dia < _n23 && _numMes == _n9)) {

        _signo = _lista[_n6]; // VIRGO

    } else if ((_dia > _n22 && _numMes == _n9) || (_dia < _n23 && _numMes == _n10)) {

        _signo = _lista[_n7]; // LIBRA

    } else if ((_dia > _n22 && _numMes == _n10) || (_dia < _n23 && _numMes == _n11)) {

        _signo = _lista[_n8]; // ESCORPIO

    } else if ((_dia > _n22 && _numMes == _n11) || (_dia < _n22 && _numMes == _n12)) {

        _signo = _lista[_n9]; // SAGITARIO

    } else if ((_dia > _n21 && _numMes == _n12) || (_dia < _n21 && _numMes == _n1)) {

        _signo = _lista[_n10]; // CAPRICORNIO

    } else if ((_dia > _n20 && _numMes == _n1) || (_dia < _n20 && _numMes == _n2)) {

        _signo = _lista[_n11]; // ACUARIO

    } else {

        _signo = _lista[_n12]; // PICIS
    }

    console.log(`Naciste el día ${_dia} del mes de ${_mes}.\nTu signo es ${_signo}.`);
}

document.getElementById("start12").onsubmit = iniciar;