// Functions 

function getWeather(zip, apiKey, units='imperial') {
  // const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  
  const resPromise = fetch(path) //variable to fetch with path
  const jsonPromise = resPromise.then(res => res.json()) //fetch resolves promise and returns a result.json()
  
  return jsonPromise
}

export { getWeather };