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

export const getWeatherByCity = async (cityURL) => {
  const URL_API = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
// {"location":{
//     "name":"Sao Paulo",
//     "region":"Sao Paulo",
//     "country":"Brazil",
//     "lat":-23.53,
//     "lon":-46.62,
//     "tz_id":"America/Sao_Paulo",
//     "localtime_epoch":1691758936,
//     "localtime":"2023-08-11 10:02"
// },
// "current":{
//     "last_updated_epoch":1691758800,
//     "last_updated":"2023-08-11 10:00",
//     "temp_c":22.0,
//     "temp_f":71.6,
//     "is_day":1,
//     "condition":
//     {"text":"Sol",
//     "icon":"//cdn.weatherapi.com/weather/64x64/day/113.png",
//     "code":1000},
//     "wind_mph":2.2,
//     "wind_kph":3.6,
//     "wind_degree":332,
//     "wind_dir":"NNW",
//     "pressure_mb":1020.0,
//     "pressure_in":30.12,"precip_mm":0.0,
//     "precip_in":0.0,
//     "humidity":69,
//     "cloud":0,
//     "feelslike_c":23.4,
//     "feelslike_f":74.0,
//     "vis_km":10.0,
//     "vis_miles":6.0,
//     "uv":7.0,
//     "gust_mph":13.4,
//     "gust_kph":21.6
// }}
