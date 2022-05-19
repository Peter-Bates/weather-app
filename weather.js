class Weather {
    constructor(city, country) {
        this.apiKey = '91ade3421ebcde76a9faa7c4e3a6eeb2';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
       
       const responseData = await response.json();

       return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}