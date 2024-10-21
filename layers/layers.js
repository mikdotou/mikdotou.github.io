ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([411141.164402, 699224.490482, 469156.087698, 742978.423218]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistanceparcourirKm_1 = new ol.format.GeoJSON();
var features_DistanceparcourirKm_1 = format_DistanceparcourirKm_1.readFeatures(json_DistanceparcourirKm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_DistanceparcourirKm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanceparcourirKm_1.addFeatures(features_DistanceparcourirKm_1);
var lyr_DistanceparcourirKm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistanceparcourirKm_1, 
                style: style_DistanceparcourirKm_1,
                popuplayertitle: "Distance à parcourir (Km)",
                interactive: true,
                title: '<img src="styles/legend/DistanceparcourirKm_1.png" /> Distance à parcourir (Km)'
            });
var lyr_TempsdaccsuneagenceBOA_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Temps d'accès à une agence BOA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TempsdaccsuneagenceBOA_2.png",
    attributions: ' ',
                                projection: 'EPSG:32631',
                                alwaysInRange: true,
                                imageExtent: [399229.640000, 699195.910000, 477718.155100, 743812.842400]
                            })
                        });
var format_AgenceBOA_3 = new ol.format.GeoJSON();
var features_AgenceBOA_3 = format_AgenceBOA_3.readFeatures(json_AgenceBOA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_AgenceBOA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgenceBOA_3.addFeatures(features_AgenceBOA_3);cluster_AgenceBOA_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AgenceBOA_3
});
var lyr_AgenceBOA_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AgenceBOA_3, 
                style: style_AgenceBOA_3,
                popuplayertitle: "Agence BOA",
                interactive: true,
                title: '<img src="styles/legend/AgenceBOA_3.png" /> Agence BOA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DistanceparcourirKm_1.setVisible(false);lyr_TempsdaccsuneagenceBOA_2.setVisible(true);lyr_AgenceBOA_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistanceparcourirKm_1,lyr_TempsdaccsuneagenceBOA_2,lyr_AgenceBOA_3];
lyr_DistanceparcourirKm_1.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', 'Distance': 'Distance', });
lyr_AgenceBOA_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Avis': 'Avis', });
lyr_DistanceparcourirKm_1.set('fieldImages', {'id': '', 'cost_level': '', 'Distance': '', });
lyr_AgenceBOA_3.set('fieldImages', {'id': '', 'Nom': '', 'Avis': '', });
lyr_DistanceparcourirKm_1.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', 'Distance': 'inline label - visible with data', });
lyr_AgenceBOA_3.set('fieldLabels', {'id': 'no label', 'Nom': 'header label - always visible', 'Avis': 'inline label - always visible', });
lyr_AgenceBOA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});