< !DOCTYPE html >
    <
    html >

    <
    head >
    <
    title > Release Burndown < /title>

    <
    script type = "text/javascript"
src = "/apps/2.1/sdk.js" > < /script>

    <
    script type = "text/javascript" >
    Rally.onReady(function () {
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.DateMixin", {
                dateFormatters: [{
                    key: "MMM",
                    value: "%b"
                }, {
                    key: "MM",
                    value: "%m"
                }, {
                    key: "dd",
                    value: "%d"
                }, {
                    key: "yyyy",
                    value: "%Y"
                }],
                dateToStringDisplay: function (date) {
                    return Ext.Date.format(date, "m/d/Y")
                },
                dateToString: function (date) {
                    return Ext.Date.format(date, "Y-m-d\\TH:i:s.u\\Z")
                },
                dateStringToObject: function (dateStr) {
                    var finalIndex = dateStr.indexOf("T"),
                        dateObj;
                    return finalIndex > -1 && (dateStr = dateStr.slice(0, dateStr.indexOf("T"))), dateObj = this._splitDateParts(dateStr), new Date(dateObj.year, dateObj.month, dateObj.day)
                },
                _getMonth: function (month) {
                    var monthMap = {
                        jan: 0,
                        feb: 1,
                        mar: 2,
                        apr: 3,
                        may: 4,
                        jun: 5,
                        jul: 6,
                        aug: 7,
                        sep: 8,
                        oct: 9,
                        nov: 10,
                        dec: 11
                    };
                    if (isNaN(month)) try {
                        month = monthMap[month.toLowerCase()]
                    } catch (err) {} else month = parseInt(month, 10) - 1;
                    return month.toString()
                },
                _objectFromYearFirstDate: function (dateArray) {
                    var month = 0,
                        day = 0,
                        year = 0;
                    return 3 !== dateArray.length ? {
                        year: year,
                        month: month,
                        day: day
                    } : (year = dateArray[0], month = this._getMonth(dateArray[1]), day = dateArray[2], {
                        year: year,
                        month: month,
                        day: day
                    })
                },
                _objectFromMonthFirstDate: function (dateArray) {
                    var month = 0,
                        day = 0,
                        year = 0;
                    return 3 !== dateArray.length ? {
                        year: year,
                        month: month,
                        day: day
                    } : (month = this._getMonth(dateArray[0]), day = dateArray[1], year = dateArray[2], {
                        month: month,
                        day: day,
                        year: year
                    })
                },
                _shouldSplitOnDash: function (dateStr) {
                    return 3 === dateStr.split("-").length
                },
                _splitDateParts: function (dateStr) {
                    return this._shouldSplitOnDash(dateStr) ? this._objectFromYearFirstDate(dateStr.split("-")) : this._objectFromMonthFirstDate(dateStr.split("/"))
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.IntegrationHeaders", {
                keyConverters: {
                    name: function () {
                        return "X-RallyIntegrationName"
                    },
                    vendor: function () {
                        return "X-RallyIntegrationVendor"
                    },
                    platform: function () {
                        return "X-RallyIntegrationPlatform"
                    },
                    os: function () {
                        return "X-RallyIntegrationOS"
                    },
                    version: function () {
                        return "X-RallyIntegrationVersion"
                    },
                    library: function () {
                        return "X-RallyIntegrationLibrary"
                    }
                },
                constructor: function (config) {
                    this.headers = {
                        name: "A2 Chart",
                        vendor: "Rally Software"
                    }, Ext.merge(this.headers, config.integrationHeaders || {}), this.callParent(config)
                },
                withName: function (nm) {
                    return this.headers.name = nm || this.headers.name, this
                },
                withVendor: function (v) {
                    return this.headers.vendor = v || this.headers.vendor, this
                },
                withPlatform: function (newPlatform) {
                    return this.headers.platform = newPlatform || this.headers.platform, this
                },
                withVersion: function (newVersion) {
                    return this.headers.version = newVersion || this.headers.version, this
                },
                withOS: function (newOS) {
                    return this.headers.os = newOS || this.headers.os, this
                },
                withLibrary: function (newLibrary) {
                    return this.headers.library = newLibrary || this.headers.library, this
                },
                applyTo: function (config) {
                    return config.headers = config.headers || {}, Ext.merge(config.headers, this.build()), config
                },
                build: function () {
                    var h = {};
                    for (var k in this.headers)
                        if (this.headers.hasOwnProperty(k)) {
                            if (null === this.headers[k]) continue;
                            var key = this._keyConverter(k)(k);
                            h[key] = this.headers[k]
                        }
                    return h
                },
                _keyConverter: function (key) {
                    return this.keyConverters.hasOwnProperty(key) ? this.keyConverters[key] : function (x) {
                        return x
                    }
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.settings.RadioGroupSetting", {
                extend: "Ext.form.FieldContainer",
                config: {
                    settingName: void 0
                },
                constructor: function (config) {
                    this.mergeConfig(config), this.callParent(arguments)
                },
                getSetting: function () {
                    return this.settingsParent.app.getSetting(this.settingName)
                },
                setRadioValue: function (cmp) {
                    this.setRadioToCustomValue(cmp, this.getSetting())
                },
                setRadioToCustomValue: function (cmp, customValue) {
                    var value = {};
                    value[cmp.name] = customValue, cmp.setValue(value)
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.settings.ChartDisplayTypePicker", {
                extend: "Rally.apps.charts.settings.RadioGroupSetting",
                alias: "widget.chartdisplaytypepicker",
                mixins: ["Ext.form.field.Field"],
                config: {
                    settingName: "chartDisplayType"
                },
                settingsParent: void 0,
                initComponent: function () {
                    this.callParent(arguments), this.add(this._getPicker())
                },
                _getPicker: function () {
                    return {
                        xtype: "radiogroup",
                        name: this.settingName,
                        columns: [160, 100],
                        vertical: !1,
                        items: [{
                            boxLabel: "Line",
                            name: this.settingName,
                            inputValue: "line",
                            checked: !0
                        }, {
                            boxLabel: "Column",
                            name: this.settingName,
                            inputValue: "column"
                        }],
                        listeners: {
                            beforerender: this.setRadioValue,
                            scope: this
                        }
                    }
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.settings.SettingsChangeMixin", {
                sendSettingsChange: function (artifact) {
                    this.settingsParent && this.settingsParent.sendSettingsChange(artifact, this)
                },
                receiveSettingsChange: function (artifact) {}
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.settings.DataTypePicker", {
                extend: "Rally.apps.charts.settings.RadioGroupSetting",
                alias: "widget.chartdatatypepicker",
                mixins: ["Ext.form.field.Field", "Rally.apps.charts.settings.SettingsChangeMixin"],
                config: {
                    settingName: "chartAggregationType"
                },
                settingsParent: void 0,
                initComponent: function () {
                    this.callParent(arguments), this.add(this._addRadioGroup())
                },
                _addRadioGroup: function () {
                    return {
                        xtype: "radiogroup",
                        name: this.settingName,
                        columns: [160, 100],
                        vertical: !1,
                        items: [{
                            boxLabel: "Story Plan Estimate",
                            name: this.settingName,
                            inputValue: "storypoints",
                            checked: !0
                        }, {
                            boxLabel: "Story Count",
                            name: this.settingName,
                            inputValue: "storycount"
                        }],
                        listeners: {
                            beforerender: this.setRadioValue,
                            scope: this
                        }
                    }
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.settings.TimeboxPicker", {
                extend: "Rally.apps.charts.settings.RadioGroupSetting",
                alias: "widget.charttimeboxpicker",
                mixins: ["Ext.form.field.Field"],
                config: {
                    settingName: "chartTimebox"
                },
                settingsParent: void 0,
                initComponent: function () {
                    this.callParent(arguments), this._addRadioGroup()
                },
                _addRadioGroup: function () {
                    this.add({
                        xtype: "radiogroup",
                        name: this.settingName,
                        itemId: this.settingName,
                        label: "Level",
                        columns: [160, 100, 100],
                        vertical: !1,
                        items: [{
                            boxLabel: "Release",
                            name: this.settingName,
                            inputValue: "release",
                            checked: !0
                        }, {
                            boxLabel: "Iteration",
                            name: this.settingName,
                            inputValue: "iteration"
                        }],
                        listeners: {
                            beforerender: this.setRadioValue,
                            scope: this
                        },
                        config: {
                            cls: "levelchooser"
                        }
                    })
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.burndown.BurnDownSettings", {
                requires: ["Rally.apps.charts.settings.ChartDisplayTypePicker", "Rally.apps.charts.settings.DataTypePicker", "Rally.apps.charts.settings.TimeboxPicker", "Rally.ui.CheckboxField"],
                config: {
                    app: void 0
                },
                constructor: function (config) {
                    this.mergeConfig(config)
                },
                _buildSettingsComponent: function (type, label, name) {
                    var self = this,
                        componentAdded = function (cmp) {
                            this.settingsParent = this.settingsParent || self
                        },
                        settings = {
                            xtype: type,
                            label: label,
                            listeners: {
                                added: componentAdded
                            }
                        };
                    return name && (settings.name = name, settings.cls = "settings-" + name), settings
                },
                _isOnScopedDashboard: function () {
                    return this.app.isOnScopedDashboard() && !!this.app.context.getTimeboxScope()
                },
                getFields: function () {
                    var dataTypePicker = this._buildSettingsComponent("chartdatatypepicker", "Data Type"),
                        displayPicker = this._buildSettingsComponent("chartdisplaytypepicker", "Chart Type"),
                        timeboxPicker = this._buildSettingsComponent("charttimeboxpicker", "Level"),
                        labelNameVisible = this._buildSettingsComponent("rallycheckboxfield", "Show Iteration Labels", "showLabels");
                    return this._isOnScopedDashboard() ? [dataTypePicker, displayPicker, labelNameVisible] : [timeboxPicker, dataTypePicker, displayPicker, labelNameVisible]
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.burndown.BurnDownChart", {
                requires: ["Rally.ui.chart.Chart"],
                defaultChartComponentConfig: function () {
                    return {
                        xtype: "rallychart",
                        itemId: "burndownchart",
                        aggregationErrorMessage: "No data to display. Check the data type setting for displaying data based on count versus plan estimate.",
                        storeType: "Rally.data.lookback.SnapshotStore",
                        storeConfig: {
                            find: {
                                _TypeHierarchy: {
                                    $in: [-51038, -51006]
                                },
                                Children: null
                            },
                            fetch: ["ScheduleState", "PlanEstimate", "ObjectId", "_ValidFrom", "_ValidTo"],
                            hydrate: ["ScheduleState"],
                            sort: {
                                _ValidFrom: 1
                            },
                            compress: !0,
                            useHttpPost: !0
                        },
                        calculatorType: "Rally.apps.charts.burndown.BurnDownCalculator",
                        calculatorConfig: {
                            timeZone: "GMT",
                            completedScheduleStateNames: null,
                            enableProjections: !0
                        },
                        chartColors: ["#d61551", "#6a0b70", "grey", "white", "orange"],
                        cls: "myCustom",
                        overCls: "myOver",
                        chartConfig: {
                            chart: {
                                zoomType: "xy",
                                backgroundColor: "#000"
                            },
                            xAxis: {
                                categories: [],
                                tickmarkPlacement: "on",
                                tickInterval: 7,
                                title: {
                                    text: "Days",
                                    margin: 12
                                },
                                maxPadding: .25,
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
                                    return isNaN(floatValue) || (value = Math.floor(100 * floatValue) / 100), "" + this.x + "<br />" + this.series.name + ": " + value
                                }
                            },
                            plotOptions: {
                                areaSpline: {
                                    fillOpacity: .5
                                },
                                series: {
                                    type: "area",
                                    marker: {
                                        enabled: !0,
                                        symbol: "circle",
                                        radius: 3,
                                        states: {
                                            hover: {
                                                enabled: !0
                                            }
                                        }
                                    },
                                    area: {
                                        stacking: "normal"
                                    },
                                    connectNulls: !0
                                },
                                column: {
                                    pointPadding: 0,
                                    borderWidth: 0,
                                    stacking: null,
                                    shadow: !1
                                }
                            }
                        }
                    }
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.burndown.BurnDownApp", {
                extend: "Rally.app.TimeboxScopedApp",
                settingsScope: "workspace",
                requires: ["Rally.apps.charts.burndown.BurnDownSettings", "Rally.data.wsapi.Store", "Rally.util.Help", "Rally.ui.combobox.IterationComboBox", "Rally.ui.combobox.ReleaseComboBox", "Rally.apps.charts.IntegrationHeaders", "Rally.apps.charts.burndown.BurnDownChart"],
                mixins: ["Rally.apps.charts.DateMixin"],
                cls: "burndown-app",
                items: [{
                    xtype: "container",
                    itemId: "header",
                    cls: "header"
                }],
                help: {
                    id: 278
                },
                scopeObject: void 0,
                customScheduleStates: null,
                config: {
                    defaultSettings: {
                        showLabels: !0,
                        chartAggregationType: void 0,
                        chartDisplayType: void 0,
                        chartTimebox: void 0,
                        title: ""
                    }
                },
                chartComponentConfig: void 0,
                getSettingsFields: function () {
                    return this.chartSettings = this.chartSettings || Ext.create("Rally.apps.charts.burndown.BurnDownSettings", {
                        app: this
                    }), this.chartSettings.getFields()
                },
                onScopeChange: function (scope) {
                    this.ignoreOnScopeChange || this._rebuildChartForScope(scope.getRecord().get("_ref"))
                },
                launch: function () {
                    return this._settingsInvalid() ? void this.fireEvent("settingsneeded", this) : (this.customScheduleStates = null, this.chartComponentConfig = Ext.create("Rally.apps.charts.burndown.BurnDownChart", this).defaultChartComponentConfig(), Ext.create("Rally.apps.charts.IntegrationHeaders", this).applyTo(this.chartComponentConfig.storeConfig), this._addHelpComponent(), this._loadUserStoryModel(), this._saveScopeType(), this.callParent(arguments), void(this.isOnScopedDashboard() || (this.ignoreOnScopeChange = !0, this._getScopePicker().on("ready", this._loadScopePreference, this, {
                        single: !0
                    }))))
                },
                _addHelpComponent: function () {
                    this.down("#header").add(this._buildHelpComponent())
                },
                _buildHelpComponent: function () {
                    return Ext.create("Ext.Component", {
                        renderTpl: Rally.util.Help.getIcon({
                            cls: Rally.util.Test.toBrowserTestCssClass(this.help.cls),
                            id: this.help.id
                        })
                    })
                },
                _rebuildChartForScope: function (scopeRef) {
                    this._destroyChart(), this._saveScopePreference(scopeRef), this._loadScopeObject(scopeRef)
                },
                _destroyChart: function () {
                    this.remove("burndownchart")
                },
                _saveScopePreference: function (scopeRef) {
                    if (!this.isOnScopedDashboard()) {
                        var settings = {};
                        settings[this._getScopeType()] = scopeRef, Rally.data.PreferenceManager.update({
                            appID: this.getContext().get("appID"),
                            settings: settings,
                            scope: this
                        })
                    }
                },
                _loadScopePreference: function (picker) {
                    Rally.data.PreferenceManager.load({
                        appID: this.getContext().get("appID"),
                        success: function (preferences) {
                            var scopeRef = preferences[this._getScopeType()];
                            if (!scopeRef || "undefined" === scopeRef) {
                                var pickerRecord = picker.getRecord();
                                pickerRecord && (scopeRef = pickerRecord.get("_ref"), this._saveScopePreference(scopeRef))
                            }
                            this.ignoreOnScopeChange = !1, scopeRef && "undefined" !== scopeRef && (this._setScopeValue(scopeRef), scopeRef = this._getScopePicker().getValue(), scopeRef && this._rebuildChartForScope(scopeRef))
                        },
                        scope: this
                    })
                },
                _setScopeValue: function (scopeRef) {
                    this._getScopePicker().setValue(scopeRef)
                },
                _loadTimeboxes: function () {
                    Ext.create("Rally.data.wsapi.Store", {
                        model: this.scopeObject._type,
                        filters: [{
                            property: "Name",
                            operator: "=",
                            value: this.scopeObject.Name
                        }, {
                            property: this._getScopeObjectStartDateName(),
                            operator: "=",
                            value: Rally.util.DateTime.toIsoString(this._getScopeObjectStartDate(), !0)
                        }, {
                            property: this._getScopeObjectEndDateName(),
                            operator: "=",
                            value: Rally.util.DateTime.toIsoString(this._getScopeObjectEndDate(), !0)
                        }],
                        context: this.getContext().getDataContext(),
                        fetch: ["ObjectID"],
                        limit: 1 / 0,
                        autoLoad: !0,
                        listeners: {
                            load: function (store, records) {
                                this._getTimeboxesInScope(store, records)
                            },
                            scope: this
                        }
                    })
                },
                _onScopeObjectLoaded: function (record) {
                    this._setScopeFromData(record), this._updateChartTitle(), this._updateYAxis(), this._addDateBounds(), this._addAggregationTypeToCalculator(), this._loadTimeboxes()
                },
                _renderChartBasedOnType: function () {
                    "release" === this._getScopeType() ? this._fetchIterations() : null === this.customScheduleStates ? this.deferredAddChart = this._addChart : this._addChart()
                },
                _setScopeFromData: function (record) {
                    this.scopeObject = record.data
                },
                _getTimeboxesInScope: function (store, records) {
                    var storeConfig = this.chartComponentConfig.storeConfig,
                        type = Ext.String.capitalize(this._getScopeType()),
                        oids = [],
                        i;
                    for (this.timeboxes = store.getItems(), this._clearStoreConfig(storeConfig), i = 0; i < this.timeboxes.length; i++) oids.push(this.timeboxes[i].ObjectID);
                    storeConfig.find[type] = {
                        $in: oids
                    }, this._renderChartBasedOnType()
                },
                _addChartWithIterationLines: function () {
                    this._addChart(), this.down("rallychart").on("snapshotsAggregated", this._addIterationLines, this)
                },
                _onIterationsLoaded: function (store) {
                    this.iterations = store.getItems(), null === this.customScheduleStates ? this.deferredAddChart = this._addChartWithIterationLines : this._addChartWithIterationLines()
                },
                _addDateBounds: function () {
                    this._addDateBoundsToQuery(), this._addDateBoundsToCalculator()
                },
                _addDateBoundsToQuery: function () {},
                _getNow: function () {
                    return new Date
                },
                _addDateBoundsToCalculator: function () {
                    var calcConfig = this.chartComponentConfig.calculatorConfig,
                        endDate = this._getScopeObjectEndDate(),
                        now = this._getNow();
                    calcConfig.startDate = Rally.util.DateTime.toIsoString(this._getScopeObjectStartDate(), !0), now > this._getScopeObjectStartDate() && now < this._getScopeObjectEndDate() && (endDate = now), calcConfig.endDate = Rally.util.DateTime.toIsoString(endDate, !0), now > this._getScopeObjectEndDate() ? calcConfig.enableProjections = !1 : calcConfig.enableProjections = !0, calcConfig.scopeEndDate = this._getScopeObjectEndDate()
                },
                _addAggregationTypeToCalculator: function () {
                    var calcConfig = this.chartComponentConfig.calculatorConfig;
                    calcConfig.chartAggregationType = this.getSetting("chartAggregationType")
                },
                _updateCompletedScheduleStates: function () {
                    var calcConfig = this.chartComponentConfig.calculatorConfig;
                    calcConfig.completedScheduleStateNames = this.customScheduleStates
                },
                _loadScopeObject: function (scopeRef) {
                    Rally.data.ModelFactory.getModel({
                        type: this._getScopeType(),
                        context: {
                            workspace: this.getContext().getWorkspaceRef(),
                            project: null
                        },
                        success: function (model) {
                            model.load(Rally.util.Ref.getOidFromRef(scopeRef), {
                                success: function (record) {
                                    this._onScopeObjectLoaded(record)
                                },
                                scope: this
                            })
                        },
                        scope: this
                    })
                },
                _fetchIterations: function () {
                    var store = Ext.create("Rally.data.wsapi.Store", {
                        model: Ext.identityFn("Iteration"),
                        filters: [{
                            property: "StartDate",
                            operator: ">=",
                            value: Rally.util.DateTime.toIsoString(this._getScopeObjectStartDate(), !0)
                        }, {
                            property: "EndDate",
                            operator: "<=",
                            value: Rally.util.DateTime.toIsoString(this._getScopeObjectEndDate(), !0)
                        }],
                        context: {
                            workspace: this.getContext().getWorkspaceRef(),
                            project: this.getContext().getProjectRef()
                        },
                        fetch: ["Name", "StartDate", "EndDate"],
                        limit: 1 / 0
                    });
                    store.on("load", this._onIterationsLoaded, this), store.load()
                },
                _areIterationsEqual: function (iteration1, iteration2) {
                    return iteration1.Name === iteration2.Name && iteration1.StartDate === iteration2.StartDate && iteration1.EndDate === iteration2.EndDate
                },
                _addIterationLines: function (chart) {
                    var axis = chart.chartConfig.xAxis,
                        categories = chart.chartData.categories,
                        i, j, uniqueIterations = [],
                        unique;
                    for (axis.plotLines = [], axis.plotBands = [], i = 0; i < this.iterations.length; i++) {
                        for (unique = !0, j = 0; j < uniqueIterations.length; j++)
                            if (this._areIterationsEqual(uniqueIterations[j], this.iterations[i])) {
                                unique = !1;
                                break
                            }
                        unique === !0 && uniqueIterations.push(this.iterations[i])
                    }
                    for (i = 0; i < uniqueIterations.length; i++) axis.plotLines.push(this._getPlotLine(categories, uniqueIterations[i], !1)), axis.plotBands.push(this._getPlotBand(categories, uniqueIterations[i], i % 2 !== 0));
                    uniqueIterations.length > 0 && axis.plotLines.push(this._getPlotLine(categories, uniqueIterations[uniqueIterations.length - 1], !0))
                },
                _buildLabelText: function (iteration) {
                    var labelSetting = this.getSetting("showLabels"),
                        text = "";
                    return labelSetting && (text = iteration.Name || ""), text
                },
                _getPlotBand: function (categories, iteration, shouldColorize) {
                    var startDate = this.dateStringToObject(iteration.StartDate),
                        endDate = this.dateStringToObject(iteration.EndDate),
                        label = {
                            text: this._buildLabelText(iteration),
                            align: "center",
                            rotation: 0,
                            y: -7
                        };
                    return {
                        color: shouldColorize ? "#F2FAFF" : "#FFFFFF",
                        from: this._getNearestWorkday(categories, startDate),
                        to: this._getNearestWorkday(categories, endDate),
                        label: label
                    }
                },
                _getNearestWorkday: function (categories, date) {
                    var dateStr = Ext.Date.format(date, "Y-m-d"),
                        index = categories.indexOf(dateStr);
                    if (index === -1) {
                        var workdays = this._getWorkspaceConfiguredWorkdays();
                        if (workdays.length < 1) return -1;
                        for (; workdays.indexOf(Ext.Date.format(date, "l")) === -1 && date > this._getScopeObjectStartDate();) date = Ext.Date.add(date, Ext.Date.DAY, -1), dateStr = Ext.Date.format(date, "Y-m-d"), index = categories.indexOf(dateStr)
                    }
                    return index
                },
                _getPlotLine: function (categories, iteration, lastLine) {
                    var dateObj, dateIndex;
                    return dateObj = lastLine ? this.dateStringToObject(iteration.EndDate) : this.dateStringToObject(iteration.StartDate), dateIndex = this._getNearestWorkday(categories, dateObj), {
                        color: "#BBBBBB",
                        dashStyle: "ShortDash",
                        width: 2,
                        zIndex: 3,
                        value: dateIndex
                    }
                },
                _addChart: function () {
                    this._updateCompletedScheduleStates(), this._updateChartConfigDateFormat(), this._updateChartConfigWorkdays();
                    var chartComponentConfig = Ext.Object.merge({}, this.chartComponentConfig);
                    this.add(chartComponentConfig), this.down("rallychart").on("snapshotsAggregated", this._onSnapshotDataReady, this)
                },
                _onSnapshotDataReady: function (chart) {
                    this._updateDisplayType(chart), this._updateXAxis(chart)
                },
                _updateDisplayType: function (chart) {
                    var series = chart.chartData.series,
                        displayType = this.getSetting("chartDisplayType"),
                        i;
                    for (i = 0; i < series.length; i++) this._seriesFollowsDisplayType(series[i]) && (series[i].type = displayType)
                },
                _seriesFollowsDisplayType: function (series) {
                    return series.name.indexOf("Ideal") === -1 && series.name.indexOf("Prediction") === -1
                },
                _updateYAxis: function () {
                    this._updateYAxisTitle(), this._updateYAxisConfig()
                },
                _updateYAxisTitle: function () {
                    var chartConfig = this.chartComponentConfig.chartConfig;
                    chartConfig.yAxis = [{}], chartConfig.yAxis[0].title = {
                        text: this._getAxisTitleBasedOnAggregationType()
                    }
                },
                _updateYAxisConfig: function () {
                    var axis = this.chartComponentConfig.chartConfig.yAxis[0];
                    axis.min = 0, axis.labels = {
                        x: -5,
                        y: 4
                    }
                },
                _updateXAxis: function (chart) {
                    this.container.dom.offsetWidth < 1e3 && (chart.chartConfig.xAxis.labels.staggerLines = 2), chart.chartConfig.xAxis.labels.step = Math.round(chart.chartData.categories.length / 100), chart.chartConfig.xAxis.tickInterval = this._configureChartTicks(chart.chartData.categories.length)
                },
                _configureChartTicks: function (days) {
                    var pixelTickWidth = 125,
                        appWidth = this.getWidth(),
                        ticks = Math.floor(appWidth / pixelTickWidth);
                    return Math.ceil(days / ticks)
                },
                _getAxisTitleBasedOnAggregationType: function () {
                    var aggregationType = this.getSetting("chartAggregationType");
                    return "storycount" === aggregationType ? "Count" : "Points"
                },
                _updateChartConfigDateFormat: function () {
                    var self = this;
                    this.chartComponentConfig.chartConfig.xAxis.labels.formatter = function () {
                        return self._formatDate(self.dateStringToObject(this.value))
                    }
                },
                _updateChartConfigWorkdays: function () {
                    this.chartComponentConfig.calculatorConfig.workDays = this._getWorkspaceConfiguredWorkdays().split(",")
                },
                _parseRallyDateFormatToHighchartsDateFormat: function () {
                    for (var dateFormat = this._getUserConfiguredDateFormat() || this._getWorkspaceConfiguredDateFormat(), i = 0; i < this.dateFormatters.length; i++) dateFormat = dateFormat.replace(this.dateFormatters[i].key, this.dateFormatters[i].value);
                    return dateFormat
                },
                _formatDate: function (date) {
                    return this.dateFormat || (this.dateFormat = this._parseRallyDateFormatToHighchartsDateFormat()), Highcharts.dateFormat(this.dateFormat, date.getTime())
                },
                _getUserConfiguredDateFormat: function () {
                    return this.getContext().getUser().UserProfile.DateFormat
                },
                _getWorkspaceConfiguredDateFormat: function () {
                    return this.getContext().getWorkspace().WorkspaceConfiguration.DateFormat
                },
                _getWorkspaceConfiguredWorkdays: function () {
                    return this.getContext().getWorkspace().WorkspaceConfiguration.WorkDays
                },
                _updateChartTitle: function () {
                    this.chartComponentConfig.chartConfig.title = this._buildChartTitle()
                },
                _buildChartTitle: function () {
                    var widthPerCharacter = 10,
                        totalCharacters = Math.floor(this.getWidth() / widthPerCharacter),
                        title = this._getDefaultTitle(),
                        align = "center";
                    return this.scopeObject && (title = this.scopeObject.Name), totalCharacters < title.length && (title = title.substring(0, totalCharacters) + "...", align = "left"), {
                        text: title,
                        align: align,
                        margin: 30
                    }
                },
                _getDefaultTitle: function () {
                    return Ext.String.capitalize(this._getScopeType())
                },
                _settingsInvalid: function () {
                    var chartAggregationType = this.getSetting("chartAggregationType"),
                        chartDisplayType = this.getSetting("chartDisplayType"),
                        chartTimebox = this.getSetting("chartTimebox"),
                        invalid = function (value) {
                            return !value || "undefined" === value
                        };
                    return invalid(chartAggregationType) || invalid(chartDisplayType) || this._chartTimeboxInvalid(chartTimebox)
                },
                _chartTimeboxInvalid: function (chartTimebox) {
                    return !this.context.getTimeboxScope() && (!chartTimebox || "undefined" === chartTimebox)
                },
                _saveScopeType: function () {
                    this.scopeType = this._getScopeType()
                },
                _getScopeType: function () {
                    return this.isOnScopedDashboard() ? this._getDashboardScopeType() : this._getSavedScopeType()
                },
                _getDashboardScopeType: function () {
                    return this.getContext().getTimeboxScope().getType()
                },
                _getSavedScopeType: function () {
                    return this.getSetting("chartTimebox")
                },
                _getScopePicker: function () {
                    return this.isOnScopedDashboard() ? this.getContext().getTimeboxScope() : this.down("rally" + this._getScopeType() + "combobox")
                },
                _getScopeObjectStartDateName: function () {
                    return this.scopeObject ? "release" === this.scopeObject._type ? "ReleaseStartDate" : "StartDate" : ""
                },
                _getScopeObjectEndDateName: function () {
                    return this.scopeObject ? "release" === this.scopeObject._type ? "ReleaseDate" : "EndDate" : ""
                },
                _getScopeObjectStartDate: function () {
                    return this.scopeObject ? "release" === this.scopeObject._type ? this.scopeObject.ReleaseStartDate : this.scopeObject.StartDate : this._getNow()
                },
                _getScopeObjectEndDate: function () {
                    return this.scopeObject ? "release" === this.scopeObject._type ? this.scopeObject.ReleaseDate : this.scopeObject.EndDate : this._getNow()
                },
                _clearStoreConfig: function (storeConfig) {
                    storeConfig.find.hasOwnProperty("Release") && delete storeConfig.find.Release, storeConfig.find.hasOwnProperty("Iteration") && delete storeConfig.find.Iteration
                },
                _loadUserStoryModel: function () {
                    Rally.data.ModelFactory.getModel({
                        type: "UserStory",
                        context: this._getContext(),
                        success: function (model) {
                            this._getScheduleStateValues(model)
                        },
                        scope: this
                    })
                },
                _getContext: function () {
                    return {
                        workspace: this.context.getWorkspaceRef(),
                        project: null
                    }
                },
                _getScheduleStateValues: function (model) {
                    var scheduleStates = model.getField("ScheduleState").getAllowedStringValues();
                    this.customScheduleStates = scheduleStates.slice(scheduleStates.indexOf("Accepted"), scheduleStates.length), this.deferredAddChart && this.deferredAddChart.call(this)
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.burndown.BurnDownCalculator", {
                extend: "Rally.data.lookback.calculator.TimeSeriesCalculator",
                mixins: ["Rally.apps.charts.DateMixin"],
                getDerivedFieldsOnInput: function () {
                    var completedStates = this.config.completedScheduleStateNames,
                        aggregationType = this.config.chartAggregationType;
                    return [{
                        as: "RemainingPoints",
                        f: function (snapshot) {
                            var ss = snapshot.ScheduleState;
                            if (completedStates.indexOf(ss) < 0) {
                                if ("storycount" === aggregationType) return 1;
                                if (snapshot.PlanEstimate) return snapshot.PlanEstimate
                            }
                            return 0
                        }
                    }, {
                        as: "AcceptedPoints",
                        f: function (snapshot) {
                            var ss = snapshot.ScheduleState;
                            if (completedStates.indexOf(ss) > -1) {
                                if ("storycount" === aggregationType) return 1;
                                if (snapshot.PlanEstimate) return snapshot.PlanEstimate
                            }
                            return 0
                        }
                    }]
                },
                getMetrics: function () {
                    return [{
                        field: "RemainingPoints",
                        as: "To Do",
                        f: "sum"
                    }, {
                        field: "AcceptedPoints",
                        as: "Accepted",
                        f: "sum"
                    }]
                },
                getSummaryMetricsConfig: function () {
                    return [{
                        as: "Scope_max",
                        f: function (seriesData) {
                            var max = 0,
                                i = 0;
                            for (i = 0; i < seriesData.length; i++) seriesData[i].Accepted + seriesData[i]["To Do"] > max && (max = seriesData[i].Accepted + seriesData[i]["To Do"]);
                            return max
                        }
                    }]
                },
                getDerivedFieldsAfterSummary: function () {
                    return [{
                        as: "Ideal",
                        f: function (row, index, summaryMetrics, seriesData) {
                            var max = summaryMetrics.Scope_max,
                                increments = seriesData.length - 1,
                                incrementAmount;
                            return 0 === increments ? max : (incrementAmount = max / increments, Math.floor(100 * (max - index * incrementAmount)) / 100)
                        },
                        display: "line"
                    }, {
                        as: "Prediction",
                        f: function (row, index, summaryMetrics, seriesData) {
                            return null
                        },
                        display: "line",
                        dashStyle: "Dash"
                    }]
                },
                getProjectionsConfig: function () {
                    var days = (this.scopeEndDate.getTime() - Rally.util.DateTime.fromIsoString(this.startDate).getTime()) / 864e5,
                        doubleTimeboxEnd = Ext.Date.add(Rally.util.DateTime.fromIsoString(this.startDate), Ext.Date.DAY, 2 * Math.floor(days) - 1),
                        timeboxEnd = Ext.Date.add(this.scopeEndDate, Ext.Date.DAY, -1);
                    return void 0 === this.projectionsConfig && (this.projectionsConfig = {
                        doubleTimeboxEnd: doubleTimeboxEnd,
                        timeboxEnd: timeboxEnd,
                        series: [{
                            as: "Prediction",
                            field: "To Do"
                        }],
                        continueWhile: function (point) {
                            var dt = Rally.util.DateTime.fromIsoString(point.tick),
                                end = this.series[0].slope >= 0 ? this.timeboxEnd : this.doubleTimeboxEnd;
                            return point.Prediction > 0 && dt < end
                        }
                    }), this.projectionsConfig
                },
                _firstNonZero: function (data) {
                    var i;
                    for (i = 0; i < data.length; i++)
                        if (data[i] > 0) return i;
                    return 0
                },
                _leastSquares: function (todoValues, firstIndex, lastIndex) {
                    var n = lastIndex + 1 - firstIndex,
                        i, sumx = 0,
                        sumx2 = 0,
                        sumy = 0,
                        sumy2 = 0,
                        sumxy = 0,
                        slope, yintercept;
                    for (i = firstIndex; i <= lastIndex; i++) sumx += i, sumx2 += i * i, sumy += todoValues[i], sumy2 += todoValues[i] * todoValues[i], sumxy += i * todoValues[i];
                    return slope = (n * sumxy - sumx * sumy) / (n * sumx2 - sumx * sumx), yintercept = (sumy * sumx2 - sumx * sumxy) / (n * sumx2 - sumx * sumx), {
                        slope: slope,
                        yintercept: yintercept
                    }
                },
                runCalculation: function (snapshots) {
                    var chartData = this.callParent(arguments);
                    if (chartData && chartData.projections && chartData.projections.series[0].slope > 0) {
                        var todoData = chartData.series[0].data,
                            firstTodoIndex = this._firstNonZero(todoData),
                            lastTodoIndex = todoData.length - 1 - chartData.projections.pointsAddedCount,
                            results = this._leastSquares(todoData, firstTodoIndex, lastTodoIndex);
                        if (results.slope <= 0) this.projectionsConfig.series[0].slope = results.slope, chartData = this.callParent(arguments), chartData.series[3].data[firstTodoIndex] = results.slope * firstTodoIndex + results.yintercept + (chartData.series[3].data[lastTodoIndex] - (results.slope * lastTodoIndex + results.yintercept)), chartData.series[3].connectNulls = !0, this.projectionsConfig = void 0;
                        else {
                            var predictionCeiling = 1.25 * chartData.series[2].data[0];
                            if (_.max(chartData.series[3].data) > predictionCeiling) {
                                var i, maxVal = predictionCeiling;
                                for (i = 0; i < chartData.series[3].data.length; i++) chartData.series[3].data[i] > predictionCeiling && (chartData.series[3].data[i] = maxVal, maxVal = null)
                            }
                        }
                    }
                    return new Date < this.scopeEndDate && this._recomputeIdeal(chartData, this.scopeEndDate), chartData
                },
                _recomputeIdeal: function (chartData, endDate) {
                    var index;
                    if (!(chartData.categories.length < 1 || this.workDays.length < 1)) {
                        var lastDate = Ext.Date.parse(chartData.categories[chartData.categories.length - 1], "Y-m-d");
                        if (endDate > lastDate) {
                            index = chartData.categories.length;
                            for (var dt = Ext.Date.add(lastDate, Ext.Date.DAY, 1); dt < endDate;) {
                                for (; this.workDays.indexOf(Ext.Date.format(dt, "l")) === -1;) dt = Ext.Date.add(dt, Ext.Date.DAY, 1);
                                dt < endDate && (chartData.categories[index++] = Ext.Date.format(dt, "Y-m-d")), dt = Ext.Date.add(dt, Ext.Date.DAY, 1)
                            }
                            index = chartData.categories.length - 1
                        } else if (index = this._indexOfDate(chartData, endDate), index === -1)
                            for (; this.workDays.indexOf(Ext.Date.format(endDate, "l")) === -1;) endDate = Ext.Date.add(endDate, Ext.Date.DAY, -1), index = this._indexOfDate(chartData, endDate);
                        if (!(index < 0)) {
                            var i, seriesData = chartData.series[2].data;
                            for (i = 1; i < index; i++) seriesData[i] = null;
                            seriesData[index] = 0
                        }
                    }
                },
                _indexOfDate: function (chartData, date) {
                    var dateStr = Ext.Date.format(date, "Y-m-d");
                    return chartData.categories.indexOf(dateStr)
                },
                _removeFutureSeries: function (chartData, seriesIndex, dayIndex) {
                    if (chartData.series[seriesIndex].data.length > dayIndex)
                        for (; ++dayIndex < chartData.series[seriesIndex].data.length;) chartData.series[seriesIndex].data[dayIndex] = null
                },
                _projectionsSlopePositive: function (chartData) {
                    return !chartData.projections || !chartData.projections.series || chartData.projections.series[0].slope >= 0
                }
            })
        }();
        ! function () {
            var Ext = window.Ext4 || window.Ext;
            Ext.define("Rally.apps.charts.burndown.ReleaseBurnDownApp", {
                extend: "Rally.apps.charts.burndown.BurnDownApp",
                help: {
                    id: 278
                },
                integrationHeaders: {
                    name: "Release Burndown"
                }
            })
        }();

        Rally.launchApp('Rally.apps.charts.burndown.ReleaseBurnDownApp', {
            name: "Release Burndown",
            parentRepos: ""
        });

    }); <
/script>


<
style type = "text/css" >
    .burndown - app.chartControls,
    .app - settings.settings - form.paddedSettingCmp {
        margin: 15 px;
        border: 0 px
    }

    .burndown - app.chartControls.rui - triggerfield {
        display: inline - block
    }

    .burndown - app.chartControls label {
        display: inline - block;
        font - size: 1.2e m;
        margin: 3 px 8 px
    }

    .portfolio - cfd - app,
    .portfolio - burnup - app,
    .burndown - app {
        margin: 10 px;
        padding - right: 20 px;
        background - color: transparent
    }

    .portfolio - cfd - app.rally - help - icon,
    .burndown - app.rally - help - icon,
    .portfolio - burnup - app.rally - help - icon,
    .chart - app.rally - help - icon {
        float: right
    }

    .portfolio - cfd - app.chart,
    .portfolio - burnup - app.chart {
        min - height: 2e m
    }

    .app - settings.settings - form.piButton {
        padding: 5 px 15 px 7 px 15 px;
        z - index: 101;
        margin - bottom: 10 px
    }

    .app - settings.settings - form.piDisplayField {
        background - color: #e2eff6;
        margin - left: -10 px;
        min - width: 250 px;
        padding: 5 px 20 px 3 px 25 px;
        z - index: 100; -
        webkit - border - radius: 3 px; -
        moz - border - radius: 3 px;
        border - radius: 3 px
    }

    .app - settings.settings - form.settingsLabel {
        display: block;
        font - family: NotoSansBold,
        Helvetica,
        Arial;
        font - weight: normal;
        min - height: 20 px;
        text - transform: uppercase;
        width: 100 px
    }

table.settings - showLabels label {
    white - space: nowrap;
    width: auto
}

table.settings - showLabels td {
        width: 130 px
    }

    .schedule - state - selector.x - boundlist - selected.x - form - checkbox {
        background - position: 0 - 13 px
    }

    .statefieldvalue - boundlist - item img.stateFieldValue {
        background: transparent url('checkbox.gif');
        height: 13 px;
        width: 13 px
    }

    .statefieldvalue - boundlist - selected img.stateFieldValue {
        background: transparent url('checkbox.gif');
        height: 13 px;
        width: 13 px;
        background - position - x: 0 px;
        background - position - y: -13 px
    } <
    /style> <
    /head>

    <
    body >
    <
    /body>

    <
    /html>