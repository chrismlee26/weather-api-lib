// Functions 

async function getWeather(zip, apiKey, units='imperial') {
  // const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

  // try/catch is similar to if/else. we lost error handling bc async
  try {  //try to fetch path here, and return if it works
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)
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
  } catch(err) { //if it fails, handle errors here
    return err
  }
}

export { getWeather };