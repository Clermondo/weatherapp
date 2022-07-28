let weather = {
    apiKey: "ccf4b37b32e9c6b58ba914ac75b18442",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&appid=" 
            + this.apiKey
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
        
    }
};