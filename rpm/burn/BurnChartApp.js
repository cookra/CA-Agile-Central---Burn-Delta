(function () {
    var Ext = window.Ext4 || window.Ext;
    var palette = Ext.create("Rally.apps.charts.Colors");

    Ext.define("Rally.apps.charts.rpm.burn.BurnChartApp", {
        extend: "Rally.apps.charts.rpm.PortfolioChartAppBase",
        cls: "portfolio-burnup-app",
        
        requires: [
            'Rally.ui.chart.Chart',
            'Rally.apps.charts.Colors',
            'Rally.apps.charts.IntegrationHeaders'
        ],

        help: {
            cls:'piburnup-help-container',
            id: 273
        },
        integrationHeaders : {
            name : "Portfolio Item Burnup"
        },

        chartComponentConfig: {
            xtype: "rallychart",

            updateBeforeRender: function() {
                var length = this.calculatorConfig.scheduleStates.length,
                    state = this.calculatorConfig.scheduleStates[length - 1];
                if(state !== "Accepted") {
                    this.calculatorConfig.completedScheduleStateNames.push(state);
                }
            },

            queryErrorMessage: "No data to display.<br /><br />Most likely, stories are either not yet available or started for this portfolio item.",
            aggregationErrorMessage: "No data to display.<br /><br />Check the data type setting for displaying data based on count versus plan estimate.",

            storeType: 'Rally.data.lookback.SnapshotStore',
            storeConfig: {
                find: {
                    "_TypeHierarchy": -51038,
                    "Children": null
                },
                fetch: ["ScheduleState", "PlanEstimate"],
                hydrate: ["ScheduleState"],
                sort: {
                    "_ValidFrom": 1
                }
            },

            calculatorType: "Rally.apps.charts.rpm.burn.BurnCalculator",
            calculatorConfig: {
                workDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                timeZone: "GMT",
                completedScheduleStateNames: ["Accepted"]
            },

            chartColors: [], // reset so we can define our own palette

            chartConfig: {
                chart: {
                    defaultSeriesType: "area",
                    zoomType: "xy"
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: "on",
                    tickInterval: 5,
                    title: {
                        text: "Days",
                        margin: 10
                    }
                },
                yAxis: [
                    {
                        title: {
                            text: "Count"
                        }
                    }
                ],
                tooltip: {
                    formatter: function () {
                        return "" + this.x + "<br />" + this.series.name + ": " + this.y;
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
                        groupPadding: 0.01
                    },
                    line: {
                        color: palette.burnLineColor()
                    },
                    column: {
                        stacking: null,
                        color: palette.burnColumnColor(),
                        shadow: false
                    }
                }
            }
        }
    });
}());
