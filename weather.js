https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=de6afde2fb56fdb27c2e3e7f78c57626

class Weather {
  constructor(city, state) {
    this.apiKey = 'de6afde2fb56fdb27c2e3e7f78c57626';
    this.city = city;
    this.state = state;
  }

// fetch weather from api
async getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)

  const responseData = await response.json();

  return responseData.weather;
}

// Change weather location
changeLocation(city, state) {
  this.city = city;
  this.state = state;
}

}