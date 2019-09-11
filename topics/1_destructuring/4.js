// Destructuring simple de un atributo de un modulo importado
const { family: { family, dogs } } = require('../../entities');

if (family) {
	console.log('Existe family');
	if (Array.isArray(family)) {
		console.log('Family es un array');
		if (family.length) {
			console.log(family);
		}
	}
}