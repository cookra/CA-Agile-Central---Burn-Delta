Ext.define('App.Information', {
    config: {
        // Versioning //
        pP_AppVersi: 'v2.0b',
        pP_AppStatus: 'beta',
        pP_AppliName: 'AC Burn Delta',
        pP_AppliDesc: 'Measures the Delta between users stories in To Do & Accepted',
        pP_AppliOwne: 'Richard Cook (Barclaycard LPM PMC)',
        pP_AppliDate: '2017-03-18: 11:47 GMT',
        // Git Repo Details
        pP_AppliRepo: 'not shared',
        // Emailer Contact Details
        pP_EmailAddr: 'richard.cook@barclaycard.co.uk',
        pP_EmailSubj: '*** [AC AC Burn Delta] Custom Application AC Support Request',
        pP_EmailBody: '========== Please add your comments above this line ==========',
        // Printing printCss
        pP_Print_Css: 'x',
        // Agile Central Internal colors
        pA_ACColours: ['#0096DB', '#004A9D', '#FF3C00', '#FF8D00', '#FFDC00', '#6F7376', 'white', '#FF0069', '#41006E', '#00710C'],
        // Barclays Corporate Colours
        pA_BCColours: ['#145FAC', '#437EA0', '#00AEEF', 'white', '#FFA000'],
        pA_MyColours: ['#d61551', '#c9506f', '#6a0b7', '#0e1026', '#e53118', '#262428', '#c9d940', '#d3272b', '#ea2b30', '#59595b', '#242021', '#ebe7e4', '#437EA0', '#41006E'],
    },
    _writePanelContent: function (whatAmI) {
        var content, output;
        spacerWidth = '20px';
        headerBorder = 'border-bottom: 4px solid dimgrey';
        if (whatAmI === 'tools') {
            output = [
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'header', width: '100%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: 'Tools' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'contex', width: '100%', height: '100%', fontWeight: 'normal', fontSize: '12px', txt: 'If you require support for this application. please use the \'Contact Support\' button above.' }],
            ];
        }
        if (whatAmI === 'about') {
            // Left as 3d array to support future updates
            output = [
                [{margin:'0px',padding:'10px',color:'black',background:'#eeeeee',type:'header',width:'40%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'About'}],
                [{margin:'0px',padding:'10px',color:'black',background:'#eeeeee',type:'contex',width:'40%',height:'100%',fontWeight: 'normal',fontSize: '12px',txt:'Displays the Burn delta between remaining and accepted user stories'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Configuration'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:''}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Data Types'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:'<li>Planned Estimate</li><li>User Story Count</li>'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Chart Type'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:'<li>Area</li><li>Column</li><li>Line</li><li>Split</li>'}],
              ];
        }
        if (whatAmI === 'usage') {
            output = [
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'header', width: '40%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: 'Usage' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'contex', width: '40%', height: '100%', fontWeight: 'normal', fontSize: '12px', txt: 'This application can be used as a standalone page or as a custom app within a dashboard.' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'header', width: '20%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: 'Deployment > > >' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'contex', width: '20%', height: '100%', fontWeight: 'normal', fontSize: '14px', txt: '' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'header', width: '20%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: '(A) Standalone' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'contex', width: '20%', height: '100%', fontWeight: 'normal', fontSize: '14px', txt: '(1) Use application settings (2) Copy the source code and place into a new page (3) Set page filter to Iteration (4) Set page layout to single column (5) Add Custom HTML app (6) Use application settings to customise the chart'}],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'header', width: '20%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: '(B) Custom App' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: 'white', type: 'contex', width: '20%', height: '100%', fontWeight: 'normal', fontSize: '14px', txt: '(1) Use application settings (2) Copy the source code and place into a new Custom HTML app (3) Use application settings to customise the chart'}],
            ];
        }
        if (whatAmI === 'version') {
            output = [
                [{margin:'0px',padding:'10px',color:'black',background:'#eeeeee',type:'header',width:'40%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Version'}],
                [{margin:'0px',padding:'10px',color:'black',background:'#eeeeee',type:'contex',width:'40%',height:'100%',fontWeight: 'normal',fontSize: '12px',txt:this.pP_AppVersi}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Status'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:this.pP_AppStatus}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Build Date'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:this.pP_AppliDate}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'header',width:'20%',height:'100%',fontWeight: 'bold',fontSize: '18px',txt:'Owner'}],
                [{margin:'0px',padding:'10px',color:'black',background:'white',type:'contex',width:'20%',height:'100%',fontWeight: 'normal',fontSize: '14px',txt:this.pP_AppliOwne}],
            ];
        }
        if (whatAmI === 'support') {
            output = [
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'header', width: '100%', height: '100%', fontWeight: 'bold', fontSize: '18px', txt: 'Support' }],
                [{ margin: '0px', padding: '10px', color: 'black', background: '#eeeeee', type: 'contex', width: '100%', height: '100%', fontWeight: 'normal', fontSize: '12px', txt: 'If you require support for this application. please use the \'Contact Support\' button above.' }],
            ];
        }
        return this._divGenerator(output, spacerWidth, headerBorder);
    },
    _generate_Tabs: function () {
        var pA_MyColours = this.pA_MyColours;
        var pA_BCColours = this.pA_BCColours;
        var pP_AppVersi = this.pP_AppVersi;
        var config = [{
            panel_height: 160,
            panel_paddin: 10,
            panel_font_s: 15,
            panel_tools_tx: this._writePanelContent('tools'),
            panel_tools_tc: pA_MyColours[11],
            panel_tools_sc: this._stripecolorGenerator([{base_color:pA_MyColours[0],stripe_angle:45,blend:20}]),
            panel_about_tx: this._writePanelContent('about'),
            panel_about_tc: pA_MyColours[11],
            panel_about_sc: this._stripecolorGenerator([{base_color:pA_MyColours[13],stripe_angle:45,blend:20}]),
            panel_usage_tx: this._writePanelContent('usage'),
            panel_usage_tc: pA_MyColours[11],
            panel_usage_sc: this._stripecolorGenerator([{base_color:pA_MyColours[6],stripe_angle:45,blend:20}]),
            panel_version_tx: this._writePanelContent('version'),
            panel_version_tc: pA_MyColours[11],
            panel_version_sc: this._stripecolorGenerator([{base_color:pA_MyColours[9],stripe_angle:45,blend:20}]),
            panel_support_tx: this._writePanelContent('support'),
            panel_support_tc: pA_MyColours[11],
            panel_support_sc: this._stripecolorGenerator([{base_color:pA_MyColours[12],stripe_angle:45,blend:20}]),
            button_height: 25,
            button_support: pA_MyColours[8],
            button_print: pA_MyColours[6],
            button_excel: pA_MyColours[6],
            button_a_pdf: pA_MyColours[6],
            button_support_txt: pA_MyColours[3],
            button_print_txt: pA_MyColours[3],
            button_excel_txt: pA_MyColours[3],
            button_a_pdf_txt: pA_MyColours[3],
        }];
        // Build Details Container
        return this._panelGenerator(config);
    },
    _stripecolorGenerator: function (a){
        var stripe_color = Ext.create('Tools')._shadeBlendConvert(a[0].base_color, a[0].blend);
        return 'background: repeating-linear-gradient('+a[0].stripe_angle+'deg,' + a[0].base_color + ',' + a[0].base_color + ' 10px,' + stripe_color + ' 10px,' + stripe_color + ' 20px);';
    },
    _panelGenerator: function (a){
        var container = Ext.create('Ext.container.Container', {
            xtype: 'Viewport',
            id: 'myViewport',
            
            items: [{
                region: 'north',
                items: [{
                    xtype: 'tabpanel',
                    width: '100%',
                    collapsible: true,
                    items: [{
                        title: 'Tools',
                        width: '100%',
                        bodyStyle: a[0].panel_tools_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_tools_tc,
                            }
                        },
                        items: [{
                            xtype: 'component',
                            html: a[0].panel_tools_tx,
                        },{
                            xtype: 'button',
                            text: 'Print Lanscape',
                            height: a[0].button_height,
                            cls: 'black_button_text_color',
                            style: {
                                background: a[0].button_print,
                                margin: '0px 10px 0px 0px',
                            },
                            listeners: {
                                afterrender: function (v) {
                                    v.el.on('click', function () {
                                        Ext.create('Export')._print('myChart',1);
                                    });
                                },
                                scope: this
                            },
                        }, {
                            xtype: 'button',
                            text: 'Print Portrait',
                            height: a[0].button_height,
                            cls: 'black_button_text_color',
                            style: {
                                background: a[0].button_print,
                                margin: '0px 10px 0px 0px',
                            },
                            listeners: {
                                afterrender: function (v) {
                                    v.el.on('click', function () {
                                        Ext.create('Export')._print('myChart',2);
                                    });
                                },
                                scope: this
                            },
                        }
                        /*
                        
                        , {
                                xtype: 'button',
                                text: 'Excel',
                                height: a[0].button_height,
                                cls: 'black_button_text_color',
                                style: {
                                    background: a[0].button_excel,
                                    margin: '0px 10px 0px 0px',
                                },
                                listeners: {
                                    afterrender: function (v) {
                                        v.el.on('click', function () {
                                            Ext.create('Export')._print('myChart');
                                        });
                                    },
                                    scope: this
                                },
                            }, {
                                xtype: 'button',
                                text: 'Adobe PDF',
                                cls: 'black_button_text_color',
                                height: a[0].button_height,
                                style: {
                                    background: a[0].button_a_pdf,
                                    margin: '0px 10px 0px 0px',
                                },
                                listeners: {
                                    afterrender: function (v) {
                                        v.el.on('click', function () {
                                            Ext.create('Export')._pdf('myChart');
                                        });
                                    },
                                    scope: this
                                }
                            }*/]
                    }, {
                        title: 'About',
                        width: '100%',
                        html: a[0].panel_about_tx,
                        bodyStyle: a[0].panel_about_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_about_tc,
                            }
                        },
                    }, {
                        title: 'Usage',
                        width: '100%',
                        html: a[0].panel_usage_tx,
                        bodyStyle: a[0].panel_usage_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_usage_tc,
                            }
                        },
                    }, {
                        title: 'Version',
                        width: '100%',
                        html: a[0].panel_version_tx,
                        bodyStyle: a[0].panel_version_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_version_tc,
                            }
                        },
                    },{
                        title: 'Support',
                        width: '100%',
                        bodyStyle: a[0].panel_support_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_support_tc,
                            }
                        },
                        items: [{
                            xtype: 'component',
                            html: a[0].panel_support_tx,
                        }, {
                            xtype: 'button',
                            text: 'Contact Support',
                            height: a[0].button_height,
                            style: {
                                background: a[0].button_support,
                                margin: '0px 10px 0px 0px',
                            },
                            listeners: {
                                afterrender: function (v) {
                                    v.el.on('click', function () {
                                        Ext.create('Emailer')._emailer();
                                    });
                                },
                                scope: this
                            },
                        }],
                    }]
                }]
            }]
        });
        return container;
    },
    _divGenerator: function (a,spacerWidth,headerBorder){
        content = '<div class="divTable"><div class="divTableBody"><div class="divTableRowHeader">';
        var spaceInsertCount = a.length - 1;
        if (a.length & 1) {
            divSpacerCount = a.length;
        } else {
            divSpacerCount = spaceInsertCount;
        }
        for (var x = 0; x < a.length; x++) {
            if (x & 1) { // Check if the number is odd or even as we want to create a zebra effect
                if (x < divSpacerCount) {
                    content += this._htmlGenerator('spacer',spacerWidth,headerBorder);
                }
            } else {
                content += this._htmlGenerator(a[x][0],spacerWidth,headerBorder);
            }
        }
        content += '</div><div class="divTableRowContent">';
        for (x = 1; x < a.length; x++) {
            if (x & 1) { // Check if the number is odd or even as we want to create a zebra effect
                content += this._htmlGenerator(a[x][0],spacerWidth,headerBorder);
            }
            if (x < divSpacerCount) {
                content += this._htmlGenerator('spacer',spacerWidth,headerBorder);
            }
        }
        content += '</div></div></div>';
        return content;
    },
    _htmlGenerator: function (a,spacerWidth,headerBorder) {
        if (a === 'spacer') {
            o = 'style="width:'+spacerWidth+'";';
            o = '<div '+o+'>&nbsp;</div>';
        } else {
            if(a.type==='header'){
                border = headerBorder;
            }else{
                border = '';
            }
            o= 'style="font_size:'+a.fontSize+';font-family:Gill Sans Extrabold, sans-serif;font-weight:'+a.fontWeight+';overflow:hidden;word-break:normal;';
            o+= 'vertical-align:top;display:table-cell;';
            o+= 'width:'+a.width+';height:'+a.height+';padding:'+a.padding+';margin:'+a.margin+';'+border+';';
            o+= 'background:'+a.background+';color:'+a.color+';"';
            o = '<div '+o+'>' + a.txt + '</div>';
            
        }
        a = undefined;
        return o;
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});
Ext.define('Emailer', {
    _emailer: function () {
        var s = Ext.create('App.Information').pP_EmailSubj;
        var o = '\r\n';
        o += '\r\n';
        o += '\r\n';
        o += Ext.create('App.Information').pP_EmailBody;
        o += '\r\n';
        o += Ext.create('Telemetry')._this_Application_Details();
        o += Ext.create('Telemetry')._user_Vars();
        o += Ext.create('Telemetry')._user_Rally_Vars("a", "b", "c"); // <------- NEED THESE SCOPED
        o = encodeURIComponent(o);
        // window.top.location MUST be used for HTTPS transfer out of browser //
        window.top.location = 'mailto:' + Ext.create('App.Information').pP_EmailAddr + '?subject=' + s + '&body=' + o;
    },
});
Ext.define('Telemetry', {
    _this_Application_Details: function () {
        var o = [];
        o.push('> - - - - - - - - - - < Application Details');
        o.push('> App Name : ' + Ext.create('App.Information').pP_AppliName);
        o.push('> App Version : ' + Ext.create('App.Information').pAppVers);
        o.push('> App Version Status : ' + Ext.create('App.Information').pP_AppStatus);
        o.push('> App Designer : ' + Ext.create('App.Information').pP_AppliOwne);
        o.push('> App Description : ' + Ext.create('App.Information').pP_AppliDesc);
        o.push('> App Release Date : ' + Ext.create('App.Information').pP_AppliDate);
        return o;
    },
    _this_Application_Output: function (a) {
        var o = [];
        console.log('xxx ',a);
        o.push('> - - - - - - - - - - < Application Output');
        for (var i = 0; i < a.length; i++) {
            o.push('> FormattedID : ' + a[i].raw.FormattedID + ' Name : ' + a[i].raw.Name + ' _Ref : ' + a[i].raw._ref);
        }
        a = undefined;
        return Ext.create('Tools')._common_Array_Outputter(o);
    },
    _user_Vars: function () {
        var o = [];
        o.push('> - - - - - - - - - - < Local Details');
        o.push('> Browser Web App Name : ' + navigator.appName);
        o.push('> Browser User Agent : ' + navigator.userAgent);
        o.push('> Browser Version : ' + navigator.appVersion);
        o.push('> Browser Code Name : ' + navigator.appCodeName);
        o.push('> Platform : ' + navigator.platform);
        o.push('> OS CPU : ' + navigator.oscpu);
        o.push('> Cookies : ' + navigator.cookieEnabled);
        o.push('> Outer Width : ' + window.outerWidth);
        o.push('> Outer Height : ' + window.outerHeight);
        o.push('> Inner Width : ' + window.innerWidth);
        o.push('> Inner Height : ' + window.innerHeight);
        o.push('> Base URI : ' + document.getElementsByTagName('script')[0].baseURI);
        o.push('> SRC : ' + document.getElementsByTagName('script')[0].src);
        o.push('> LocalName : ' + document.getElementsByTagName('script')[0].localName);
        o.push('> Type : ' + document.getElementsByTagName('script')[0].type);
        return Ext.create('Tools')._common_Array_Outputter(o);
    },
    _user_Rally_Vars: function (context_User, context_Project, context_Workspace) {
        var o = [];
        o.push('> - - - - - - - - - - < User Details');
        o.push('> AC User Username : ' + 'test');//context_User.UserName);
        o.push('> AC User Name : ' + 'test');// context_User._refObjectName);
        o.push('> AC User Role : ' + 'test');// context_User.Role);
        o.push('> AC Application Launched From Node : ' + 'test');// context_Project._refObjectName);
        o.push('> AC Application Workspace Name : ' + 'test');// context_Workspace._refObjectName);
        o.push('> AC Application Workspace Date/Time Format : ' + 'test');// context_Workspace.WorkspaceConfiguration.DateFormat);
        return Ext.create('Tools')._common_Array_Outputter(o);
    }
});
Ext.define('Tools', {
    _shadeBlendConvert: function (color, percent) {
        var R = parseInt(color.substring(1, 3), 16);
        var G = parseInt(color.substring(3, 5), 16);
        var B = parseInt(color.substring(5, 7), 16);
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;
        var RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
        var GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
        var BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));
        return "#" + RR + GG + BB;
    },
    _common_Array_Outputter: function (a) {
        var r = '\r\n';
        var l = a.length;
        var o = '';
        var p = String(l).length;
        for (var x = 0; x < l; x++) {
            o += '[#' + this._number_Pad(x, p) + '] ' + a[x] + r;
        }        
        a = undefined;
        return o;
    },
    _number_Pad: function (num, size) {
        return Array(Math.max(size - String(num).length + 1, 0)).join(0) + num;
    }
});
Ext.define('Export', {
    _print: function (myChart,ori) {
        var mywindow = window.open('', 'Printing '+Ext.create('App.Information').pP_AppliName, 'height=800,width=1000');
        if(ori===1){
        console.log(ori);
            printCss = '<style type="text/css" media="print">@page { size: landscape; }</style>';
        }
        if(ori===2){
        console.log(ori);
            printCss = '<style type="text/css"></style>';
        }
        console.log('css ',printCss);
        mywindow.document.write('<html><head><title>Printing '+Ext.create('App.Information').pP_AppliName+'</title>');
        mywindow.document.write(printCss);
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById(myChart).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
    },
    _pdf: function (id, test) {
        test = 'test';
        id = 'myViewport';
    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
    }
});