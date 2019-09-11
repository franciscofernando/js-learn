// Obtener el clima con rxjs

const { 
	asyncModule: { getWeatherObs }
} = require('../../entities');


getWeatherObs('santiago') // Voy a preguntar por el clima de santiago
	.subscribe((res) => {
		console.log('RES:', res.data); // Se ejecuta al resolver
	}, (err) => {
		console.log('ERR', err.response.data); // Se ejecuta al fallar
	});