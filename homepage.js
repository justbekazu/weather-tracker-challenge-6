var repoContainerEl = document.querySelector("#repos-container");
var repoSearchEl = document.querySelector("#repo-search-term");

var getWeather = function (weather) {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={'54a22dc1f9964b76e99bfaae21f5e3e9'}"
  );
  console.log(response);

  //format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      displayRepos(data, user);
      console.log(data);
    });
  });
};
