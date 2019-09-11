const axios = require('axios');
const axiosObservable = require('axios-observable').Axios;

const wait = async (msTime, callback) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (callback) {
				callback();
			}
			resolve();
		}, msTime);
	});
};

const getWeather = async (city) => {
	return axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=4f44283ece984e0f09405441a6f535ee`
	);
};

const getWeatherObs = (city) => {
	return axiosObservable.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=4f44283ece984e0f09405441a6f535ee`
	);
};

const getWikiObs = (topic) => {
	return axiosObservable.get(
		`https://es.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${topic}`
	);
};


module.exports = {
	wait,
	getWeather,
	getWeatherObs,
	getWikiObs,
};