document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;
  if (currentPage.includes("temperature")) loadTemperature();
  if (currentPage.includes("humidity")) loadHumidity();
  if (currentPage.includes("uv")) loadUV();
  if (currentPage.includes("wind")) loadWind();
});

async function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    if (currentPage.includes("index")) {
      localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
    }
    return;
  }

  try {
    const response = await fetch("sample.json");
    const data = await response.json();
    const cityData = data.find(
      (item) => item.cityName.toLowerCase() === city.toLowerCase()
    );

    if (cityData) {
      localStorage.setItem("weatherData", JSON.stringify(cityData));
      localStorage.setItem("lastCity", city);
      alert("Weather data loaded. Navigate to the relevant page.");
    } else {
      alert("City not found.");
    }
  } catch (error) {
    alert("Failed to load weather data.");
    localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
    console.error(error);
  }
}

function loadTemperature() {
  const data = JSON.parse(localStorage.getItem("weatherData"));
  if (data) {
    document.getElementById(
      "temperatureData"
    ).innerText = `${data.temperatureCelsius}°C`;
    updateIcon(
      "temperatureIcon",
      data.temperatureCelsius > 20 ? "yellow" : "blue"
    );
    localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
  }
}

function loadHumidity() {
  const data = JSON.parse(localStorage.getItem("weatherData"));
  if (data) {
    document.getElementById("humidityData").innerText = `${
      data.humidity * 100
    }%`;
    updateIcon("humidityIcon", data.humidity > 0.7 ? "blue" : "gray");
    localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
  }
}

function loadUV() {
  const data = JSON.parse(localStorage.getItem("weatherData"));
  if (data) {
    document.getElementById("uvData").innerText = data.uvIndex;
    updateIcon("uvIcon", data.uvIndex > 7 ? "red" : "green");
    localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
  }
}

function loadWind() {
  const data = JSON.parse(localStorage.getItem("weatherData"));
  if (data) {
    document.getElementById("windData").innerText = data.windSpeed;
    updateIcon("windIcon", parseInt(data.windSpeed) > 20 ? "orange" : "black");
    localStorage.removeItem("weatherData"); // Clear old data when returning to the home page
  }
}

function updateIcon(iconId, color) {
  const icon = document.getElementById(iconId);
  if (icon) icon.style.color = color;
}

function toggleTemp() {
  const tempElem = document.getElementById("temperatureData");
  if (!tempElem) return;
  let currentTemp = tempElem.innerText;
  if (currentTemp.includes("°C")) {
    let celsius = parseFloat(currentTemp);
    let fahrenheit = (celsius * 9) / 5 + 32;
    tempElem.innerText = `${fahrenheit.toFixed(1)}°F`;
  } else {
    let fahrenheit = parseFloat(currentTemp);
    let celsius = ((fahrenheit - 32) * 5) / 9;
    tempElem.innerText = `${celsius.toFixed(1)}°C`;
  }
}
