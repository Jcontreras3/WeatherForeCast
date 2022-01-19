function Getweather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47c793edde19307a0101a22dead25af6")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
}
Getweather();
