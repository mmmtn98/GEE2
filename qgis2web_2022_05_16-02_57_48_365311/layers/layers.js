var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11493000.000000, 2010731.708562, 11598390.000000, 2090146.218897]
                            })
                        });
var lyr_SAVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11493000.000000, 2010731.708562, 11598390.000000, 2090146.218897]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_SAVI_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NDVI_1,lyr_SAVI_2];
