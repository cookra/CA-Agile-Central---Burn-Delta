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
        return this._divGenerator(o,spacerWidth,headerBorder);
    },
    _generate_Tabs: function () {
        //PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#437EA0"],
        //PbarclaysColours_5: ['#145FAC', '#437EA0', '#00AEEF', '#FFF', '#FFA000'],
        var arrayMyColours = Ext.create('App.Config').PmyColours;
        var arrayBaColours = Ext.create('App.Config').PbarclaysColours_5;
        var application_vr = Ext.create('App.System')._this_Application_Details('inapp');
        var config = [{
            panel_height: 160,
            panel_paddin: 10,
            panel_font_s: 15,
            applicationV: application_vr,
            colour_barcl: arrayBaColours,
            colour_custo: arrayMyColours,
            panel_one_tx: this._writePanelContent('infomation'),
            panel_one_tc: arrayMyColours[11],
            panel_one_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            panel_two_tx: Ext.create('App.Config').Pusage,
            panel_two_tc: arrayMyColours[11],
            panel_two_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            panel_thr_tx: Ext.create('App.Config')._generate_Version(),
            panel_thr_tc: arrayMyColours[11],
            panel_thr_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            panel_sup_tx: Ext.create('App.Config').Psupport,
            panel_sup_tc: arrayMyColours[11],
            panel_sup_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            butto_height: 25,
            butto_colour: 'red',
        }];

        // Build Details Container
        return this._panelGenerator(config);
    },
    _stripeColourGenerator: function (a){
        var stripe_color = Ext.create('App.Tools')._shadeBlendConvert(a[0].base_colour, a[0].blend);
        return 'background: repeating-linear-gradient('+a[0].stripe_angle+'deg,' + a[0].base_colour + ',' + a[0].base_colour + ' 10px,' + stripe_color + ' 10px,' + stripe_color + ' 20px);';
    },
    _panelGenerator: function (c){
        var container = Ext.create('Ext.container.Container', {
            xtype: 'Viewport',
            items: [{
                region: 'north',
                items: [{
                    xtype: 'tabpanel',
                    width: '100%',
                    items: [{
                        title: 'About',
                        width: '100%',
                        html: c.panel_one_tx,
                        height: c.panel_height,
                        bodyStyle: c.panel_one_sc + 'font-size:' + c.panel_font_s + 'px;padding:' + c.panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: c.panel_one_tc,
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
                        html: c.panel_two_tx,
                        height: c.panel_height,
                        bodyStyle: c.panel_two_sc + 'font-size:' + c.panel_font_s + 'px;padding:' + c.panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: c.panel_two_tc,
                            }
                        },
                    }, {
                        title: 'Version',
                        width: '100%',
                        html: c.panel_thr_tx,
                        height: c.panel_height,
                        bodyStyle: c.panel_thr_sc + 'font-size:' + c.panel_font_s + 'px;padding:' + c.panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: c.panel_thr_tc,
                            }
                        },
                    }, {
                        title: 'Support',
                        width: '100%',
                        html: c.panel_sup_tx,
                        height: c.panel_height,
                        bodyStyle: c.panel_sup_sc + 'font-size:' + c.panel_font_s + 'px;padding:' + c.panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: c.panel_sup_tc,
                            }
                        },
                        items: [{
                            xtype: 'button',
                            text: 'Contact Support',
                            height: c.butto_height,
                            style: {
                                background: c.butto_colour,
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
        console.log(c);
        console.log(container);
        return container;
    },

    _divGenerator: function (o,spacerWidth,headerBorder){
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
    _generate_Version: function () {
        var output = this.Pversion;
        return output;
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});