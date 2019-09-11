// Obtener el clima con rxjs

const { 
	asyncModule: { getWeatherObs }
} = require('../../entities');


getWeatherObs('santiago')
	.subscribe((res) => {
		console.log('RES:', res.data);
	}, (err) => {
		console.log('ERR', err.response.data);
	});