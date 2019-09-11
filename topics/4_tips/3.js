// Ejemplo de como mapear un arreglo

const arr = ['santigo', 'talca', 'valparaiso'];

const _arr = arr.map((city) => {
	return city + ', de Chile';
});

console.log(_arr);