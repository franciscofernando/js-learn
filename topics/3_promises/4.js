// Ejemplo de tiempos de ejecución con promesas y await

const { 
	asyncModule: { wait, getWeather }
} = require('../../entities');


(async() => {
	getWeather('Florida')
		.then(async (res) => {
			await wait(1000, () => {
				console.log(res.data);
			});
		});

	for(let i = 0; i < 10; i++) {
		await wait(1000, () => {
			console.log(':D');
		});
	}

})();


(async() => {
	for(let i = 0; i < 10; i++) {
		await wait(1000, () => {
			console.log(':O');
		});
	}

})();

console.log('Termino el proceso!');