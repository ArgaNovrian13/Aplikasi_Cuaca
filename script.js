// Fungsi untuk menambahkan kota ke dropdown
function populateCityDropdown() {
  const citySelect = document.getElementById("city-select");
  provinces.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

// Panggil fungsi untuk menambahkan kota saat halaman dimuat
window.onload = populateCityDropdown;

async function getWeather() {
  const apiKey = "17ecfd3d0b1729b3c8d3e8b06a0e110a"; // API key Anda
  const city = document.getElementById("city-select").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const weatherResult = document.getElementById("weather-result");
  weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <table>
        <tr>
          <th>Suhu</th>
          <td>${data.main.temp} °C</td>
        </tr>
        <tr>
          <th>Cuaca</th>
          <td>${data.weather[0].description}</td>
        </tr>
      </table>
  `;
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("bi-brightness-high-fill");
    themeIcon.classList.add("bi-moon-fill");
  } else {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-brightness-high-fill");
  }
}

// Set default theme
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("light-mode");
});
