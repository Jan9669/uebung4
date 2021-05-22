// Create the map
var map = L.map('map',{drawControl: true}).setView([51.9692307002609,7.595822811126709], 6);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  draw : {
      position : 'topleft',
      polygon : false,
      polyline : false,
      rectangle : false,
      circle : false,
      marker : false

  },
  edit : {
      featureGroup: drawnItems

  }


});

map.addControl(drawControl); 
// Initialise the draw control and pass it the FeatureGroup of editable layers
map.on('draw:created', function(e) {

var type =e.layerType,
    layer = e.layer;
     //get coordinates of the rectangle
    if (type === 'rectangle') {
     //count coordinates
      var anzahlknoten=geojsonFeature.features[0].geometry.coordinates[0]
      var routenarray=anzahlknoten

      //coordinates of the quad
      var rectcoord=layer.getLatLngs()
      var rectlat0=rectcoord[0][0].lat
      var rectlng0=rectcoord[0][0].lng
      var rectlat2=rectcoord[0][2].lat
      var rectlng2=rectcoord[0][2].lng
      //new array for comparision
      let comparearray=[];

      for(var n=0; n<routenarray.length;n++){

        var routelng=routenarray[n][0]
        var routelat=routenarray[n][1]
        
        if(routelat>=rectlat0 && routelat<=rectlat2 && routelng >=rectlng0 && routelng <=rectlng2){
            var Ausgabe="inquad"
           
        }
        else{
            var Ausgabe="notinquad"
        }
     //fill new 2d array of distance and inside/outside quad
      comparearray[n] = [];
      comparearray[n][0]=Ausgabe;
      comparearray[n][1]=routelng;   
      comparearray[n][2]=routelat; 
      
        
    }
   
    //neighbor comparison for intersect
    for(var a=1; a<comparearray.length;a++){
      if(comparearray[a-1][0]!=comparearray[a][0]){
        
       showMarker(comparearray[a-1][2],comparearray[a-1][1]);
     }

    }
    
  }
drawnItems.addLayer(layer);
});

//German Route
L.geoJSON(geojsonFeature).addTo(map);



