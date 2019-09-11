// Ejemplo de funciones generadoras asincronas

const { 
	asyncModule: { wait, getWeather }
} = require('../../entities');

const cities = ['santiago', 'talca', 'valparaiso'];

async function* asyncCityWeatherGenerator(citiesArr) {
	citiesArr = [...citiesArr];
	while (citiesArr.length) {
    	yield getWeather(citiesArr.shift());
	}
}

(async () => {
  for await (let cityWeather of asyncCityWeatherGenerator(cities)) {
    console.log('Llego el clima!', cityWeather.data.weather[0]);
  }
})();