//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=de6afde2fb56fdb27c2e3e7f78c57626
// https://openweathermap.org/img/w/02d.png
class Weather {
  constructor(city, country) {
    this.apiKey = 'de6afde2fb56fdb27c2e3e7f78c57626';
    this.city = city;
    this.country = country;
  }

// fetch weather from api
async getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&appid=${this.apiKey}`)

  const responseData = await response.json();

  return responseData;
}

// Change weather location
changeLocation(city, country) {
  this.city = city;
  this.country = country;
}

}