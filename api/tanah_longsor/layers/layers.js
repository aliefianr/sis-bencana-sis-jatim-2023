var wms_layers = [];

var format_TanahLongsor_0 = new ol.format.GeoJSON();
var features_TanahLongsor_0 = format_TanahLongsor_0.readFeatures(json_TanahLongsor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahLongsor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahLongsor_0.addFeatures(features_TanahLongsor_0);
var lyr_TanahLongsor_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahLongsor_0, 
                style: style_TanahLongsor_0,
                popuplayertitle: 'Tanah Longsor',
                interactive: true,
    title: 'Tanah Longsor<br />\
    <img src="styles/legend/TanahLongsor_0_0.png" /> 0<br />\
    <img src="styles/legend/TanahLongsor_0_1.png" /> 1<br />\
    <img src="styles/legend/TanahLongsor_0_2.png" /> 2<br />'
        });

lyr_TanahLongsor_0.setVisible(true);
var layersList = [lyr_TanahLongsor_0];
lyr_TanahLongsor_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'tanah longsor_Tanah Longsor': 'tanah longsor_Tanah Longsor', });
lyr_TanahLongsor_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'tanah longsor_Tanah Longsor': 'TextEdit', });
lyr_TanahLongsor_0.set('fieldLabels', {'Kabupaten': 'no label', 'tanah longsor_Tanah Longsor': 'no label', });
lyr_TanahLongsor_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});