const url = "https://api.openweathermap.org/data/2.5/";
const key = "3d3a2dacd61cdbf530f277220ed8135d";
//https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=3d3a2dacd61cdbf530f277220ed8135d&units=metric&langs=tr


const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(searchbar.value);
    }

}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query).then(weather => {
        return weather.json();
    }).then(displayResult)
}

const displayResult = (result) => {
    console.log(result)
    document.querySelector(".city").innerHTML = result.name + "," + result.sys.country;
    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.floor(result.main.temp)}°C`;
    let desc = document.querySelector(".desc");
    desc.innerHTML = result.weather[0].description;
    let minmax = document.querySelector(".minmax");
    minmax.innerHTML = `${Math.floor(result.main.temp_min)}°c / ${Math.floor(result.main.temp_max)}°c`

}
const searchbar = document.getElementById("searchBar");
searchbar.addEventListener("keypress", setQuery);