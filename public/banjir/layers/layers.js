var wms_layers = [];

var format_Banjir_0 = new ol.format.GeoJSON();
var features_Banjir_0 = format_Banjir_0.readFeatures(json_Banjir_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banjir_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banjir_0.addFeatures(features_Banjir_0);
var lyr_Banjir_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banjir_0, 
                style: style_Banjir_0,
                popuplayertitle: 'Banjir',
                interactive: true,
    title: 'Banjir<br />\
    <img src="styles/legend/Banjir_0_0.png" /> 0<br />\
    <img src="styles/legend/Banjir_0_1.png" /> 1<br />\
    <img src="styles/legend/Banjir_0_2.png" /> 2<br />\
    <img src="styles/legend/Banjir_0_3.png" /> 3<br />\
    <img src="styles/legend/Banjir_0_4.png" /> 4<br />\
    <img src="styles/legend/Banjir_0_5.png" /> 8<br />'
        });

lyr_Banjir_0.setVisible(true);
var layersList = [lyr_Banjir_0];
lyr_Banjir_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'banjir_Banjir': 'banjir_Banjir', });
lyr_Banjir_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'banjir_Banjir': 'TextEdit', });
lyr_Banjir_0.set('fieldLabels', {'Kabupaten': 'no label', 'banjir_Banjir': 'no label', });
lyr_Banjir_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});