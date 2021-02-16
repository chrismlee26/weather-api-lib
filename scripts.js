const linkPath = 'https://api.openweathermap.org/data/2.5/weather?'

// Functions 
function getWeatherByZip(zip, apiKey, units='imperial') {
  const path = `${linkPath}zip=${zip}&appid=${apiKey}&units=${units}`
  return getWeather(path)
}

function getWeatherByCity(city, apiKey, units='imperial') {
  const path = `${linkPath}q=${city}&appid=${apiKey}&units=${units}`
  return getWeather(path)
}

function getWeatherByGeo(lat, lon, apiKey, units='imperial') {
  const path = `${linkPath}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  return getWeather(path)
}

async function getWeather(path) {
  try {
    const res = await fetch(path)
    const json = await res.json()
    const weatherData = {
      name : json.name,
      country : json.sys.country,
      code : json.cod,
      coordinates : json.coord,
      temp : json.main.temp,
      feels_like : json.main.feels_like,
      temp_min : json.main.temp_min,
      temp_max : json.main.temp_max,
      description : json.weather[0].description 
    }
    return weatherData
  } catch(err) {
    return err
  }
}

export { 
  getWeatherByZip,
  getWeatherByCity,
  getWeatherByGeo,
  getWeather
};