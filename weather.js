"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=2ab5a5b18737e945b5af9cae2e8e1ffe";

$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
    
        console.log("name", result.name);
        $("#location").text(result.name);

        let F = Math.round(result.main.temp * (9 / 5) - 459.67);
        let Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);

        let windSpeed = Math.round(result.wind.speed / .44704)
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        $("#sky").text(result.weather[0].description);



    }
});