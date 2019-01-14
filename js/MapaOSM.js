// Variables y Objetos globales.
var mapa = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	/*var longitud = -57.6309129;
    var latitud = -25.2961407;*/

    //San Lorenzo - Paraguay
    var longitud = -57.51931059999998;
    var latitud = -25.3446035;
	var zoom = 18;

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
                    "Oficina": "INFONA (Instituto Forestal Nacional) CENTRAL",
                    "Presidenta": "Ingeniera Forestal Cristina Alejandra Goralewski",
                }

        },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.553840",
                        "-24.992122"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Presidente Hayes",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-59.757799",
                        "-22.666343"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Boqueron",
                    //correcto
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.434310",
                        "-23.407878"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Concepción",
                    //correcto
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.055927",
                        "-23.336515"
                    ]
                },
                "properties": {
                    "Vivero": "Horqueta",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.536287",
                        "-22.955721"
                    ]
                },
                "properties": {
                    "Vivero": "Yby Yau",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.017266",
                        "-25.463529"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Caaguazú",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.516619",
                        "-23.822171"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Santa Rosa del Aguaray",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.505598",
                        "-23.902967"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Lima",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-54.824167",
                        "-24.259158"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Cruce Carolina",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-54.659280",
                        "-25.328483"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Hernandarias",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.141277",
                        "-25.379693"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Caacupé",
                    //correcto
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.049490",
                        "-25.383518"
                    ]
                },
                "properties": {
                    "Vivero":"Cordillera",
                    //ver
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.530814",
                        "-25.473345" 
                    ]
                },
                "properties": {
                    "Oficina Regional": "Coronel Oviedo",
                    //ver
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.434983",
                        "-25.436358"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Caaguazu Toro Blanco",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-55.983162",
                        "-25.462721"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Caaguazu",
                    //ver
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.449000",
                        "-25.787389"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Guaira",
                    //ver
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.121107",
                        "-26.413792"
                    ]
                },
                "properties": {
                    "Nucleo Forestal": "Villa Florida",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-58.287357",
                        "-26.881519"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Pilar/Ñeembucu",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-55.9238024",
                        "-27.1410744"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Itapua",
                    //ver
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-55.698498",
                        "-27.122797"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Trinidad",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.435670",
                        "-25.755020"
                    ]
                },
                "properties": {
                    "Puesto de Control": "Cruce Villarrica - Paraguarí",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.017285",
                        "-25.463528"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Caazapá",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-56.419581",
                        "-25.735852"
                    ]
                },
                "properties": {
                    "Vivero": "Escuela Agricola Villarrica",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.026667",
                        "-26.820250"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Misiones",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.2411211",
                        "-25.7652078"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Paraguarí",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-54.6438871",
                        "-25.5062814"
                    ]
                },
                "properties": {
                    "Instituto Tecnico": "Alto Paraná",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.5309458",
                        "-25.3457536"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Central",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-57.5308283",
                        "-25.3456202"
                    ]
                },
                "properties": {
                    "Vivero": "Central",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-55.722098",
                        "-22.5654906"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Amambay/Pedro Juan Caballero",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-54.3081694",
                        "-24.0655604"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Salto de Guaira",
                    
                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "-55.6930399",
                        "-24.4770114"
                    ]
                },
                "properties": {
                    "Oficina Regional": "Curuguaty",
                    
                }
            },
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
            
            for (var k in p_feature.properties) {
                var v = p_feature.properties[k];
                v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
            }
        if(p_feature.properties.Oficina == "INFONA (Instituto Forestal Nacional) CENTRAL"){
            var pic2URL = 'http://www.infona.gov.py/application/files/2115/3487/4715/636704714365102534_IMG_4917.jpg';
            v_popupString += '<img src= ' + pic2URL + ' alt="presidenta" class="images">';
        }
        if(p_feature.properties.Vivero == "Central"){
            v_popupString += '<img src="img/despachosemillas.JPG" class="images">';
        }
            else
                v_popupString += '</div>';

            p_layer.bindPopup(v_popupString,{ maxWidth: "auto" });
            

        }

    }

}