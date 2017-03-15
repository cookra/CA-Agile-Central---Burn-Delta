(function () {
    var Ext = window.Ext4 || window.Ext;

    Ext.define("Rally.apps.charts.burndown.BurnDownChart", {
        requires: [
            "Rally.ui.chart.Chart"
        ],

        defaultChartComponentConfig: function() {
            return {
                xtype: "rallychart",
                itemId: "burndownchart",

                aggregationErrorMessage: "No data to display. Check the data type setting for displaying data based on count versus plan estimate.",

                storeType: "Rally.data.lookback.SnapshotStore",
                storeConfig: {
                    find: {
                        "_TypeHierarchy": { '$in' : [ -51038, -51006 ] },
                        "Children": null
                    },
                    fetch: ["ScheduleState", "PlanEstimate", "ObjectId", "_ValidFrom", "_ValidTo"],
                    hydrate: ["ScheduleState"],
                    sort: {
                        "_ValidFrom": 1
                    },
                    compress: true,
                    useHttpPost: true
                },

                calculatorType: "Rally.apps.charts.burndown.BurnDownCalculator",
                calculatorConfig: {
                    timeZone: "GMT",
                    completedScheduleStateNames: null, // defaults hide problems
                    enableProjections: true

                    //chartAggregationType: ''
                },

                chartColors: ["#005eb8", "#8dc63f", "#666666", "#c0c0c0"],

                chartConfig: {
                    chart: {
                        zoomType: "xy"
                    },
                    xAxis: {
                        categories: [],
                        tickmarkPlacement: "on",
                        tickInterval: 7,
                        title: {
                            text: "Days",
                            margin: 12
                        },
                        maxPadding: 0.25,
                        labels: {
                            x: 0,
                            y: 20,
                            overflow: "justify"
                        }
                    },
                    yAxis: [],
                    tooltip: {
                        formatter: function () {
                            var floatValue = parseFloat(this.y),
                                value = this.y;

                            if (!isNaN(floatValue)) {
                                value = Math.floor(floatValue * 100) / 100;
                            }

                            return "" + this.x + "<br />" + this.series.name + ": " + value;
                        }
                    },
                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            },
                            connectNulls: true
                        },
                        column: {
                            pointPadding: 0,
                            borderWidth: 0,
                            stacking: null,
                            shadow: false
                        }
                    }
                }
            };

        }
    });
}());
