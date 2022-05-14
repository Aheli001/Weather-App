// "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
const weatherApi = {
    key: "776c6cab815cfd6635b0e8a11a59aa44",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}
const SearchInputBox = document.getElementById('inputbox');
// Event Listener Function on keypress
SearchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        console.log(SearchInputBox.value);
        getWeatherReport(SearchInputBox.value);
    }
    
});
// get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
// show weather report 
function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = (`${weather.name}, ${weather.sys.country}`);
    let temperature = document.getElementById('temp');
    temperature.innerHTML = (`${Math.round(weather.main.temp)}&deg;C`);
    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/Clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/Clouds.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/Clear.jpg')";
        
    } else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/Rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/SNow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/Thunderstorm.jpg')";
        
    } else if(weatherType.textContent == 'Sunny') {
        
        document.body.style.backgroundImage = "url('images/Sunny.jpg')";
    } else if(weatherType.textContent == 'Mist') {
        
        document.body.style.backgroundImage = "url('images/Mist.jpg')";
        
    }
}
// date manage 
function dateManage(dates){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dates.getFullYear();
    let month = months[dates.getMonth()];
    let date = dates.getDate();
    let day = days[dates.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}
