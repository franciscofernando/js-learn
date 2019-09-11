//Ejemplo de como recorrer un objeto en base a sus atributos

const obj = {
	a: 'A',
	b: 'B',
	c: 'C',
	d: 'D',
};

// Recorrer un objeto en base a sus atributos
const arr = Object.keys(obj).map(
	(attr) => obj[attr]
);


console.log(arr);