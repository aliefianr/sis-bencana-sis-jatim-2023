var wms_layers = [];

var format_GempaBumi_0 = new ol.format.GeoJSON();
var features_GempaBumi_0 = format_GempaBumi_0.readFeatures(json_GempaBumi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GempaBumi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GempaBumi_0.addFeatures(features_GempaBumi_0);
var lyr_GempaBumi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GempaBumi_0, 
                style: style_GempaBumi_0,
                popuplayertitle: 'Gempa Bumi',
                interactive: true,
    title: 'Gempa Bumi<br />\
    <img src="styles/legend/GempaBumi_0_0.png" /> 0 kali<br />\
    <img src="styles/legend/GempaBumi_0_1.png" /> 1 kali<br />\
    <img src="styles/legend/GempaBumi_0_2.png" /> 2 kali<br />'
        });

lyr_GempaBumi_0.setVisible(true);
var layersList = [lyr_GempaBumi_0];
lyr_GempaBumi_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'gempa bumi_Gempa Bumi': 'gempa bumi_Gempa Bumi', });
lyr_GempaBumi_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'gempa bumi_Gempa Bumi': 'TextEdit', });
lyr_GempaBumi_0.set('fieldLabels', {'Kabupaten': 'no label', 'gempa bumi_Gempa Bumi': 'no label', });
lyr_GempaBumi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});