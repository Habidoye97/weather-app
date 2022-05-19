
import { capitalizeWord, formatDate, formatTime} from "./Utils";
import { output } from "./weatherApiFunctions";

function renderWeatherInformation (renderedData, units) {
  let tempUnit = 'K'

  if (units === 'imperial') {
    tempUnit = '°F'
  }

  if (units === 'metric') {
    tempUnit = '°C'
  }

  
  const icon = renderedData.weatherIcon

  const weatherDescription = document.querySelector('.weather-info_description');
  weatherDescription.textContent = capitalizeWord(renderedData.description);
  const city = document.querySelector('.weather-info_city');
  const country = document.querySelector('.weather-info_country');
  city.textContent = renderedData.city
  country.textContent = renderedData.country
  const date = document.querySelector('.weather-info_date');
  date.textContent = formatDate(renderedData.dt)
  const time = document.querySelector('.weather-info_time');
  time.textContent = formatTime(renderedData.dt, renderedData.timezone)
  const temperature = document.querySelector('.weather-info_temperature');
  temperature.textContent = `${Math.round(renderedData.temperature)} ${tempUnit}`;
  const weatherIcon = document.getElementById('weather-info_img');
  
  weatherIcon.src = `http://openweathermap.org/img/wn/${renderedData.weatherIcon}@2x.png`
}

function renderWeatherDetails(renderedData, units) {
  let tempUnit = 'K'
  let speedUnit = 'm/s'
  if (units === 'imperial') {
    tempUnit = '°F'
    speedUnit = 'mph'
  }
  if (units === 'metric') {
    tempUnit  = '°C'
  }

  const temperatureFeelsLike = document.getElementById('feels-like');
  temperatureFeelsLike.textContent = `${Math.round(
    renderedData.feels_like
  )} ${tempUnit}`;
  const humidity = document.getElementById('humidity');
  humidity.textContent = `${renderedData.humidity} %`;
  const chanceOfRain = document.getElementById('chance-of-rain');
  const windSpeed = document.getElementById('wind-speed');
  // round to 1 decimal place
  windSpeed.textContent = `${
    Math.round(renderedData.wind_speed * 10) / 10
  } ${speedUnit}`;
}

export {
  renderWeatherInformation,
  renderWeatherDetails
}