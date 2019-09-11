const Dog = require('./dog');
const Person = require('./person');

const people = [
	new Person({ name: 'Katherine', age: 25, gender: 'Female' }),
	new Person({ 
		name: 'Francisco', age: 24, gender: 'Male', characteristics: {
			hair: 'large',
			glasses: true
		} 
	}),
];
const dogs = [
	new Dog({ name: 'Golfito', age: 4 }),
	new Dog({ name: 'Benito', age: 0 }),
];

const family = [
	...people,
	...dogs,
];

module.exports = {
	family,
	people,
	dogs,
	Dog,
	Person,
};