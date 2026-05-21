const weatherCodes = {
    0: ["Clear Sky", "sun.png"],
    1: ["Mainly Clear", "sun.png"],
    2: ["Partly Cloudy", "cloudy.png"],
    3: ["Overcast", "overcast.png"],
    45: ["Fog", "fog.png"],
    48: ["Depositing Rime Fog", "fog.png"],
    51: ["Light Drizzle", "rain.png"],
    53: ["Moderate Drizzle", "rain.png"],
    55: ["Dense Drizzle", "rain.png"],
    56: ["Light Freezing Drizzle", "rain.png"],
    57: ["Dense Freezing Drizzle", "rain.png"],
    61: ["Slight Rain", "rain.png"],
    63: ["Moderate Rain", "rain.png"],
    65: ["Heavy Rain", "rain.png"],
    66: ["Light Freezing Rain", "rain.png"],
    67: ["Dense Freezing Rain", "rain.png"],
    71: ["Light Snow", "snow.png"],
    73: ["Moderate Snow", "snow.png"],
    75: ["Heavy Snow", "snow.png"],
    77: ["Snow Grains", "snow.png"],
    80: ["Slight Rain Showers", "rain.png"],
    81: ["Moderate Rain Showers", "rain.png"],
    82: ["Violent Rain Showers", "rain.png"],
    85: ["Slight Snow Showers", "snow.png"],
    86: ["Heavy Snow Showers", "snow.png"],
    95: ["Thunderstorm", "thunderstorm.png"],
    96: ["Thunderstorm With Slight Hail", "thunderstorm.png"],
    99: ["Thunderstorm With Heavy Hail", "thunderstorm.png"]
};

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");

let weatherImageDisplay = document.querySelector("#weather-image-box");
let countryDisplay = document.querySelector("#country-display");
let cityDisplay = document.querySelector("#city-display");
let conditionDisplay = document.querySelector("#condition-display");
let windspeedDisplay = document.querySelector("#windspeed-display");
let temperatureDisplay = document.querySelector("#temperature-display");

searchButton.addEventListener("click", () => {
    getWeather();
});

async function getWeather() {
    let city = cityInput.value.trim();
    cityInput.value = "";

    //geocoding fetch
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    const longitude = geoData.results[0].longitude;
    const latitude = geoData.results[0].latitude;
    const country = geoData.results[0].country;

    //weather fetch
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    console.log(weatherData)

    temperatureDisplay.textContent = `temperature: ${weatherData.current_weather.temperature} °C`;
    windspeedDisplay.textContent = `windspeed: ${weatherData.current_weather.windspeed} km/h`;
    cityDisplay.textContent = `city: ${city}`;
    countryDisplay.textContent = `country: ${country}`;

    let [weatherCond, weatherImage] = weatherCodes[weatherData.current_weather.weathercode];

    conditionDisplay.textContent = `condition: ${weatherCond}`;

    weatherImageDisplay.style.backgroundImage = `url('img/${weatherImage}')`;
}