// Ejemplo de promise all

const { 
	asyncModule: { wait, getWeather }
} = require('../../entities');


(async() => {

	const cities = ['santiago', 'talca', 'la serena'];

	try {
		// Promesas en paralelo
		const citiesWeather = await Promise.all(
			cities.map(
				city => getWeather(city).catch(
					(err) => { console.log(city + ' Fallo :('); }
				)
			)
		).then((responses) => {
			return responses.map(res => res.data.weather[0].description);
		});

		console.log(citiesWeather);
	} catch(err) {
		console.log('Error!!');
	}

})();

