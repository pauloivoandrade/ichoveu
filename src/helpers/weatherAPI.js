const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const URL_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    } return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// export const getWeatherByCity = async (cityURL) => {
//   const URL_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
//   try{
//     const response = await fetch(URL_API);
//     const data = await response.json();
//   }
// };
