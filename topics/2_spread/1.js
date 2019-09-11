const { 
	family: { family, Person }, 
	syncModule: { printFirstFourArguments }
} = require('../../entities');

console.log('Largo original: ', family.length);

// Creación de un nuevo arreglo basandome en los atributos de family
const _family = [
	new Person({ name: 'Pepito', age: '66', gender: 'male' }),
	...family,
	new Person({name: 'Juancho Pancho', age: '77', gender: 'male'}),
];

console.log('Largo despues de spread', _family.length);

printFirstFourArguments(..._family);

console.log('¿Existe Juancho Pancho?', _family[_family.length - 1])