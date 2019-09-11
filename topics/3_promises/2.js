// Para usar await es necesario ejecutarse en una funcion asincrona
(async() => {

	const promiseCreator = async (number) => {
		return new Promise((resolve, reject) => {
			if (number % 2 === 0) {
				resolve(number * 2);
			} else {
				reject(':(');
			}
		});
	};

	let res1;
	let res2;

	// Las promesas con await deben estar contenidas dentro de un try
	try {
		res1 = await promiseCreator(4);
	} catch(err) {
		res1 = err;
	}
	
	try {
		res2 = await promiseCreator(3);
	} catch(err) {
		res2 = err;
	}
	
	console.log(res1, res2);

})();