import { dev, prod } from "./environment.js";
import GetLocationData from "./Geolocation.js";

 let Weather = document.getElementById('Weather');
 let Input = document.getElementById('Input');
 let searchBtn = document.getElementById('searchBtn');
 let city = document.getElementById('city');
 let Temp = document.getElementById('Temp');
 let CurrentDay = document.getElementById('CurrentDay');
 let Temp1 = document.getElementById('Temp1');
 let Temp2 = document.getElementById('Temp2');
 let Temp3 = document.getElementById('Temp3');
 let Temp4 = document.getElementById('Temp4');
 let Temp5 = document.getElementById('Temp5');
 let Day1 = document.getElementById('Day1');
 let Day2 = document.getElementById('Day2');
 let Day3 = document.getElementById('Day3');
 let Day4 = document.getElementById('Day4');
 let Day5 = document.getElementById('Day5');
 let High = document.getElementById('High');
 let Low = document.getElementById('Low');

 let apiKey = '&units=imperial&APPID=';

 if(prod.isLive){
     apiKey += prod.apiKey;
 }else{
     apiKey += dev.apiKey;
 }
function GetDefaultLocation(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk+${apiKey}`)
    .then(resp => resp.json())
    .then(data => {
        city.textContent = data.name;
         Weather.textContent = data.weather[0].description;
         Temp.textContent = data.main.temp + "°F";
         //CurrentDay.textContent = WeekDay(data.list[0].dt_txt);
        //console.log(data.weather[0])
    });
}
GetDefaultLocation();

 searchBtn.addEventListener('click', function(){
     GetInput();
     GetDays();
 })

 function GetInput(){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Input.value}+${apiKey}`)
     .then(resp => resp.json())
     .then(data =>{
         city.textContent = data.name; Weather.textContent = data.weather[0].description;Temp.textContent = data.main.temp +"°F";
         //console.log(data);
     });
 }

 function WeekDay(time){
     let d = new Date(time);
     let weekday = ["Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
     return weekday[d.getUTCDay()];
 }
 //WeekDay();

 function GetDays1(){
    fetch (`http://api.openweathermap.org/data/2.5/forecast?q=London,uk+${apiKey}`)
    .then(resp => resp.json())
    .then(data => {
       Temp1.textContent = data.list[0].main.temp+"°F";
       Day1.textContent = WeekDay(data.list[0].dt_txt);
        Temp2.textContent = data.list[2].main.temp+"°F";
        Day2.textContent = WeekDay(data.list[7].dt_txt); 
        Temp3.textContent = data.list[3].main.temp+"°F";
        Day3.textContent = WeekDay(data.list[14].dt_txt);
         Temp4.textContent = data.list[4].main.temp+"°F";
         Day4.textContent = WeekDay(data.list[28].dt_txt);
          Temp5.textContent = data.list[5].main.temp+"°F";
          Day5.textContent = WeekDay(data.list[35].dt_txt);
       //console.log(Temp1.textContent = data.list[0].main.temp+"°F")
    });
 }
 GetDays1();

 function GetDays(){
     fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${Input.value}+${apiKey}`)
     .then(resp => resp.json())
     .then(data => {
        Temp1.textContent = data.list[0].main.temp+"°F";
        Day1.textContent = WeekDay(data.list[0].dt_txt);
        Temp2.textContent = data.list[2].main.temp+"°F";
        Day2.textContent = WeekDay(data.list[7].dt_txt); 
        Temp3.textContent = data.list[3].main.temp+"°F";
        Day3.textContent = WeekDay(data.list[14].dt_txt);
         Temp4.textContent = data.list[4].main.temp+"°F";
         Day4.textContent = WeekDay(data.list[28].dt_txt);
          Temp5.textContent = data.list[5].main.temp+"°F";
          Day5.textContent = WeekDay(data.list[35].dt_txt);
        //console.log(Temp1.textContent = data.list[0].main.temp)
     });
 }

 GetLocationData();

function LocationData(){
    
}

LocationData();