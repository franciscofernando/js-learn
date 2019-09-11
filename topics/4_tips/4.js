// Un ejemplo de utilizacion de diccionarios y mapeo de arreglos

const obj = {
	products: [{
		name: 'apple',
		hallway: '133'
	}, {
		name: 'pear',
		hallway: '133'
	}, {
		name: 'coca-cola',
		hallway: '67'
	}],
	hallways: [{
		id: '133',
		name: 'fruits'
	}, {
		id: '67',
		name: 'drinks'
	}]
};


const hallwaysObj = {};

obj.hallways.forEach((hallway) => {
	hallwaysObj[hallway.id] = hallway;
});

const newProducts = obj.products.map((product) => {
	return {
		...product,
		hallway: hallwaysObj[product.hallway]
	};
});

console.log(newProducts);