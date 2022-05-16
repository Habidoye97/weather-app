
import { capitalizeWord, formatDate, formatTime} from "./Utils";

function renderWeatherInformation (renderedData, units) {
  let tempUnit = '°C'

  if (units === 'imperial') {
    tempUnit = '°F'
  }

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
  temperature = `${Math.round(renderedData.temperature)} ${tempUnit}`
}

export {
  renderWeatherInformation
}