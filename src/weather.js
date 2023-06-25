const API_KEY = "5e09e3443be3178e6288e1bd56cfcb26";


function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather_box = document.getElementById("weather");
        const name = data.name;
        const weather = data.weather[0].main;
        const country = data.sys.country;
        const temp = data.main.temp;
        weather_box.innerHTML = `${country} ${name}'s weather is ${weather} and temperature is ${temp}.`;
    });

    
}

function onGeoError() {
    alert("Can't find no weather information.")
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

