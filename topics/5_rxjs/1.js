// Ejemplo de un observable en rxjs

const { 
	asyncModule: { wait }
} = require('../../entities');
const { Observable } = require('rxjs');

const obs = new Observable(async (observer) => {
	await wait(1000, () => {
		observer.next(':D'); // 1er dato en subscribe
	});
	await wait(5000, () => {
		observer.next(':O'); // 2do dato en subscribe
	});
	observer.complete(); // Termina la subscripcion
});

obs.subscribe((res) => {
	console.log('Llego respuesta:', res);
});

