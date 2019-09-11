// Ejemplo de un observable en rxjs

const { 
	asyncModule: { wait }
} = require('../../entities');
const { Observable } = require('rxjs');

const obs = new Observable(async (observer) => {
	await wait(1000, () => {
		observer.next(':D');
	});
	await wait(5000, () => {
		observer.next(':O');
	});
	observer.complete();
});

obs.subscribe((res) => {
	console.log('Llego respuesta:', res);
});

