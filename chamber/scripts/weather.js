const apiKey = '8d714a9e648314b4e9c7eaaf4addf378'; // Replace with your OpenWeatherMap API key
const city = 'Belo Horizonte'; // Chamber location

async function fetchWeather() {
    try {
        // Fetch current weather data
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();

        // Fetch 3-day forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();

        // Display current weather
        displayCurrentWeather(currentWeatherData);

        // Display 3-day forecast
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data.</p>';
    }
}

function displayCurrentWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('weather-info').innerHTML = `
        <p>Current Temperature: ${temperature}°C</p>
        <p>Weather Description: ${description}</p>
    `;
}

function displayForecast(data) {
    const forecastContainer = document.createElement('div');
    forecastContainer.innerHTML = '<h3>3-Day Forecast</h3>';
    
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    
    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        const temp = forecast.main.temp;
        const desc = forecast.weather[0].description;

        forecastContainer.innerHTML += `
            <p>${date}: ${temp}°C, ${desc}</p>
        `;
    });

    document.getElementById('weather-info').appendChild(forecastContainer);
}

// Call the fetchWeather function to load the weather data
fetchWeather();