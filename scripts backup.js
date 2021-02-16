// Functions 

function getWeather(zip, apiKey, callBack) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      temp.innerHTML = json.main.temp
      desc.innerHTML = json.weather[0].description
    })
    .catch(err => console.log(err.message))
}



// function callBack() {
//     .then(json => {
//       temp.innerHTML = json.main.temp
//       desc.innerHTML = json.weather[0].description
//     })

//     .catch(err => console.log(err.message))
// }

export { getWeather };