
var apiKey = require("./../.env").apiKey;
var convert = require("./../js/convert-temp.js").convert;

$(document).ready(function(){
  $("#citySearch").submit(function(event){
    event.preventDefault();
    $('#results').empty();
    $('#details').empty();
    var newCity = $("#city").val();
    $("#city").val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      $('#results').append("<h2>" + response.name + "</h2>");
      $('#details').append("<li>Humidity: " + response.main.humidity + "%</li>");
      $('#details').append("<li>Temperature (Kelvin): " + response.main.temp.toPrecision(5) + "°</li>");
      $('#details').append("<li>Temperature: " + convert(response.main.temp, 'f').toPrecision(2) + "°F</li>");
      $('#details').append("<li>Temperature: " + convert(response.main.temp, 'c').toPrecision(2) + "°C</li>");
      }).fail(function(error) {
        $('#results').text(error.responseJSON.message);
    });
  });
});
