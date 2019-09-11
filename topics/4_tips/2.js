// Ejemplo de como filtrar arreglos

const { 
	family: { family, Person, Dog }
} = require('../../entities');

// Filtrado de un arreglo en base al contenido de sus elementos
const people = family.filter(personOrDog => personOrDog instanceof Person);
const dogs = family.filter(personOrDog => personOrDog instanceof Dog);

console.log(people);
console.log(dogs);