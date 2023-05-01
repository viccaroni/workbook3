function convertCtoF(celciusTemperature) {
    let fahrenheitTemperature = (celciusTemperature * (9/5) + 32);
    return fahrenheitTemperature;
  }
  
  let currentTemp = 92;
  let fahrenheitTemp = convertCtoF(currentTemp);
  console.log(fahrenheitTemp.toFixed(2));
  