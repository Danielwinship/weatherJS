// init weather object
const weather = new Weather('Tampa', 'us');

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getweather);

function getweather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}
