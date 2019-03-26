// init weather object
const weather = new Weather('Tampa', 'us');


// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getweather);



function getweather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
