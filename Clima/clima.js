function getWeather(apiKey) {
  $(document).ready(function() {
    $("#get-weather-btn").click(function() {
      let latitude = $("#latitude").val();
      let longitude = $("#longitude").val();
      let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
      $.getJSON(url, function(data) {
        let temperature = Math.round(data.main.temp - 273.15);
        let weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        let description = data.weather[0].description;
        $("#temperature").html(temperature + "&deg;C");
        $("#weather-icon").attr("src", weatherIcon);
        $("#description").html(description);
      });
    });
  });
}

var apiKey = "7e5b6b7868109071f4fa2f11f764e08f";
getWeather(apiKey);
