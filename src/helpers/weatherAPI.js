const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const URL_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};
console.log(searchCities('sao paulo'));

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
