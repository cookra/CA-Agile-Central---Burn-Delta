(function () {
    var Ext = window.Ext4 || window.Ext;

    Ext.define("Rally.apps.charts.rpm.cfd.CumulativeFlowChartApp", {
        extend: "Rally.apps.charts.rpm.PortfolioChartAppBase",
        cls: "portfolio-cfd-app",

        requires: [
            'Rally.ui.chart.Chart',
            'Rally.apps.charts.Colors',
            'Rally.apps.charts.IntegrationHeaders'
        ],

        help: {
            cls: 'portfolio-cfd-help-container',
            id: 274
        },
        integrationHeaders : {
            name: 'Portfolio Item CFD'
        },

        chartComponentConfig: {
            xtype: "rallychart",

            chartColors: Ext.create("Rally.apps.charts.Colors").cumulativeFlowColors(),

            queryErrorMessage: "No data to display.<br /><br />Most likely, stories are either not yet available or started for this portfolio item.",
            aggregationErrorMessage: "No data to display.<br /><br />Check the data type setting for displaying data based on count versus plan estimate.",

            storeType: 'Rally.data.lookback.SnapshotStore',
            storeConfig: {
                find: {
                    "_TypeHierarchy": -51038,
                    "Children": null
                },
                removeUnauthorizedSnapshots: true,
                compress: true,
                fetch: ["ScheduleState", "PlanEstimate"],
                hydrate: ["ScheduleState"],
                sort: {
                    "_ValidFrom": 1
                }
            },

            calculatorType: "Rally.apps.charts.rpm.cfd.CumulativeFlowCalculator",

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
                    area: {
                        stacking: 'normal',
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        }
    });
}());
