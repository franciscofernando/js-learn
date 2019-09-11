// Destructuring más spread

const obj = {
	a: 'A',
	b: 'B',
	c: 'C',
	d: 'D'
};
const { a, b, ..._obj } = obj;


console.log(a, b, _obj);