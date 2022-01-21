 let Weather = document.getElementById('Weather');
 let Input = document.getElementById('Input');
 let searchBtn = document.getElementById('searchBtn');
 let city = document.getElementById('city')
 
function Getweather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47c793edde19307a0101a22dead25af6")
    .then(resp => resp.json())
    .then(data => {
        city.textContent= data.name, Weather.textContent = data.weather[0].description;
        console.log(data.weather[0])
    })
}
Getweather();

 searchBtn.addEventListener('click', function(){
     GetInput();
 })

 function GetInput(){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Input.value}&APPID=47c793edde19307a0101a22dead25af6`)
     .then(resp => resp.json())
     .then(data =>{
         city.textContent = data.name, Weather.textContent = data.weather[0].description;
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