const obj = {
	a: 'A',
	b: 'B',
	c: 'C'
};

// Destructuring del primer parametro de una funcion
const showParams = ({ a, b, c: C}, B) => {
	console.log(a, b, C, B);
};

showParams(obj, ':D');