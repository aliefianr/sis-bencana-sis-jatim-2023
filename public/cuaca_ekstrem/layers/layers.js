var wms_layers = [];

var format_CuacaEkstrem_0 = new ol.format.GeoJSON();
var features_CuacaEkstrem_0 = format_CuacaEkstrem_0.readFeatures(json_CuacaEkstrem_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuacaEkstrem_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuacaEkstrem_0.addFeatures(features_CuacaEkstrem_0);
var lyr_CuacaEkstrem_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuacaEkstrem_0, 
                style: style_CuacaEkstrem_0,
                popuplayertitle: 'Cuaca Ekstrem',
                interactive: true,
    title: 'Cuaca Ekstrem<br />\
    <img src="styles/legend/CuacaEkstrem_0_0.png" /> 0<br />\
    <img src="styles/legend/CuacaEkstrem_0_1.png" /> 1<br />\
    <img src="styles/legend/CuacaEkstrem_0_2.png" /> 2<br />\
    <img src="styles/legend/CuacaEkstrem_0_3.png" /> 3<br />\
    <img src="styles/legend/CuacaEkstrem_0_4.png" /> 4<br />\
    <img src="styles/legend/CuacaEkstrem_0_5.png" /> 5<br />\
    <img src="styles/legend/CuacaEkstrem_0_6.png" /> 6<br />'
        });

lyr_CuacaEkstrem_0.setVisible(true);
var layersList = [lyr_CuacaEkstrem_0];
lyr_CuacaEkstrem_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'cuaca ekstrem_Cuaca Ekstrem': 'cuaca ekstrem_Cuaca Ekstrem', });
lyr_CuacaEkstrem_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'cuaca ekstrem_Cuaca Ekstrem': 'TextEdit', });
lyr_CuacaEkstrem_0.set('fieldLabels', {'Kabupaten': 'no label', 'cuaca ekstrem_Cuaca Ekstrem': 'no label', });
lyr_CuacaEkstrem_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});