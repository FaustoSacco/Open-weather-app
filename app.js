let url = `https://api.openweathermap.org/data/2.5/weather?appid=626f8543947f34b5d0f931ad4b7954ca&lat=51.5072&lon=0.1276&units=metric`;

async function callApi() {
  let response = await fetch(url);
  let data = await response.json();
  let temp = data.main.temp;
  let weather = data.weather[0].description;
  let sunrise = data.sys.sunrise;
  let sunset = data.sys.sunset;

  dateObj = new Date(sunrise * 1000);
  let sunriseHours = dateObj.getUTCHours();
  sunrise =
    leftFillNum(sunriseHours, 2) +
    ":" +
    leftFillNum(dateObj.getUTCMinutes(), 2);
  dateObj = new Date(sunset * 1000);

  let minutes = dateObj.getUTCMinutes();

  sunset =
    dateObj.getUTCHours() + ":" + leftFillNum(dateObj.getUTCMinutes(), 2);

  document.getElementById("temp").innerHTML = temp;
  document.getElementById("weather").innerHTML = weather;
  document.getElementById("sunrise").innerHTML = sunrise;
  document.getElementById("sunset").innerHTML = sunset;
  console.log(data);

  console.log(leftFillNum(minutes, 2));
}
callApi();

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}
