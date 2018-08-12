var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require("fusioncharts/fusioncharts.widgets")(FusionCharts);

  var socket = io('http://localhost:3000/');
        var transactionChart = new FusionCharts({
            id: "mychart",
            type: 'realtimecolumn',
            width: '700',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                 "caption": "Market Orders for Apples",
                    "yaxismaxvalue": "10",
                    "numdisplaysets": "10",
                    "yAxisName":"Quantity",
                    "labeldisplay": "rotate",
                    "showLegend":"0",
                    "showValues": "0",
                    "numbersuffix": "Kg",
                    "showlabels": "1",
                    "showRealTimeValue": "0",
                     "refreshInterval":".1",
                    "updateInterval":".1",
                    "yAxisNamePadding":"10",
                    "paletteColors" : "#0075c2,#1aaf5d",
                    "baseFontColor" : "#333333",
                    "baseFont" : "Helvetica Neue,Arial",
                    "captionFontSize" : "14",
                    "subcaptionFontSize" : "14",
                    "subcaptionFontBold" : "0",
                    "showBorder" : "0",
                    "bgColor" : "#ffffff",
                    "showShadow" : "0",
                    "canvasBgColor" : "#ffffff",
                    "canvasBorderAlpha" : "0",
                    "divlineAlpha" : "100",
                    "divlineColor" : "#999999",
                    "divlineThickness" : "1",
                    "divLineIsDashed" : "1",
                    "divLineDashLen" : "1",
                    "divLineGapLen" : "1",
                    "usePlotGradientColor" : "0",
                    "showplotborder" : "0",
                    "valueFontColor" : "#ffffff",
                    "placeValuesInside" : "1",
                    "rotateValues" : "1",
                    "showXAxisLine" : "1",
                    "xAxisLineThickness" : "1",
                    "xAxisLineColor" : "#999999",
                    "showAlternateHGridColor" : "0",
                    "legendBgAlpha" : "0",
                    "legendBorderAlpha" : "0",
                    "legendShadow" : "0",
                    "legendItemFontSize" : "10",
                    "legendItemFontColor" : "#666666"
                    },
                "categories": [
                    {
                        "category": [
                            { "label": "Start" }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "",
                        "alpha": "100",
                        "data": [
                            { "value": "3" }
                        ]
                    }
                ]
            }
        }).render("chart-container");
      socket.on('news', function (data) {
        function updateData() {
            var strData = "&label=" + data.label + "&value=" + data.value;
            FusionCharts.items.mychart.feedData(strData);
        }
        updateData();

     });
