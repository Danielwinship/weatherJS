// init storage
const storage = new Storage();
// get stored location data
  const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);


// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getweather);


// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Get and display weather
  getweather();

  // set location
  storage.setLocationData(city,country);
  

  // Close modal
  $('#locModal').modal('hide');
});



function getweather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
