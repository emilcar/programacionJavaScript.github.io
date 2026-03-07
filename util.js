function print(mensaje) {
    document.writeln(mensaje)
}
const apiWheather = {
    key: '33d58c2db3804b710624d4a5316c6c48',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    city: 'Buenos Aires',       //FIXME deberia detectar la ciudad
    internet: false
}

function getZonaHoraria() {
    //El formato de zona horaria lo da el navegador de internet
    return Intl
        .DateTimeFormat()
        .resolvedOptions()
        .timeZone
        .replace("/", " ")
        .replace("/", " ")
        .replace("_", " ")
        .replace("America","América")
}

/**
 * Función que convierte grados kelvin a celcius
 * @param {*} kelvin 
 * @returns 
 */
function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15)
}

/**
 * Devuelve la temperatura ambiente consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperatura() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la sensación térmica ambiente consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getSensacionTermica() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.feels_like)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la temperatura mínima consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperaturaMin() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp_min)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la temperatura máxima consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperaturaMax() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp_max)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string con el clima consultada en un API meteorológico
 * por el momento no se conoce el listado de enums posibles
 * @returns string clima
 */
function getClima() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.weather[0].description
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la zona, consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * Se espera solucionar bug detectado en algunas configuraciones usando el API de JS
 * @returns string zona
 */
function getZona() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.timezone.replace("/", " ").replace("/", " ").replace("_", " ")
        }
    } catch (error) {
        return "error"
    }
}

/**
 * @deprecated este método esta deprecado por que la API devuelve una región no un continente
 * Devuelve un string el nombre del continente, consultado en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string continente
 */
function getContinente() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.continent
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la hora en que anochece consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getAnochece() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            var timestamp = json.sys.sunset
            var fecha = new Date(timestamp * 1000)
            var anio = fecha.getFullYear()
            var hora = fecha.getHours()
            var minuto = fecha.getMinutes()
            return hora + " horas y " + minuto + " minutos"
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la hora en que anochece consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getAmanece() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            const timestamp = json.sys.sunrise
            const fecha = new Date(timestamp * 1000)
            const anio = fecha.getFullYear()
            const hora = fecha.getHours()
            const minuto = fecha.getMinutes()
            return hora + " horas y " + minuto + " minutos"
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la región, consultado en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string región
 */
function getRegion() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.continent
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre del país consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string pais
 */
function getPais() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.country
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la provincia consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * basado en la dirección del ISP
 * @returns string provincia
 */
function getProvincia() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.region
        }
    } catch (error) {
        return "error"
    }
}

