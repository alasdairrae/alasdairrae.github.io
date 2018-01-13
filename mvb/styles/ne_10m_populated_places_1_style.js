var size = 0;
var placement = 'point';

var style_ne_10m_populated_places_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'Bahnschrift SemiBold\', sans-serif";
    var labelFill = "rgba(34, 34, 34, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME_EN") !== null) {
        labelText = String(feature.get("NAME_EN"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.227451)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.227451)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
