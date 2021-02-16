// Functions 

async function getWeather(zip, apiKey, weatherCallBack, units='imperial') {
  // const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path) // fetch the path
    .then((res) => { // promise to return a response (named res)
      return res.json() // return the promise-- response (res) as json
    }).then(json => { // stream json through callback
      weatherCallBack(json) // json streams into this object
    })
    .catch( failCallBack ) //handle errors
    
    function failCallBack() {
      (err => console.log(err.message))
    }
}




export { getWeather };