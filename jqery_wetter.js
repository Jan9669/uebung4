/**
 * 
 * @param {Latitude} lat 
 * @param {Longitude} lng 
 */

function showMarker(lat, lng) {

    $(document).ready(function(){
        
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+key,function(data){
           
     //interesting Json object attributes
     var location = data.name
     var sky=data.weather[0].description
     var temperatur=(data.main.temp)-273
     var windspeed=data.wind.speed
      //Ouput Marker
    
        L.marker([lat,lng]).addTo(map).bindTooltip("Stadt: "+location+'<br>'+"Himmel: "+sky+'<br>'+"Temperatur: "+temperatur+'<br>'+"Windgeschwindigkeit: "+windspeed+" ", 
        {
            permanent: false, 
            direction: 'right'
            
        }
    );
            });
            
        });
        
    }
    
    
    //showWeather(50, 8)
    
    