var apiKey = require("./../.env").apiKey;

$(document).ready(function(){
  $("#citySearch").submit(function(event){
    event.preventDefault();
    var newCity = $("#city").val();
    $("#city").val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&appid=' + apiKey, function(response) {
      console.log(response);
      $('#results').append("<h2>" + response.name + "</h2>");
      $('#results').append("<h4>The humidity in " + response.name + " is " + response.main.humidity + "%</h4>");
    });
  });
});
