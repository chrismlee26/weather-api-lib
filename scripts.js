// Functions 

async function getWeather(zip, apiKey, units='imperial') {
  // const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

  // try/catch is similar to if/else. we lost error handling bc async
  try {  //try to fetch path here, and return if it works
    const res = await fetch(path)
    const json = await res.json()
    return json
  } catch(err) { //if it fails, handle errors here
    return err
  }
}

export { getWeather };