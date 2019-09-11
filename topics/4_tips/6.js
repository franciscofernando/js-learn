// Ejemplo de inyeccion de parametros a un objeto

const obj = {
	regard: ':D',
	regards: {
		emoji: '👋',
		es: 'Hola!',
		en: 'Hello!',
		fr: 'Salut!',
	},
};

const moreRegards = {
	jp: 'こんにちは',
	ru: 'привет!'
};


const mergedRegards = Object.assign(obj.regards, moreRegards);

//console.log(mergedRegards);
console.log(obj);