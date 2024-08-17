    const apiKey = "85ed3b6795c5d1fbc94ae09ac04f26a5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');

    async function checkWeather(city){
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await res.json();

        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    }
    searchBtn.addEventListener("click",() => {
        checkWeather(searchBox.value);
    });