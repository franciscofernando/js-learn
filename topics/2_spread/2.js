const obj = {
	a: 'A',
	b: 'B',
	c: 'C'
};

// Creación de un nuevo objeto basandome en los atributos de obj
const _obj = {
	...obj,
	otroAtributo: 'XD',
	c: 'D', // Piso el valor original de c
};

console.log(obj === _obj);
console.log(_obj);