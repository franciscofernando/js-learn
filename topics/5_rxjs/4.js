// Obtener el clima e informacion de multiples ciudades con rxjs

const { of, combineLatest } = require('rxjs');
const { mergeMap, map, toArray } = require('rxjs/operators');

const { 
	asyncModule: { getWeatherObs, getWikiObs }
} = require('../../entities');

const cities = ['Valparaiso', 'Atacama', 'Talca', 'Melipilla'];


of(...cities)
.pipe(
	mergeMap(city => {
		return combineLatest( // Genero 2 procesos asincronos de subscripciones para el clima e info en wiki
			getWeatherObs(city),
			getWikiObs(city)
		);
	}),
	map(([weatherResponse, wikiResponse]) => { // Destructuro las respuestas
		const weatherData = weatherResponse.data.weather[0].description;
		let wikiData = wikiResponse.data.query.pages;
			wikiData = wikiData[Object.keys(wikiData)[0]].extract.split(/\./g).shift();
		
		return { // Devuelvo un objeto con los valores de las respuesta procesadas
			weather: weatherData,
			info: wikiData
		};
	}),
	toArray() // Genero un arreglo de objeto con los valores procesados
)
.subscribe((res) => {
	console.log(res);
});