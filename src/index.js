import './style.css';

const cood = {}

async function getWeather() {
  const dataRaw = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6c4d940e4de82452ff470fc4841c5d68', {mode: 'cors'})
  const data = await dataRaw.json()
  cood.lat = data.coord.lat
  cood.lon = data.coord.lon
  console.log(data)
  
  const longLat = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${cood.lat}&lon=${cood.lon}&exclude=minutely&appid=6c4d940e4de82452ff470fc4841c5d68`, {mode: 'cors'})
  const longLatnew = await longLat.json()
  console.log(longLatnew)
}



getWeather()

console.log(cood)

