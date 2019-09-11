// Factory de promesas
const promiseCreator = async (number) => {
	// Creación de promesa
	return new Promise((resolve, reject) => {
		if (number % 2 === 0) {
			resolve(number * 2);
		} else {
			reject(':(');
		}
	});
};

promiseCreator(4)
	.then((res) => {
		console.log('Primera promesa exitosa', res);
	})
	.finally(() => {
		console.log('Chau!');
	})
	.catch((err) => {
		console.log('Primera promesa erronea', err);
	});

promiseCreator(3)
	.then((res) => {
		console.log('Segunda promesa exitosa', res);
	})
	.finally(() => {
		console.log('error??');
	})
	.catch((err) => {
		console.log('Segunda promesa erronea', err);
	})
	.finally(() => {
		console.log('Chau 2!');
	});