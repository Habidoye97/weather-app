import './style.css';

import { fetchWeatherInfo, output, fetchWeatherInfoWithCoord, getLocation, outputWithCord } from './modules/weatherApiFunctions';
import { renderWeatherInformation, renderWeatherDetails, renderDailyForecast } from './modules/DOMrendering';
import { fromUnixTime } from 'date-fns';


const standardUnit = document.getElementById('standard');
const metricUnit = document.querySelector('#metric');
const imperialUnit = document.getElementById('imperial')
const searchBtn = document.getElementById('search');

let unit = 'standard'
let initialCity = 'ibadan'
let changeUnit = false
let lastCity;

async function getWeatherData(unit, initialLoad = false) {
  try {
    let cityName;
    
    if(initialLoad) {
      cityName = initialCity
      lastCity = initialCity
    }

    if (!initialLoad) {
      if(changeUnit) {
        cityName = lastCity;
      } else {
        cityName = getLocation()
        if(cityName){
          lastCity = cityName
        }else {
          return
        }
      }
    }

    console.log(lastCity)
    if(!cityName) {
      console.log(lastCity)
      return
    }

    await fetchWeatherInfo(cityName, unit)
    renderWeatherInformation(output, unit)
    renderWeatherDetails(output, unit)
    await fetchWeatherInfoWithCoord(output.lat, output.lon)
    console.log(outputWithCord)
    renderDailyForecast(outputWithCord, unit)
    
    changeUnit = false;

  } catch (error) {
    alert(error)
  }

  document.getElementById('search-weather-input').value = '';
}

function setActiveButton(option) {
  const unitOption = document.querySelectorAll('.change-unit');
  unitOption.forEach((button) => {
    if (option) {
      button.classList.remove('active-unit');
    }
  });

  option.classList.add('active-unit');
}

searchBtn.addEventListener('click', async () => {
  
  getWeatherData(unit)
})

standardUnit.addEventListener('click', async () => {
  unit = 'standard'
  changeUnit = true
  await getWeatherData(unit)
  setActiveButton(document.querySelector('#standard'));
});

metricUnit.addEventListener('click', async () => {
  unit = 'metric';
  changeUnit = true
  await getWeatherData(unit)
  setActiveButton(document.querySelector('#metric'));
})

imperialUnit.addEventListener('click', async () => {
  unit = 'imperial';
  changeUnit = true
  await getWeatherData(unit)
  setActiveButton(document.querySelector('#imperial'));
})

getWeatherData(unit, true)
setActiveButton(document.querySelector('#standard'));

console.log(fromUnixTime(1653055200))




