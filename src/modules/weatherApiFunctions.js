async function fetchWeatherInfo (cityName, unit) {
  try {
    const dataRaw = await fetch (
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&APPID=6c4d940e4de82452ff470fc4841c5d68`, 
      {mode: 'cors'})
    const data = await dataRaw.json()
    console.log(data)
    getData(data)
  } catch (error) {
    console.log(error)
  }
};

async function fetchWeatherInfoWithCoord (lat, lon, unit) {
  try {
    const dataRaw= await fetch (
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unit}&appid=6c4d940e4de82452ff470fc4841c5d68`, 
      {mode: 'cors'})
    const data = await dataRaw.json()
    perpareDataFromCoord(data)
  } catch(error) {
    console.log(error)
  }
}

function getLocation() {
  const inputName = document.getElementById('search-weather-input');
  const cityName = inputName.value
  return cityName
}

let output = {};
let outputWithCord = {};

function perpareData (rawData) {
  if(rawData.cod === '404') {
    alert (rawData.message)
    return
  }
  output.lat = rawData.coord.lat
  output.lon = rawData.coord.lon
  output.city = rawData.name
  output.country = rawData.sys.country
  output.sunrise = rawData.sys.sunrise;
  output.sunset = rawData.sys.sunset;
  output.description = rawData.weather[0].description
  output.main = rawData.weather[0].main
  output.wind_deg = rawData.wind.deg
  output.wind_speed = rawData.wind.speed
  output.temperature = rawData.main.temp;
  output.minTemp = rawData.main.temp_min;
  output.maxTemp = rawData.main.temp_max;
  output.humidity = rawData.main.humidity;
  output.pressure = rawData.main.pressure;
  output.dt = rawData.dt
  output.timezone = rawData.timezone
  output.weatherIcon = rawData.weather[0].icon
  output.feels_like = rawData.main.feels_like
}

function perpareDataFromCoord (rawData){
  if(rawData.cod === '404') {
    alert (rawData.message)
    return
  }
  outputWithCord.daily = rawData.daily
  outputWithCord.hourly = rawData.hourly
}

async function getData (data) {
  perpareData(data)
}



export {
  fetchWeatherInfo,
  fetchWeatherInfoWithCoord,
  output,
  getLocation,
  outputWithCord
}

