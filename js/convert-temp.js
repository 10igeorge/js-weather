exports.convert = function(kelvin, scale) {
  if(scale === 'f') {
    return 1.8 * (kelvin - 273) + 32;
  } else if (scale === 'c') {
    return kelvin - 273.15;
  } else {
    return "Please try again";
  }
};
