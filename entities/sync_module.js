const printFirstFourArguments = (a, b, c, d) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};

const getMemoryUsageInMb = () => {
	return Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
};

module.exports = {
	printFirstFourArguments,
	getMemoryUsageInMb,
};