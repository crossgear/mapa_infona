// Variables y Objetos globales.
var mapa = null;

function cargarMapa(){
    
	// Asuncion - Paraguay.
	/*var longitud = -57.6309129;
    var latitud = -25.2961407;*/

    //San Lorenzo - Paraguay
    var longitud = -57.51931059999998;
    var latitud = -25.3446035;
	var zoom = 11;

    // Se instancia el objeto mapa.
	mapa =  L.map('map-container').setView([latitud, longitud], zoom);

	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright">' +
          'OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
    }).addTo(mapa);
    
    var json = 'data/Dependencias_INFONA-2015.geojson'

    function CircleMarkerDGOR(feature, latlng){
        var options = {
            radius: 8,
            fillColor: "lightgreen",
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
            }
        return L.circleMarker(latlng, options);
    }

    // Use jQuery's getJSON method to fetch the data from a URL
    $.getJSON( json, function( gjson ) {
        // Use Leaflet's geoJSON method to turn the data into a feature layer
        L.geoJSON( gjson, {
            onEachFeature: function(feature, layer){
                if (feature.properties) {
                    var v_popupString = '<div class="popup">';
            
                    for (var k in feature.properties) {
                        var v = feature.properties[k];
                        v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
                    }
                    v_popupString += '</div>';
                    layer.bindPopup(v_popupString);
                }   
            },
            pointToLayer: function(feature, latlng){
                if(feature.properties.DEPENDENCIA == "DGOR"){
                    CircleMarkerDGOR
                }
            },
            
        }).addTo( mapa )
    })

}