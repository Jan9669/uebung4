// Create the map
var map = L.map('map',{drawControl: true}).setView([51.9692307002609,7.595822811126709], 6);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialise the FeatureGroup to store editable layers
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);
//draw polygon
var drawPluginOptions = {
position: 'topleft',
draw: {
  rectangle: true,
},
edit: {
  featureGroup: editableLayers, //REQUIRED!!
  remove: false,
  
}
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
map.on('draw:created', function(e) {

  layer = e.layer;
editableLayers.addLayer(layer);
});

//German Route
L.geoJSON(geojsonFeature).addTo(map);

    

