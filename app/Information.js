Ext.define('App.Information', {
    config: {
        // Rally Colours
        //PrallyColours_10: ['#0096DB', '#004A9D', '#FF3C00', '#FF8D00', '#FFDC00', '#6F7376', '#FFF', '#FF0069', '#41006E', '#00710C'],
        // Barclays Colours
        //PbarclaysColours_5: ['#145FAC', '#437EA0', '#00AEEF', '#FFF', '#FFA000'],

        //PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#437EA0"], // Bits we need
        PtabBGstripePercent: 5,
    },
    _writePanelContent: function (type) {
        var content, o;
        spacerWidth = '20px';
        headerBorder = 'border-bottom: 4px solid dimgrey';
        if (type === 'infomation') {
            o = [
                [{m:'',p:'10px',colour:'#000',background:'#eee',type:'header',w:'40%',h:'',fontW: 'bold',fontS: '18px',txt:'About'}],
                [{m:'',p:'10px',colour:'#000',background:'#eee',type:'contex',w:'40%',h:'',fontW: 'normal',fontS: '14px',txt:'Displays the Burn delta between remaining and accepted user stories'}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'header',w:'20%',h:'',fontW: 'bold',fontS: '18px',txt:'Configuration'}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'contex',w:'20%',h:'',fontW: 'normal',fontS: '14px',txt:''}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'header',w:'20%',h:'',fontW: 'bold',fontS: '18px',txt:'Data Types'}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'contex',w:'20%',h:'',fontW: 'normal',fontS: '14px',txt:'<li>Planned Estimate</li><li>User Story Count</li>'}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'header',w:'20%',h:'',fontW: 'bold',fontS: '18px',txt:'Chart Type'}],
                [{m:'',p:'10px',colour:'#000',background:'#fff',type:'contex',w:'20%',h:'',fontW: 'normal',fontS: '14px',txt:'<li>Area</li><li>Column</li><li>Line</li><li>Split</li>'}],
              ];
        }
        // Build Container
        content = '<div class="divTable"><div class="divTableBody"><div class="divTableRowHeader">';
        var spaceInsertCount = o.length - 1;
        if (o.length & 1) {
            divSpacerCount = o.length;
        } else {
            divSpacerCount = spaceInsertCount;
        }
        // Build Headers
        for (var x = 0; x < o.length; x++) {
            if (x & 1) { // Check if the number is odd or even as we want to create a zebra effect
                if (x < divSpacerCount) {
                    content += this._htmlGenerator('spacer',spacerWidth,headerBorder);
                }
            } else {
                content += this._htmlGenerator(o[x][0],spacerWidth,headerBorder);
            }
        }
        // Build Next Row
        content += '</div><div class="divTableRowContent">';
        // Build Content
        for (x = 1; x < o.length; x++) {
            if (x & 1) { // Check if the number is odd or even as we want to create a zebra effect
                content += this._htmlGenerator(o[x][0],spacerWidth,headerBorder);
            }
            if (x < divSpacerCount) {
                content += this._htmlGenerator('spacer',spacerWidth,headerBorder);
            }
        }
        // Build End HTML
        content += '</div></div></div>';
        // *** END (Lets return our html)
        return content;

    },
    _htmlGenerator: function (object,spacerWidth,headerBorder) {
        if (object === 'spacer') {
            console.log('spacer ',spacerWidth);
            o = 'style="width:'+spacerWidth+'";';
            o = '<div '+o+'>&nbsp;</div>';
        } else {
                console.log('build');
            if(object.type==='header'){
                console.log('header');
                border = headerBorder;
            }else{
                console.log('contex');
                border = '';
            }
            o= 'style="font_size:'+object.fontS+';font-family:Gill Sans Extrabold, sans-serif;font-weight:'+object.fontW+';overflow:hidden;word-break:normal;';
            o+= 'vertical-align:top;display:table-cell;';
            o+= 'width:'+object.w+';height:'+object.h+';padding:'+object.p+';margin:'+object.m+';'+border+';';
            o+= 'background:'+object.background+';color:'+object.colour+';"';
            o = '<div '+o+'>' + object.txt + '</div>';
        }
        return o;
    },
    _generate_Tabs: function () {
        var h_panel = 160;
        var h_button = 25;
        var p_panel = 10;
        var f_panel_font_size = 15;
        var colour_Shade_Percent = 20;
        var xData1; // = getContext().getUser();
        var xData2; // = getContext().getProject();
        var xData3; // = getContext().getWorkspace();
        var appVersion = Ext.create('App.System')._this_Application_Details('inapp');
        var myColours_Barclays = Ext.create('App.Config').PbarclaysColours_5;
        var myColours_MyColours = Ext.create('App.Config').PmyColours;
        var about___Text = this._writePanelContent('infomation');
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
        var panelBaseColor = myColours_MyColours[9];
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
    _generate_Version: function () {
        var output = this.Pversion;
        return output;
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});