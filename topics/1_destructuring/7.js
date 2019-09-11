const { family: { family } } = require('../../entities');

const [, francisco] = family;


//const [firstDynamicAttr, secondDynamicAttr] = ['name', 'age'];
const firstDynamicAttr = 'name';
const secondDynamicAttr = 'age';

const {
	[firstDynamicAttr]: _1, // Destructuring computado de un atributo en base a un valor
	[secondDynamicAttr]: _2 // ""
} = francisco;

console.log(_1, _2);