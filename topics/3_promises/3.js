const { 
	asyncModule: { wait, getWeather }
} = require('../../entities');


(async() => {

	getWeather('Florida')
		.then((res) => {
			console.log(res.data);
		});

	await wait(10000); // await "congela" el proceso
	console.log('Pasaron 10 segundos');

})();