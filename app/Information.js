Ext.define('App.Information', {
    config: {
        // Rally Colours
        //PrallyColours_10: ['#0096DB', '#004A9D', '#FF3C00', '#FF8D00', '#FFDC00', '#6F7376', '#FFF', '#FF0069', '#41006E', '#00710C'],
        // Barclays Colours
        //PbarclaysColours_5: ['#145FAC', '#437EA0', '#00AEEF', '#FFF', '#FFA000'],

        //PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#437EA0"], // Bits we need
        PtabBGstripePercent: 5,
    },
    _divFormater: function (a, b) {
        var o;
        var st = 'style="';
        var bg = 'background:';
        var md = ';';
        var cl = 'color:';
        var f = '";';
        var megan = [{
            "header": "#d61551"
        }, {
            "color": "#c9506f"
        }];
        o = st + bg + megan[a].header + md + cl + megan[b].color + f;


        return o;
    },
    _writePanelContent: function (t) {
        if (t === 'about') {
            var o = '<div class="divTable">' +
                '<div class="divTableBody">' +
                '<div class="divTableRowHeader">' +
                '<div class="divTableCellHeader_stretched" ' + this._divFormater(0, 1) + '>About</div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellHeader" ' + this._divFormater(0, 1) + '>Configuration</div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellHeader" ' + this._divFormater(0, 1) + '">Data Types</div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellHeader" ' + this._divFormater(0, 1) + '>Chart Type</div>' +
                '</div>' +
                '<div class="divTableRowContent">' +
                '<div class="divTableCellContent_stretched" ' + this._divFormater(1, 0) + '>Displays the Burn delta between remaining and accepted user stories</div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellContent" ' + this._divFormater(1, 0) + '>&nbsp;</div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellContent" ' + this._divFormater(1, 0) + '><ol><li>Planned Estimate</li><li>User Story Count</li></ol></div>' +
                '<div class="divSpacer">&nbsp;</div>' +
                '<div class="divTableCellContent" ' + this._divFormater(1, 0) + '><ol><li>Area</li><li>Column</li><li>Line</li><li>Split</li></ol></div>' +
                '</div>' +
                '</div>' +
                '</div>';
            return o;
        }
    },
    _generate_Version: function () {
        var output = this.Pversion;
        return output;
    },
    _generate_Tabs: function () {
        var h_panel = 160;
        var h_button = 25;
        var p_panel = 10;
        var f_panel_font_size = 15;
        var colour_Shade_Percent = 20;

        var xData1;// = getContext().getUser();
        var xData2;// = getContext().getProject();
        var xData3;// = getContext().getWorkspace();
        var appVersion = Ext.create('App.System')._this_Application_Details('inapp');
        var myColours_Barclays = Ext.create('App.Config').PbarclaysColours_5;
        var myColours_MyColours = Ext.create('App.Config').PmyColours;

        var about___Text = this._writePanelContent('about');
        var version_Text = Ext.create('App.Config')._generate_Version();
        var usage___Text = Ext.create('App.Config').Pusage;
        var support___Text = Ext.create('App.Config').Psupport;

        /* Colour Reference from Config Arrays
        PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#437EA0"],
        PbarclaysColours_5: ['#145FAC', '#437EA0', '#00AEEF', '#FFF', '#FFA000'],
        */
        /* ACTIVE THEME -> Orange */
        var tabColour_1 = myColours_MyColours[11];
        var tabColour_2 = myColours_MyColours[11];
        var tabColour_3 = myColours_MyColours[11];
        var panelBaseColor = myColours_MyColours[12];
        var bodyStyle = 'font-size:' + f_panel_font_size + 'px;padding:' + p_panel + 'px;';

        var colour_Background_Darken = Ext.create('App.Tools')._shadeBlendConvert(panelBaseColor, colour_Shade_Percent);
        var colour_Background = 'background: repeating-linear-gradient(  45deg,  ' + panelBaseColor + ',' + panelBaseColor + ' 10px,  ' + colour_Background_Darken + ' 10px,  ' + colour_Background_Darken + ' 20px);';
        // Build Details Container
        var container = Ext.create('Ext.container.Container', {
            xtype: 'Viewport',
            items: [{
                region: 'north',
                collapsed: Ext.create('App.Config').PpanelsCollapsed,
                items: [{
                    xtype: 'tabpanel',
                    width: '100%',
                    items: [{
                        title: 'About',
                        width: '100%',
                        html: about___Text,
                        height: h_panel,
                        bodyStyle: colour_Background + bodyStyle,
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: tabColour_1,
                            }
                        },
                        /*
                        buttons: [{
                            text: 'Button 1'
                        }]
                        */
                    }, {
                        title: 'Usage',
                        width: '100%',
                        html: usage___Text,
                        height: h_panel,
                        bodyStyle: colour_Background + bodyStyle,
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: tabColour_2,
                            }
                        },
                    }, {
                        title: 'Version',
                        width: '100%',
                        html: version_Text,
                        height: h_panel,
                        bodyStyle: colour_Background + bodyStyle,
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: tabColour_2,
                            }
                        },
                    }, {
                        title: 'Support',
                        width: '100%',
                        html: support___Text,
                        height: h_panel,
                        bodyStyle: colour_Background + bodyStyle,
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: tabColour_3,
                            }
                        },
                        items: [{
                            xtype: 'button',
                            text: 'Contact Support',
                            height: h_button,
                            style: {
                                backgroundColor: 'red',
                            },
                            listeners: {
                                afterrender: function (v) {
                                    v.el.on('click', function () {
                                        Ext.create('App.Emailer')._emailer(xData1, xData2, xData3);
                                    });
                                },
                                scope: this
                            },
                        }]
                    }]
                }]
            }]
        });
        return container;
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});