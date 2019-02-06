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
        

    }

    //Todos los puntos
    var jsondata = L.geoJson(null, {
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties);
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);   
        }  
    });

    $.getJSON(json, function(data){

        jsondata.addData(data)
    });
    
    jsondata.addTo(mapa);
    
    //Oficina Central
    var OFICEN = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "OFICINA CENTRAL");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        OFICEN.addData(data)
    });

    //CEFOTESFOR
    var CEFOTESFOR = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "CEFOTESFOR");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        CEFOTESFOR.addData(data)
    });

    //NÚCLEO FORESTAL
    var NUFO = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "NÚCLEO FORESTAL");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        NUFO.addData(data)
    });

    //OFICINA REGIONAL
    var OFICREG = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "OFICINA REGIONAL");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        OFICREG.addData(data)
    });

    //UNATEC Y CONFOR
    var UC = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "UNATEC Y CONFOR");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        UC.addData(data)
    });

    //PES
    var PES = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "PES");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        PES.addData(data)
    });

    //VIVERO
    var VIVERO = L.geoJSON(null,{
        onEachFeature: forEachFeature,

        filter: function(feature, layer){
            return(feature.properties.CATEGORÍA == "VIVERO");
        },
        pointToLayer : function(feature, latlng){
            return L.marker(latlng,{}).bindTooltip(feature.properties.NOMBRE);
        }
    });
    $.getJSON(json, function(data){
        VIVERO.addData(data)
    });


    var groupedOverlays = {
        "Dependencias":{
            "Todos las Dependencias" : jsondata,
            "Oficina Central" : OFICEN,
            "Centros de Formación Tecnico Forestal" : CEFOTESFOR,
            "Oficinas Regionales": OFICREG,
            "Núcleos Forestales" : NUFO,
            "Unidades de Asistencia Tecnica Y Control Forestal" : UC,
            "Puertos Entrada Y Salida": PES,
            "Viveros": VIVERO,
        }
    }

    var options = {
        // Make the "Landmarks" group exclusive (use radio inputs)
        exclusiveGroups: ["Dependencias"],
        // Show a checkbox next to non-exclusive group labels for toggling all
        groupCheckboxes: true
      };

    layerControl = L.control.groupedLayers(null, groupedOverlays, options);
    mapa.addControl(layerControl);

    
}