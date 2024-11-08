var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Meenangadi_1 = new ol.format.GeoJSON();
var features_Meenangadi_1 = format_Meenangadi_1.readFeatures(json_Meenangadi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meenangadi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meenangadi_1.addFeatures(features_Meenangadi_1);
var lyr_Meenangadi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meenangadi_1, 
                style: style_Meenangadi_1,
                popuplayertitle: "Meenangadi",
                interactive: false,
                title: '<img src="styles/legend/Meenangadi_1.png" /> Meenangadi'
            });
var format_clip_School_2 = new ol.format.GeoJSON();
var features_clip_School_2 = format_clip_School_2.readFeatures(json_clip_School_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_School_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_School_2.addFeatures(features_clip_School_2);
var lyr_clip_School_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_School_2, 
                style: style_clip_School_2,
                popuplayertitle: "clip_School",
                interactive: false,
                title: '<img src="styles/legend/clip_School_2.png" /> clip_School'
            });
var format_clip_Road1_3 = new ol.format.GeoJSON();
var features_clip_Road1_3 = format_clip_Road1_3.readFeatures(json_clip_Road1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road1_3.addFeatures(features_clip_Road1_3);
var lyr_clip_Road1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road1_3, 
                style: style_clip_Road1_3,
                popuplayertitle: "clip_Road1",
                interactive: false,
                title: '<img src="styles/legend/clip_Road1_3.png" /> clip_Road1'
            });
var format_clip_PHC_4 = new ol.format.GeoJSON();
var features_clip_PHC_4 = format_clip_PHC_4.readFeatures(json_clip_PHC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_PHC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_PHC_4.addFeatures(features_clip_PHC_4);
var lyr_clip_PHC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_PHC_4, 
                style: style_clip_PHC_4,
                popuplayertitle: "clip_PHC",
                interactive: true,
                title: '<img src="styles/legend/clip_PHC_4.png" /> clip_PHC'
            });
var format_clip_Location_5 = new ol.format.GeoJSON();
var features_clip_Location_5 = format_clip_Location_5.readFeatures(json_clip_Location_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Location_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Location_5.addFeatures(features_clip_Location_5);
var lyr_clip_Location_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Location_5, 
                style: style_clip_Location_5,
                popuplayertitle: "clip_Location",
                interactive: false,
                title: '<img src="styles/legend/clip_Location_5.png" /> clip_Location'
            });
var format_clip_Dustbin1_6 = new ol.format.GeoJSON();
var features_clip_Dustbin1_6 = format_clip_Dustbin1_6.readFeatures(json_clip_Dustbin1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Dustbin1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Dustbin1_6.addFeatures(features_clip_Dustbin1_6);
var lyr_clip_Dustbin1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Dustbin1_6, 
                style: style_clip_Dustbin1_6,
                popuplayertitle: "clip_Dustbin1",
                interactive: false,
                title: '<img src="styles/legend/clip_Dustbin1_6.png" /> clip_Dustbin1'
            });
var format_clip_CommunityHall1_7 = new ol.format.GeoJSON();
var features_clip_CommunityHall1_7 = format_clip_CommunityHall1_7.readFeatures(json_clip_CommunityHall1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_CommunityHall1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_CommunityHall1_7.addFeatures(features_clip_CommunityHall1_7);
var lyr_clip_CommunityHall1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_CommunityHall1_7, 
                style: style_clip_CommunityHall1_7,
                popuplayertitle: "clip_CommunityHall1",
                interactive: false,
                title: '<img src="styles/legend/clip_CommunityHall1_7.png" /> clip_CommunityHall1'
            });
var format_clip_Anganawadi1_8 = new ol.format.GeoJSON();
var features_clip_Anganawadi1_8 = format_clip_Anganawadi1_8.readFeatures(json_clip_Anganawadi1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Anganawadi1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Anganawadi1_8.addFeatures(features_clip_Anganawadi1_8);
var lyr_clip_Anganawadi1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Anganawadi1_8, 
                style: style_clip_Anganawadi1_8,
                popuplayertitle: "clip_Anganawadi1",
                interactive: false,
                title: '<img src="styles/legend/clip_Anganawadi1_8.png" /> clip_Anganawadi1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Meenangadi_1.setVisible(true);lyr_clip_School_2.setVisible(true);lyr_clip_Road1_3.setVisible(true);lyr_clip_PHC_4.setVisible(true);lyr_clip_Location_5.setVisible(true);lyr_clip_Dustbin1_6.setVisible(true);lyr_clip_CommunityHall1_7.setVisible(true);lyr_clip_Anganawadi1_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Meenangadi_1,lyr_clip_School_2,lyr_clip_Road1_3,lyr_clip_PHC_4,lyr_clip_Location_5,lyr_clip_Dustbin1_6,lyr_clip_CommunityHall1_7,lyr_clip_Anganawadi1_8];
lyr_Meenangadi_1.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_clip_School_2.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_clip_Road1_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_clip_PHC_4.set('fieldAliases', {'Name': 'Name', });
lyr_clip_Location_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_clip_Dustbin1_6.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', });
lyr_clip_CommunityHall1_7.set('fieldAliases', {'Name': 'Name', });
lyr_clip_Anganawadi1_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Name1': 'Name1', });
lyr_Meenangadi_1.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_clip_School_2.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_clip_Road1_3.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_clip_PHC_4.set('fieldImages', {'Name': '', });
lyr_clip_Location_5.set('fieldImages', {'OBJECTID': '', 'name': '', 'WARD_NO': '', 'WARD_NAME': '', });
lyr_clip_Dustbin1_6.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', });
lyr_clip_CommunityHall1_7.set('fieldImages', {'Name': '', });
lyr_clip_Anganawadi1_8.set('fieldImages', {'id': '', 'Name': '', 'Location': '', 'Name1': '', });
lyr_Meenangadi_1.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_clip_School_2.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_clip_Road1_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_clip_PHC_4.set('fieldLabels', {'Name': 'no label', });
lyr_clip_Location_5.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_clip_Dustbin1_6.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', });
lyr_clip_CommunityHall1_7.set('fieldLabels', {'Name': 'no label', });
lyr_clip_Anganawadi1_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Name1': 'no label', });
lyr_clip_Anganawadi1_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});