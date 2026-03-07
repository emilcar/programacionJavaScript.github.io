
/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function write(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function writeln(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function print(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function printx(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimir(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimirx(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para entrada de datos, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular un input básico
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a mostrar} mensaje 
 * @returns valor ingresado
 */
function input(mensaje) {
    return prompt(mensaje)
}

/**
 * función usada para entrada de datos, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular un input de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a mostrar} mensaje 
 * @returns valor ingresado
 */
function entrada(mensaje) {
    return prompt(mensaje)
}
const apiWheather = {
    key: '33d58c2db3804b710624d4a5316c6c48',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    city: 'Buenos Aires',       //FIXME deberia detectar la ciudad
    internet: false
}




/**
 * Función que devuelve la hora en un string
 * @returns Hora
 */
function getHora() {
    const fecha = new Date()
    const hora = fecha.getHours()
    const minuto = fecha.getMinutes()
    return hora + " horas y " + minuto + " minutos"
}

/**
 * Función que devuelve la fecha actual en un string
 * @returns Fecha
 */
function getFecha() {
    const fecha = new Date()
    const diaMes = fecha.getDate()
    const diaSem = fecha.getDay()
    const nroMes = fecha.getMonth()
    const anio = fecha.getFullYear()

    var nombreDia = ''
    if (diaSem == 0) nombreDia = 'domingo'
    if (diaSem == 1) nombreDia = 'lunes'
    if (diaSem == 2) nombreDia = 'martes'
    if (diaSem == 3) nombreDia = 'miércoles'
    if (diaSem == 4) nombreDia = 'jueves'
    if (diaSem == 5) nombreDia = 'viernes'
    if (diaSem == 6) nombreDia = 'sábado'

    var nombreMes = ''
    if (nroMes == 0) nombreMes = 'enero'
    if (nroMes == 1) nombreMes = 'febrero'
    if (nroMes == 2) nombreMes = 'marzo'
    if (nroMes == 3) nombreMes = 'abril'
    if (nroMes == 4) nombreMes = 'mayo'
    if (nroMes == 5) nombreMes = 'junio'
    if (nroMes == 6) nombreMes = 'julio'
    if (nroMes == 7) nombreMes = 'agosto'
    if (nroMes == 8) nombreMes = 'septiembre'
    if (nroMes == 9) nombreMes = 'octubre'
    if (nroMes == 10) nombreMes = 'noviembre'
    if (nroMes == 11) nombreMes = 'diciembre'

    return nombreDia + ", " + diaMes + " de " + nombreMes + " del año " + anio
}