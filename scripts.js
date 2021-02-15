// Functions 

function getWeather(zip, apiKey, weatherCallBack) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
  // callback goes somewhere heres
    .then((res) => {
      return res.json()
    }).then(json => {
      weatherCallBack(json)
    })
    .catch( failCallBack )
    
    function failCallBack() {
      (err => console.log(err.message))
    }
}




export { getWeather };