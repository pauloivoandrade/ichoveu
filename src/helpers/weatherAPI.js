const TOKEN = b4cdc8159a994687a6422044231108;

export const searchCities = async (term) => {
  try {
    const URL_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
    const response = await fetch(URL_API);
    const data = await response.json();
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    } return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
