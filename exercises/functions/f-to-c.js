function convertFtoC(fahrenheitTemperature) {
  let celciusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return celciusTemperature;
}

let currentTemp = 92;
let celciusTemp = convertFtoC(currentTemp);
console.log(celciusTemp.toFixed(2));
