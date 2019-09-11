// Destructuring avanzado de un atributo en 2do nivel de un modulo importado
const { family: { family } } = require('../../entities');

// Destructuring de todos los elementos de un array
const [katherine, francisco, golfito, benito] = family;

// Destructuring del 3er elemento de un array
const [, , _golfito] = family;

console.log(Array.isArray(family) ? 'ARRAY' : '??');
console.log('FRANCISCO: ', francisco);
console.log('GOLFITO: ', _golfito);