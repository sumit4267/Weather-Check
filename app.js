const apikey="50c2d603d3a6d84162a8a1767c0e9e30";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weathericon");



async function checkweather(city){
    const respones = await fetch(apiUrl+city+'&appid='+apikey+'&units=metric');
     
     if(respones.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }else{  var data = await respones.json();
        //  console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
        if(data.weather[0].main =="Clouds"){
          weathericon.src="img/clouds.png";
    
        }else if(data.weather[0].main=="Clear"){
            weathericon.src="img/clear.png";
    
        }
        else if(data.weather[0].main=="rain"){
            weathericon.src="img/rain.png";
    
        }
        else if(data.weather[0].main=="drizzle"){
            weathericon.src="img/drizzle.png";
    
        }else if(data.weather[0].main=="mist"){
            weathericon.src="img/mist.png";
    
        }
    
        document.querySelector(".weather").style.display="block";
      
        
        
     }

   
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
