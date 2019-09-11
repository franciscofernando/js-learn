const { 
	asyncModule: { getWeather }
} = require('../../entities');


(async() => {
	// Promesa de promesas
	getWeather('santiago')
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			const mainData = res.weather[0].description;
			console.log('Segundo nivel:', mainData);
			return mainData;
		}, (err) => { // <--- esto es un anti patron
			console.log('ERRORCILLO!', err);
			return err;
		})
		.then((res) => {
			throw `Error en tercer nivel con respuesta: ${res}`;
		})
		.catch((err) => {
			console.log('ERROR!!', err);
		});

})();