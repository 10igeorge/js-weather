var convert = require('./../js/convert-temp.js').convert;

exports.forecast = function(fiveDays) {
  console.log(fiveDays.list[7].weather.description);
  for(var i = 7; i < fiveDays.list.length ; i += 8 ) {
    var date = new Date(fiveDays.list[i].dt * 1000);
    $('#forecast').append('<dt>Date: ' + date.toString() + '</dt>' );
    $('#forecast').append('<dd>Temperature: ' + convert(fiveDays.list[i].main.temp, 'f').toPrecision(2) + '°F</dd>');
    $('#forecast').append('<dd>Conditions: ' + fiveDays.list[i].weather[0].description + '</dd>');
  }
};
