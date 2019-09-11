// Ejemplo casico de un codigo sin destructuring

const obj = {
	regard: ':D',
	regards: {
		emoji: '👋',
		es: 'Hola!',
		en: 'Hello!',
		fr: 'Salut!',
	},
};

const regard = obj.regard;
const emoji = obj.regards.emoji;
const esRegard = obj.regards.es;
const enRegard = obj.regards.en;
const frRegard = obj.regards.fr;


console.log(
	regard,
	emoji,
	esRegard,
	enRegard,
	frRegard
);