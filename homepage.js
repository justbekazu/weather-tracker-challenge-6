var searchButton = $(".searchBtn");
var apiKey = "54a22dc1f9964b76e99bfaae21f5e3e9";

searchButton.onCLick(function () {
  var searchInput = $(".searchInput").val();
  var urlFiveDay =
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" +
    searchInput +
    "&Appid=" +
    apiKey +
    "&units=imperial";
  if (searchInput == "") {
    return;
  } else {
    $.ajax({
      url: urlFiveDay,
      method: "GET",
    }).then(function (response) {
      var day = [0, 8, 16, 24, 32];
      var weatherEl = $(".weatherEl").addClass("card-text");

      day.forEach(function (i) {
        var timeUTC1 = new Date(response.list[i].dt * 1000);
        timeUTC1 = timeUTC1.toLocaleDateString("en-US");
        weatherEl.append(
          "<div class=fiveDayColor>" +
            "<p>" +
            timeUTC1 +
            "</p>" +
            `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` +
            "<p>" +
            "Temperature: " +
            response.list[i].main.temp +
            "</p>" +
            "<p>" +
            "Humidity: " +
            response.list[i].main.humidity +
            "%" +
            "</p>" +
            "</div>"
        );
      });
    });
  }
});
