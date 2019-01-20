"use strict"
//Construct URL with Key
const url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=2ab5a5b18737e945b5af9cae2e8e1ffe";
// Make API call
$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
    // Retrieve name of city
        let displayCity = `Current weather in ${result.name}`;
        $("#location").html(displayCity);
    //Retrieve and calculate temperature
        let F = Math.round(result.main.temp * (9 / 5) - 459.67);
        let displayTemp = `Temperature: ${F}&#176;F`;
        $("#temperature").html(displayTemp);
    //Retrieve and calculate wind speed
        let windSpeed = Math.round(result.wind.speed / .44704)
        let displayWind = `Wind: ${windSpeed} mph`
        $("#wind").text(displayWind);
    //Retrieve and calculate sky condition
        let displaySky = `Sky condition: ${result.weather[0].description}`
        $("#sky").text(displaySky);



    }
});