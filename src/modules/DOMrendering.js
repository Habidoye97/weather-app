
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
  const pressureUnit = 'hPa'
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
  const pressure = document.getElementById('pressure');
  pressure.textContent = `${renderedData.pressure} ${pressureUnit}`
  const windSpeed = document.getElementById('wind-speed');
  // round to 1 decimal place
  windSpeed.textContent = `${
    Math.round(renderedData.wind_speed * 10) / 10
  } ${speedUnit}`;
  const sunrise = document.getElementById('sunrise');
  sunrise.textContent = formatTime(renderedData.sunrise, renderedData.timezone);
  const sunset = document.getElementById('sunset');
  sunset.textContent = formatTime(renderedData.sunset, renderedData.timezone);
  const cloudiness = document.getElementById('cloudiness');
  cloudiness.textContent = `${renderedData.cloudiness} %`;
  
}

function renderDailyForecast(data, units) {
  
  let tempUnit = 'K';

  if (units === 'metric') {
    tempUnit = '°C'
  }
  
  if (units === 'imperial') {
    tempUnit = '°F';
  }

  // ##############################
  // render the day of week name
  // ##############################
  const dayPlusOneDay = document.querySelector(
    '#current-day-plus-one .forcast-daily_day'
  );

  dayPlusOneDay.textContent = formatDate(
    data.daily[1].dt,
    'day'
  );

  const dayPlusTwoDay = document.querySelector(
    '#current-day-plus-two .forcast-daily_day'
  );
  dayPlusTwoDay.textContent = formatDate(
    data.daily[2].dt,
    'day'
  );

  const dayPlusThreeDay = document.querySelector(
    '#current-day-plus-three .forcast-daily_day'
  );
  dayPlusThreeDay.textContent = formatDate(
    data.daily[3].dt,
    'day'
  );

  const dayPlusFourDay = document.querySelector(
    '#current-day-plus-four .forcast-daily_day'
  );
  dayPlusFourDay.textContent = formatDate(
    data.daily[4].dt,
    'day'
  );

  const dayPlusFiveDay = document.querySelector(
    '#current-day-plus-five .forcast-daily_day'
  );
  dayPlusFiveDay.textContent = formatDate(
    data.daily[5].dt,
    'day'
  );
  const dayPlusSixDay = document.querySelector(
    '#current-day-plus-six .forcast-daily_day'
  );
  dayPlusSixDay.textContent = formatDate(
    data.daily[6].dt,
    'day'
  );

  const dayPlusSevenDay = document.querySelector(
    '#current-day-plus-seven .forcast-daily_day'
  );
  dayPlusSevenDay.textContent = formatDate(
    data.daily[7].dt,
    'day'
  );

  const dayPlusOneTempHigh = document.querySelector(
    '#current-day-plus-one .forcast-daily_temperature-high'
  );
  dayPlusOneTempHigh.textContent = `${Math.round(
    data.daily[1].temp.max
  )} ${tempUnit}`;

  const dayPlusTwoTempHigh = document.querySelector(
    '#current-day-plus-two .forcast-daily_temperature-high'
  );
  dayPlusTwoTempHigh.textContent = `${Math.round(
    data.daily[2].temp.max
  )} ${tempUnit}`;

  const dayPlusThreeTempHigh = document.querySelector(
    '#current-day-plus-three .forcast-daily_temperature-high'
  );
  dayPlusThreeTempHigh.textContent = `${Math.round(
    data.daily[3].temp.max
  )} ${tempUnit}`;

  const dayPlusFourTempHigh = document.querySelector(
    '#current-day-plus-four .forcast-daily_temperature-high'
  );
  dayPlusFourTempHigh.textContent = `${Math.round(
    data.daily[4].temp.max
  )} ${tempUnit}`;

  const dayPlusFiveTempHigh = document.querySelector(
    '#current-day-plus-five .forcast-daily_temperature-high'
  );
  dayPlusFiveTempHigh.textContent = `${Math.round(
    data.daily[5].temp.max
  )} ${tempUnit}`;

  const dayPlusSixTempHigh = document.querySelector(
    '#current-day-plus-six .forcast-daily_temperature-high'
  );
  dayPlusSixTempHigh.textContent = `${Math.round(
    data.daily[6].temp.max
  )} ${tempUnit}`;

  const dayPlusSevenTempHigh = document.querySelector(
    '#current-day-plus-seven .forcast-daily_temperature-high'
  );
  dayPlusSevenTempHigh.textContent = `${Math.round(
    data.daily[7].temp.max
  )} ${tempUnit}`;

  const dayPlusOneTempLow = document.querySelector(
    '#current-day-plus-one .forcast-daily_temperature-low'
  );
  dayPlusOneTempLow.textContent = `${Math.round(
    data.daily[1].temp.min
  )} ${tempUnit}`;

  const dayPlusTwoTempLow = document.querySelector(
    '#current-day-plus-two .forcast-daily_temperature-low'
  );
  dayPlusTwoTempLow.textContent = `${Math.round(
    data.daily[2].temp.min
  )} ${tempUnit}`;

  const dayPlusThreeTempLow = document.querySelector(
    '#current-day-plus-three .forcast-daily_temperature-low'
  );
  dayPlusThreeTempLow.textContent = `${Math.round(
    data.daily[3].temp.min
  )} ${tempUnit}`;

  const dayPlusFourTempLow = document.querySelector(
    '#current-day-plus-four .forcast-daily_temperature-low'
  );
  dayPlusFourTempLow.textContent = `${Math.round(
    data.daily[4].temp.min
  )} ${tempUnit}`;

  const dayPlusFiveTempLow = document.querySelector(
    '#current-day-plus-five .forcast-daily_temperature-low'
  );
  dayPlusFiveTempLow.textContent = `${Math.round(
    data.daily[5].temp.min
  )} ${tempUnit}`;

  const dayPlusSixTempLow = document.querySelector(
    '#current-day-plus-six .forcast-daily_temperature-low'
  );
  dayPlusSixTempLow.textContent = `${Math.round(
    data.daily[6].temp.min
  )} ${tempUnit}`;

  const dayPlusSevenTempLow = document.querySelector(
    '#current-day-plus-seven .forcast-daily_temperature-low'
  );
  dayPlusSevenTempLow.textContent = `${Math.round(
    data.daily[7].temp.min
  )} ${tempUnit}`;

  const dayPlusOneIcon = document.querySelector(
    '.icon-day-plus-one-image'
  );
  dayPlusOneIcon.src = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`

  const dayPlusTwoIcon = document.querySelector(
    '.icon-day-plus-two-image'
  );
  dayPlusTwoIcon.src = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`

  const dayPlusThreeIcon = document.querySelector(
    '.icon-day-plus-three-image'
  );
  dayPlusThreeIcon.src = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`

  const dayPlusFourIcon = document.querySelector(
    '.icon-day-plus-four-image'
  );
  dayPlusFourIcon.src = `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`

  const dayPlusFiveIcon = document.querySelector(
    '.icon-day-plus-five-image'
  );
  dayPlusFiveIcon.src = `http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`

  const dayPlusSixIcon = document.querySelector(
    '.icon-day-plus-six-image'
  );
  dayPlusSixIcon.src = `http://openweathermap.org/img/wn/${data.daily[6].weather[0].icon}@2x.png`

  const dayPlusSevenIcon = document.querySelector(
    '.icon-day-plus-seven-image'
  );
  dayPlusSevenIcon.src = `http://openweathermap.org/img/wn/${data.daily[7].weather[0].icon}@2x.png`
}

export {
  renderWeatherInformation,
  renderWeatherDetails,
  renderDailyForecast
}