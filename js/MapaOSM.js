// Variables y Objetos globales.
var mapa = null;

function cargarMapa(){
    
	// Asuncion - Paraguay.
	/*var longitud = -57.6309129;
    var latitud = -25.2961407;*/

    //San Lorenzo - Paraguay
    var longitud = -57.51931059999998;
    var latitud = -25.3446035;
    var zoom = 6;

    // Se instancia el objeto mapa.
	mapa =  L.map('map-container').setView([latitud, longitud], zoom);

	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright">' +
          'OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
    }).addTo(mapa);

    var json = 'data/dependencias_infona.geojson'

    function forEachFeature(feature, layer){
        var ContentPopup = 'Nombre: ' + feature.properties.NOMBRE + '<br>' 
        + 'Dependencia: ' + feature.properties.DEPENDENCIA + '<br>' 
        + 'Categoria: ' + feature.properties.CATEGORÍA + '<br>'
        + 'Localidad: ' + feature.properties.LOCALIDAD + '<br>'
        + 'Distrito: ' + feature.properties.DISTRITO + '<br>'
        + 'Departamento: ' + feature.properties.DEPARTAMENTO + '<br>'
        + '<img src= ' + feature.properties.pic2URL + ' alt="" class="images">'
        + 'Responsable: ' + feature.properties.RESPONSABLE + '<br>'
        + 'Contacto: ' + feature.properties.CONTACTO + '<br>' ;

        layer.bindPopup(ContentPopup)

            
        /*if (feature.properties) {
            var v_popupString = '<div class="popup">';
    
            for (var k in feature.properties) {
                var v = feature.properties[k];
                v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
            }
            v_popupString += '</div>';
            layer.bindPopup(v_popupString);
        }*/ 
    }
    
    var DGOR = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.DEPENDENCIA == "DGOR");
        },
        pointToLayer : function(feature, latlng){
            return L.circleMarker(latlng,{
                radius: 8,
                fillColor: "lightgreen",
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
                
            }).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        DGOR.addData(data)
    });

    DGOR.addTo(mapa);


    var DGEEF = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.DEPENDENCIA == "DGEEF");
        },
        pointToLayer : function(feature, latlng){
            return L.circleMarker(latlng,{
                radius: 8,
                fillColor: "yellow",
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
                
            }).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        DGEEF.addData(data)
    });
    
    DGEEF.addTo(mapa);
    
    var SCENTRAL = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.DEPENDENCIA == "SEDE CENTRAL");
        },
        pointToLayer : function(feature, latlng){
            return L.circleMarker(latlng,{
                radius: 8,
                fillColor: "green",
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
                
            }).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        SCENTRAL.addData(data)
    });

    SCENTRAL.addTo(mapa);

}