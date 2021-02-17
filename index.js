/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { getWeatherByZip, getWeatherByCity, getWeatherByGeo } from './scripts.js'; // remove getWeather after if not needed.
import { apiKeySecret } from './config.js';
// ------------------------------------------------------
// Developer Code

// Get Element references
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const feelsLikeEl = document.getElementById('feels_like');
const minMaxEl = document.getElementById('min_max');
const formEl = document.getElementById('form');
const inputInput = document.getElementById('input-field');
// Define event listeners
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = inputInput.value;
  const apiKey = apiKeySecret;

  // eslint-disable-next-line consistent-return
  function catchAllWeather() {
    if (input % 1 === 0 && input.length === 5) { // Input is full int + 5 digits
      return getWeatherByZip(input, apiKey); // weather by zip -------------------------------
    }
    if (typeof input === 'string' && !input.includes(',')) { // input is string or string instance & no commas
      return getWeatherByCity(input, apiKey); // weather by city -----------------------------
    }
    if (input.indexOf(' ') >= 1 && input.includes(',')) { // has space and comma
      const splitInput = input.split(' ', 2); // split lat lon input into array of 2
      const input1 = splitInput[0].replace(',', ''); // new var from array @ index 0 & remove comma
      const input2 = splitInput[1]; // new variable from array @ index 1
      return getWeatherByGeo(input1, input2, apiKey); // weather by geo coordinates -----------
    }
    descEl.innerHTML = 'ERROR, Please enter a 5 Digit Zip Code, City Name or Latitude, Longitude';
  }

  catchAllWeather().then((data) => {
    tempEl.innerHTML = data.temp;
    descEl.innerHTML = `There's ${data.description} in  ${data.name}, ${data.country}`;
    feelsLikeEl.innerHTML = `It feels like ${data.feels_like} degrees`;
    minMaxEl.innerHTML = `Today's high is ${data.temp_max} and today's low is ${data.temp_min}`;
  }).catch((err) => console.log(err.message));
});
