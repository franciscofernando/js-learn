const obj = {
	regard: ':D',
	regards: {
		emoji: '👋',
		es: 'Hola!',
		en: 'Hello!',
		fr: 'Salut!',
	},
};

const {
	regard, // Destructuring de un atributo
	regards: {
		emoji,
		es: esRegard, //Destructuring con asignación de alias
		en: enRegard,
		fr: frRegard
	}
} = obj;


console.log(
	regard,
	emoji,
	esRegard,
	enRegard,
	frRegard
);