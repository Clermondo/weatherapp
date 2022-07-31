let weather = {
    apiKey: "ccf4b37b32e9c6b58ba914ac75b18442",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&appid=" 
            + this.apiKey
            + "&units=imperial"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description, main} = data.weather[0]
        const {temp, humidity} = data.main
        const {speed} = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innertext = description;
        document.querySelector(".temp").innerText = temp + "°" 
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"
        document.querySelector(".wind").innerText = "Wind speed: " + "km/h"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
})