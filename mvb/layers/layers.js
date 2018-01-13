var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_millennials_vs_boomers_local_2016_mye_YOB_for_web_0 = new ol.format.GeoJSON();
var features_millennials_vs_boomers_local_2016_mye_YOB_for_web_0 = format_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.readFeatures(json_millennials_vs_boomers_local_2016_mye_YOB_for_web_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_millennials_vs_boomers_local_2016_mye_YOB_for_web_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.addFeatures(features_millennials_vs_boomers_local_2016_mye_YOB_for_web_0);var lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_millennials_vs_boomers_local_2016_mye_YOB_for_web_0, 
                style: style_millennials_vs_boomers_local_2016_mye_YOB_for_web_0,
    title: 'millennials_vs_boomers_local_2016_mye_YOB_for_web<br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_0.png" />  0.50 - 0.72 <br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_1.png" />  0.72 - 0.82 <br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_2.png" />  0.82 - 1.00 <br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_3.png" />  1.00 - 1.03 <br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_4.png" />  1.03 - 1.35 <br />\
    <img src="styles/legend/millennials_vs_boomers_local_2016_mye_YOB_for_web_0_5.png" />  1.35 - 3.90 <br />'
        });var format_ne_10m_populated_places_1 = new ol.format.GeoJSON();
var features_ne_10m_populated_places_1 = format_ne_10m_populated_places_1.readFeatures(json_ne_10m_populated_places_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_populated_places_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ne_10m_populated_places_1.addFeatures(features_ne_10m_populated_places_1);var lyr_ne_10m_populated_places_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_populated_places_1, 
                style: style_ne_10m_populated_places_1,
                title: '<img src="styles/legend/ne_10m_populated_places_1.png" /> ne_10m_populated_places'
            });

lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.setVisible(true);lyr_ne_10m_populated_places_1.setVisible(true);
var layersList = [baseLayer,lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0,lyr_ne_10m_populated_places_1];
lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.set('fieldAliases', {'Area': 'Area', 'Population': 'Pop 2016', 'Millennial': 'Millennials', 'Boomers': 'Baby boomers', 'RatioMtoB': 'Ratio', 'More': 'More', });
lyr_ne_10m_populated_places_1.set('fieldAliases', {'NAME': 'NAME', });
lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.set('fieldImages', {'Area': 'TextEdit', 'Population': 'TextEdit', 'Millennial': 'TextEdit', 'Boomers': 'TextEdit', 'RatioMtoB': 'TextEdit', 'More': 'TextEdit', });
lyr_ne_10m_populated_places_1.set('fieldImages', {'NAME': 'TextEdit', });
lyr_millennials_vs_boomers_local_2016_mye_YOB_for_web_0.set('fieldLabels', {'Area': 'inline label', 'Population': 'inline label', 'Millennial': 'inline label', 'Boomers': 'inline label', 'RatioMtoB': 'inline label', 'More': 'inline label', });
lyr_ne_10m_populated_places_1.set('fieldLabels', {'NAME': 'no label', });
lyr_ne_10m_populated_places_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});