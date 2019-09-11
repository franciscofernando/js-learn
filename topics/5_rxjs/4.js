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
		return combineLatest(
			getWeatherObs(city),
			getWikiObs(city)
		);
	}),
	map(([weatherResponse, wikiResponse]) => {
		const weatherData = weatherResponse.data.weather[0].description;
		let wikiData = wikiResponse.data.query.pages;
			wikiData = wikiData[Object.keys(wikiData)[0]].extract.split(/\./g).shift();
		
		return {
			weather: weatherData,
			info: wikiData
		};
	}),
	toArray()
)
.subscribe((res) => {
	console.log(res);
});