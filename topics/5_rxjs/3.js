// Obtener los climas de multiples ciudades con rxjs

const { of } = require('rxjs');
const { mergeMap, map, toArray } = require('rxjs/operators');

const { 
	asyncModule: { getWeatherObs }
} = require('../../entities');

const cities = ['Valparaiso', 'Atacama', 'Talca', 'Melipilla'];

of(...cities) // Transformo el arreglo en parametros y me subscribo a ellos
.pipe( // Genero cola de procesos reactivos en base al stream de parametros
	mergeMap(city => getWeatherObs(city)), // Transformo la ciudad en un observable del clima de la ciudad
	map(res => res.data.weather[0]), // Proceso la respuesta
	toArray() // Genero un arreglo en base a todas las respuestas
)
.subscribe(res => {
	console.log(res);
});