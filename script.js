const weatherCard = document.querySelector(".weather-card");
const clearBtn = document.getElementById("clearBtn");
const loading = document.getElementById("loading");
const weatherIcon = document.getElementById("weatherIcon");
const error = document.getElementById("error");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
async function getWeather() {

    const city = cityInput.value;

    if (city.trim() === "") {
        error.textContent = "Please enter a city name!";
        return;
    }

    const apiKey = "YOUR_API_KEY";


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url);

    loading.textContent = "Loading...";

   try {
    const response = await fetch(url);
    const result = await response.json();

    loading.textContent = "";

    if (!response.ok) {
        error.textContent = "City not found!";
        return;
    }

    error.textContent = "";
    weatherCard.style.display = "block";

    displayWeather(result);

} catch (err) {
    loading.textContent = "";
    error.textContent = "Something went wrong. Check your internet connection.";
    console.error(err);
}
    loading.textContent = "";

    if (!response.ok) {
        error.textContent = "City not found!";
        return;
    }

    error.textContent = "";
    weatherCard.style.display = "block";

    displayWeather(result);

    console.log(result);
}
searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

function displayWeather(result) {
temperature.textContent =  result.main.temp + " °C";
humidity.textContent = "Humidity:" + result.main.humidity + "%";
wind.textContent = "Wind Speed:" + result.wind.speed + " m/s";
feelsLike.textContent = "Feels like: " + result.main.feels_like + " °C";

pressure.textContent = "Pressure: " + result.main.pressure + " hPa";

visibility.textContent = "Visibility: " + (result.visibility / 1000) + " km";

minTemp.textContent = "Min temperature: " + result.main.temp_min + " °C";

maxTemp.textContent = "Max temperature: " + result.main.temp_max + " °C";
const iconCode = result.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

clearBtn.addEventListener("click", function () {

    cityInput.value = "";

    cityName.textContent = "";
    temperature.textContent = "";
    description.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
    feelsLike.textContent = "";
    pressure.textContent = "";
    visibility.textContent = "";
    minTemp.textContent = "";
    maxTemp.textContent = "";

    weatherIcon.src = "";
    error.textContent = "";
    loading.textContent = "";
});
displayWeather(result);