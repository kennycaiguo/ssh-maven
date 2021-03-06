// Declare a Tile layer with an OSM source
$().ready(function () {
    /*动态计算地图Div高度*/
    $('#map').height($(window).height()-80);
    alert($(window).height()-80);
});
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
// Create latitude and longitude and convert them to default projection
var birmingham = ol.proj.transform([-1.81185, 52.44314], 'EPSG:4326', 'EPSG:3857');
// Create a View, set it center and zoom level
var view = new ol.View({
    center: birmingham,
    zoom: 6
});
// Instanciate a Map, set the object target to the map DOM id
var map = new ol.Map({
    target: 'map'
});
// Add the created layer to the Map
map.addLayer(osmLayer);
// Set the view for the map
map.setView(view);/**
 * Created by admin on 2015/6/25.
 */
