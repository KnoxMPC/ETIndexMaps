//set the inition map extent.  user can zoom out if desired
var bounds = new Extent({
    "xmin": -9457529,
    "ymin": 4192455,
    "xmax": -9248092,
    "ymax": 4360617,
    "spatialReference": { "wkid": 102100 }
});

app.layerChangeThreshold = 600000; //this is the scale that will trigger a map refresh

//toner layers
var thisCopyright = "<div style =\"font-size: 70%; font-family: 'PT Sans', sans-serif\">Base map by <a href=\"http://http://stamen.com/\">Stamen</a></div>";
//add the toner "lines" layer.  Only for the initial map extent
var stamenSubdomains = ["a", "b", "c"];
//add the toner lines map layer
app.tonerLines = new WebTiledLayer("http://${subDomain}.tile.stamen.com/toner-lines/{level}/{col}/{row}.png", {
  
    "subDomains": stamenSubdomains,
    "id": "toner-lines",
    "maxScale": app.layerChangeThreshold,
    "copyright": thisCopyright
});

//add the toner base map layer

app.toner = new WebTiledLayer("http://tile.stamen.com/toner/{level}/{col}/{row}.jpg", {
    //"subDomains": stamenSubdomains,
    "id": "toner",
    "minScale": app.layerChangeThreshold,
    "copyright": thisCopyright
});

function maxOffset() {
    var extentWidth;
    extentWidth = app.map.extent.getWidth();
    myOffset = extentWidth / app.map.width;

    myOffset = myOffset;
    return myOffset;
}



function createLegend(map, fl) {
    // destroy previous legend, if present
    if (app.hasOwnProperty("legend")) {
        app.legend.destroy();
        domConstruct.destroy(dom.byId("legendDiv"));
    }
    // create a new div for the legend
    var legendDiv = domConstruct.create("div", {
        id: "legendDiv"
    }, dom.byId("legendWrapper"));

    app.legend = new Legend({
        map: map,
        layerInfos: [{
            layer: fl,
            title: "."
        }]
    }, legendDiv);
    app.legend.startup();
}

