# weather-api

![GitHub language count](https://img.shields.io/github/languages/count/chrismlee26/weather-api-lib)
![GitHub top language](https://img.shields.io/github/languages/top/chrismlee26/weather-api-lib)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/chrismlee26/weather-api-lib)

## Welcome

This WeatherAPI Project is a Neumorphic Dark-Mode Weather Website.

Built in Javascript ES6 and HTML, this repo operates with [Open Weather Map API](https://openweathermap.org).

v1.1.3

## Weather Library

`scripts.js` contains a library that could be used by anyone who wanted to use the OpenWeatherMap API in any project they might create. There are 3 functions built into this file. You are expected to provide your own API key from openweathermap.org. `index.js` and `index.html` are included for an example of operation. The variable apiKey can be inserted in line #19 of `scripts.js` or imported through a `config.js` which was not included and should be added into your `.gitignore` to prevent unauthorized access.

1. `getWeatherByZip()` allows searching by zip code.

- **(params)** are:
  - `zip`: A 5 digit USA based zip code
  - `apiKey`: You will need to input your own API Key for your project.
  - `units`: No entry will default to 'imperial', but options are 'metric' or 'kelvin')

2. `getWeatherByCity()` allows searching by city name.

- **(params)** are:
  - `city`: City Name
  - `apiKey`: Your API Key
  - `units`

3. `getWeatherByGeo()` allows searching with Latitude & Longitude.

- **(params)** are:
  - `lat`: Latitude
  - `lon`: Longitude
  - `apiKey`: Your API Key
  - `units`

All functions take input through a single input field and resolve to a promise that returns temperature, a short weather description, what the local weather feels like and the daily minimum and maximum temperature into HTML elements. The input field can differentiate between USA Zip code, City Name or Latitude/Longitude geo coordinates.

**scripts.js** is a self contained library for API calls.

index.js contains the scripts that allow index.html to function which is part of this repo but not necessary for your library.

## Operation

`fetch()` resolves promises to set the temperature, description on elements in the DOM. The `getWeatherX()` functions are handled by a callback. A `Promise` simplifies and streamline the asynchronous code. `async` and `await` keywords are used with Promise to streamline the code. Additionally, the script.js file streamlines the 'openweatherorg' API's JSON data for better organization.

The `getWeatherbyX()` functions are automatically chosen within the `catchAllWeather()` function and resolved with If statements. This is done in a seperate `index.js` file as the `scripts.js` library file only contains code for reusable API calls.

## Run

$ Open project in live server to run in your browser.

$ npm install for dependencies.

## Updates

1. Moved scripts from HTML into a `scripts.js` file.
2. Linted with ESLINT according to AirBNB's guidelines.
3. Added README.md
