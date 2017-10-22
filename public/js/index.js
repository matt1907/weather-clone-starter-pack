window.onload=function(){
  var contentDiv = document.getElementById("buttoncontainer")
  var userinput = document.getElementById("text")
  var weathertemperature = document.getElementById("WeatherTemperature")
  var weatherdecription =document.getElementById("WeatherDescription")
  var weatherhumidity =document.getElementById("WeatherHumidity")
  var weather =document.getElementById("Weather")
  var top =document.getElementById("top")



  contentDiv.addEventListener("click",function(){
    var xhr=new XMLHttpRequest();
    var api_url = "https://api.openweathermap.org/data/2.5/weather?q="+userinput.value+"&APPID=8116b025574d919567cee1c9c68fae21"
    xhr.open("GET",api_url,true);
    xhr.onload=function(e){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          console.log('responseText: ', xhr.responseText)
          var data = JSON.parse(xhr.responseText);
          console.log('data: ', data)
          top.innerHTML=(data.weather[0].main)
          weathertemperature.innerHTML=Math.round(data.main.temp-272.15)+ "&#176C"
          weatherdecription.innerHTML=(data.weather[0].description)
          weatherhumidity.innerHTML=(data.main.humidity)+"%"

          if(data.weather[0].main === "Rain"){
            weather.src="../../assets/images/rain.png"
          }
          if(data.weather[0].main === "Clouds"){
            weather.src="../../assets/images/cloudy.png"
          }
          if(data.weather[0].main === "Clear"){
            weather.src="../../assets/images/clear.png"
          }
          if(data.weather[0].main === "Snow"){
            weather.src="../../assets/images/snowflake.png"
          }
          if(data.weather[0].main === "Thunderstorm"){
            weather.src="../../assets/images/storm.png"
          }
          if(data.weather[0].main === "Drizzle"){
            weather.src="../../assets/images/rain.png"
          }
          if(data.weather[0].main === "Atmosphere"){
            weather.src="../../assets/images/smoke.png"
          }


        }
      }
    };
    xhr.onerror=function(e){
       console.error(xhr.statusText);
    };
    xhr.send(null)


  })
}
