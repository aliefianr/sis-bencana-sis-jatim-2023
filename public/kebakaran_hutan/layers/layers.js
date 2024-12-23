var wms_layers = [];

var format_KebakaranHutan_0 = new ol.format.GeoJSON();
var features_KebakaranHutan_0 = format_KebakaranHutan_0.readFeatures(json_KebakaranHutan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KebakaranHutan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KebakaranHutan_0.addFeatures(features_KebakaranHutan_0);
var lyr_KebakaranHutan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KebakaranHutan_0, 
                style: style_KebakaranHutan_0,
                popuplayertitle: 'Kebakaran Hutan',
                interactive: true,
    title: 'Kebakaran Hutan<br />\
    <img src="styles/legend/KebakaranHutan_0_0.png" /> 0<br />\
    <img src="styles/legend/KebakaranHutan_0_1.png" /> 1<br />\
    <img src="styles/legend/KebakaranHutan_0_2.png" /> 2<br />\
    <img src="styles/legend/KebakaranHutan_0_3.png" /> 5<br />\
    <img src="styles/legend/KebakaranHutan_0_4.png" /> 6<br />'
        });

lyr_KebakaranHutan_0.setVisible(true);
var layersList = [lyr_KebakaranHutan_0];
lyr_KebakaranHutan_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'kebakaran hutan_Kebakaran Hutan': 'kebakaran hutan_Kebakaran Hutan', });
lyr_KebakaranHutan_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'kebakaran hutan_Kebakaran Hutan': 'TextEdit', });
lyr_KebakaranHutan_0.set('fieldLabels', {'Kabupaten': 'no label', 'kebakaran hutan_Kebakaran Hutan': 'no label', });
lyr_KebakaranHutan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});