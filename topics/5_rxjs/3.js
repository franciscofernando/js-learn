// Obtener los climas de multiples ciudades con rxjs

const { of } = require('rxjs');
const { mergeMap, map, toArray } = require('rxjs/operators');

const { 
	asyncModule: { getWeatherObs }
} = require('../../entities');

const cities = ['Valparaiso', 'Atacama', 'Talca', 'Melipilla'];

of(...cities)
.pipe(
	mergeMap(city => getWeatherObs(city)),
	map(res => res.data.weather[0]),
	toArray()
)
.subscribe(res => {
	console.log(res);
});