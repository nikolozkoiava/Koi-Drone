const app = document.querySelector('.weather_app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector('.cloudy');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('#locationInput'); // Changed selector to use the form's ID
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

let cityInput = "Tbilisi";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (search.value.length == 0) {
        alert('Please type in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
    }
});

function dayOfTheWeek(day, month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()];
};

function fetchWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ab3e236420a54573841234059242601&q=${cityInput}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            throw new Error('City not found');
        }

        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;
        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_kph + "km/h";

        const dateTime = data.location.localtime;
        const y = parseInt(dateTime.substr(0, 4));
        const m = parseInt(dateTime.substr(5, 2));
        const d = parseInt(dateTime.substr(8, 2));
        const time = dateTime.substr(11);
        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.location.name;

        const iconUrl = data.current.condition.icon;
        icon.src = `https:${iconUrl}`;

        let timeOfDay = data.current.is_day ? 'day' : 'night';
        btn.style.background = (data.current.condition.code == 1000) ? (timeOfDay == "night" ? "#181e27" : "#e5ba92") : "#4d72aa";
    })
    .catch(error => {
        if (error.message === 'City not found') {
            alert('City not found, please try again');
        } else {
            alert('There was a problem fetching the weather data');
        }
    });
}


