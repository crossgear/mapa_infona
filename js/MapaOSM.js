// Variables y Objetos globales.
var mapa = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	/*var longitud = -57.6309129;
    var latitud = -25.2961407;*/
    //San Lorenzo - Paraguay
    var longitud = -57.51931059999998;
    var latitud = -25.3446035;
	var zoom = 12;

    // Se instancia el objeto mapa.
	mapa =  L.map('map-container').setView([latitud, longitud], zoom);

	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright">' +
          'OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
    }).addTo(mapa);
    
    // Datos GeoJSON.
	var v_geojsonFeature = {

        "type": "FeatureCollection",
		"features": [{

                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.523932",
                        "-25.339330"
                    ]
                },
                "properties": {
                    "Nombre": "INFONA CENTRAL",
                    "Lugar": "Infona(Instituto Forestal Nacional) - Oficina Administrativa",
                    
                }

        }/*,{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.521591",
                        "-25.335409"
                    ]
                },
                "properties": {
                    "nombre": "Festival de Danza Paraguaya",
                    "lugar": "Aula Magna de la Facultad Polit\u00e9cnica de la Universidad Nacional de Asunci\u00f3n",
                    "fecha_inicio": "21-06-2014",
                    "fecha_fin": "25-06-2014"
                }
            }*/
        ]
	};
	// Agregando datos GeoJSON en una Capa (layer) vectorial.
	L.geoJson(v_geojsonFeature, {
		onEachFeature: onEachFeature
	}).addTo(mapa);

	// Funcion que muestra informacion en un popup.
	function onEachFeature(p_feature, p_layer) {
		if (p_feature.properties) {
            var v_popupString = '<div class="popup">';
            var pic2URL = 'http://www.infona.gov.py/application/files/2115/3487/4715/636704714365102534_IMG_4917.jpg';

            for (var k in p_feature.properties) {
                var v = p_feature.properties[k];
                v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
            }
            v_popupString += '<img src= ' + pic2URL + ' alt="presidenta" class="center">';
            v_popupString += '<p class="titulo">Ingeniera Forestal Cristina Alejandra Goralewski</p>'
            v_popupString += '</div>';

            p_layer.bindPopup(v_popupString);

            //p_layer.bindPopup("<img src=" + pic2URL + " width=100%, heigth=100%>");

        }
	}

}