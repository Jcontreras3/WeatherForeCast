 let Weather = document.getElementById('Weather');
 let Input = document.getElementById('Input');
 let searchBtn = document.getElementById('searchBtn');
 let result = document.getElementById('result')
function Getweather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47c793edde19307a0101a22dead25af6")
    .then(resp => resp.json())
    .then(data => {
        result.textContent= data.name;
    });
}
Getweather();

 searchBtn.addEventListener('click', function(){
     GetInput();
 })

 function GetInput(){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Input.value}&APPID=47c793edde19307a0101a22dead25af6`)
     .then(resp => resp.json())
     .then(data =>{
         result.textContent = data.name;
         console.log(data);
     })
 }

 function GetweatherType(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47c793edde19307a0101a22dead25af6")
    .then(resp => resp.json())
    .then(data => {
        Weather.textContent= data.weather.main;
        console.log(data.weather.main)
    });
 }
 GetweatherType();