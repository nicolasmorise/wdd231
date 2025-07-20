const wheatherIcon = document.getElementById("wheather-icon");
const temperature = document.getElementById("temperature");
const highs = document.getElementById("highs");
const lows = document.getElementById("lows");
const humidity = document.getElementById("humidity");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const todayWeather = document.getElementById("today-wheather");
const tommorrowWheather = document.getElementById("tommorrow-wheather");
const day3 = document.getElementById("day3")

const lat = '-23.68795496416746';
const lon = '-46.500574542496025';
const api_key = '8d714a9e648314b4e9c7eaaf4addf378';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayinfo(data);
      console.log(data);
      return data; 
      
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function apiForecastFetch() {
  try {
    const response = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      displayinfoForecast(data);
      console.log(data);
      return data; 
      
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function displayinfo(data) {
    try{
      console.log('hello');
      const imgsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      wheatherIcon.setAttribute('src', imgsrc);
      temperature.innerHTML = `Temperature: ${data.main.temp}°F`;
      highs.innerHTML = `Highs: ${data.main.temp_max}°F`;
      lows.innerHTML = `Lows: ${data.main.temp_min}°F`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    }
    catch (error) {
      console.log(error)
    }
}

async function displayinfoForecast(data) {
    try {
      todayWeather.innerHTML =  `<h2><strong>Sunday:</strong> ${data.list[1].main.temp}°F</h2>`
      tommorrowWheather.innerHTML = `<h2><strong>Monday:</strong> ${data.list[0].main.temp}°F</h2>`
      day3.innerHTML = `<h2><strong>Tuesday:</strong> ${data.list[2].main.temp}°F</h2>`
    }
    catch (error){
      console.log(error)
    }
}



apiFetch();
apiForecastFetch();

