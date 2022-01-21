import { dev, prod } from "./environment.js";

 let Weather = document.getElementById('Weather');
 let Input = document.getElementById('Input');
 let searchBtn = document.getElementById('searchBtn');
 let city = document.getElementById('city')
 let Temp = document.getElementById('Temp')

 let apiKey = '&units=imperial&APPID=';

 if(prod.isLive){
     apiKey += prod.apiKey;
 }else{
     apiKey += dev.apiKey;
 }
 
function Getweather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk+${apiKey}`)
    .then(resp => resp.json())
    .then(data => {
        city.textContent = data.name; Weather.textContent = data.weather[0].description; Temp.textContent = data.main.temp;
        console.log(data.weather[0])
    });
}
Getweather();

 searchBtn.addEventListener('click', function(){
     GetInput();
 })

 function GetInput(){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Input.value}+${apiKey}`)
     .then(resp => resp.json())
     .then(data =>{
         city.textContent = data.name, Weather.textContent = data.weather[0].description, Temp.textContent = data.main.temp;
         console.log(data);
     })
 }

//   function GetweatherType(){
//      fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47c793edde19307a0101a22dead25af6")
//      .then(resp => resp.json())
//      .then(data => {
//          Weather.textContent = data.weather[0].main.name;
//          console.log(data.weather[0].main.name)
//      });
//   }
//   GetweatherType();