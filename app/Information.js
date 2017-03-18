Ext.define('App.Information', {
    config: {
        // Versioning //
        pAppVers: 'v2.0b',
        pAppStat: 'beta',
        pAppName: 'AC Burn Delta',
        pAppDesc: 'Measures the Delta between users stories in To Do & Accepted',
        pAppOwne: 'Richard Cook',
        pAppDate: '2017-03-18: 11:47 GMT',
        // Git Repo Details
        PrepoAddress: 'not shared',
        // Emailer Contact Details
        pEmailSupportMessage: '*** [AC AC Burn Delta] Custom Application AC Support Request',
        pEmailSupportAddress: 'richard.cook@barclaycard.co.uk',
        pEmailerMessage: '========== Please add your comments above this line ==========',
        // Rally Colours
        PrallyColours_10: ['#0096DB', '#004A9D', '#FF3C00', '#FF8D00', '#FFDC00', '#6F7376', '#FFF', '#FF0069', '#41006E', '#00710C'],
        // Barclays Colours
        PbarclaysColours_5: ['#145FAC', '#437EA0', '#00AEEF', '#FFF', '#FFA000'],
        PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#437EA0"], // Bits we need
        PtabBGstripePercent: 5,
    },
    _writePanelContent: function (type) {
        var content, o;
        spacerWidth = '20px';
        headerBorder = 'border-bottom: 4px solid dimgrey';
        if (type === 'infomation') {
            o = [
                [{m:'',p:'10px',colour:'#000',background:'#eee',type:'header',w:'40%',h:'',fontW: 'bold',fontS: '18px',txt:'About'}],
                [{m:'',p:'10px',colour:'#000',background:'#eee',type:'contex',w:'40%',h:'',fontW: 'normal',fontS: '12px',txt:'Displays the Burn delta between remaining and accepted user stories'}],
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
        var arrayMyColours = this.PmyColours;
        var arrayBaColours = this.PbarclaysColours_5;
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
            panel_two_tx: this.Pusage,
            panel_two_tc: arrayMyColours[11],
            panel_two_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            panel_thr_tx: this._generate_Version(),
            panel_thr_tc: arrayMyColours[11],
            panel_thr_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            panel_sup_tx: this.Psupport,
            panel_sup_tc: arrayMyColours[11],
            panel_sup_sc: this._stripeColourGenerator([{base_colour:arrayMyColours[11],stripe_angle:45,blend:20}]),
            butto_height: 25,
            butto_colour: 'red',
        }];

        // Build Details Container
        return this._panelGenerator(config);
    },
    _stripeColourGenerator: function (a){
        var stripe_color = Ext.create('Tools')._shadeBlendConvert(a[0].base_colour, a[0].blend);
        return 'background: repeating-linear-gradient('+a[0].stripe_angle+'deg,' + a[0].base_colour + ',' + a[0].base_colour + ' 10px,' + stripe_color + ' 10px,' + stripe_color + ' 20px);';
    },
    _panelGenerator: function (a){
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
                        html: a[0].panel_one_tx,
                        height: a[0].panel_height,
                        bodyStyle: a[0].panel_one_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_one_tc,
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
                        html: a[0].panel_two_tx,
                        height: a[0].panel_height,
                        bodyStyle: a[0].panel_two_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_two_tc,
                            }
                        },
                    }, {
                        title: 'Version',
                        width: '100%',
                        html: a[0].panel_thr_tx,
                        height: a[0].panel_height,
                        bodyStyle: a[0].panel_thr_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_thr_tc,
                            }
                        },
                    }, {
                        title: 'Support',
                        width: '100%',
                        html: a[0].panel_sup_tx,
                        height: a[0].panel_height,
                        bodyStyle: a[0].panel_sup_sc + 'font-size:' + a[0].panel_font_s + 'px;padding:' + a[0].panel_paddin + 'px;',
                        cls: 'fixTabMargins',
                        tabConfig: {
                            style: {
                                background: a[0].panel_sup_tc,
                            }
                        },
                        items: [{
                            xtype: 'button',
                            text: 'Contact Support',
                            height: a[0].butto_height,
                            style: {
                                background: a[0].butto_colour,
                            },
                            listeners: {
                                afterrender: function (v) {
                                    v.el.on('click', function () {
                                        Ext.create('Emailer')._emailer();
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
Ext.define('Emailer', {
    _emailer: function () {
        var string, subject;
        subject = Ext.create('App.Information').pEmailSupportMessage;
        string = '\r\n';
        string += '\r\n';
        string += '\r\n';
        string += Ext.create('App.Information').pEmailerMessage;
        string += '\r\n';
        string += Ext.create('Telemetry')._this_Application_Details('email');
        string += Ext.create('Telemetry')._user_Vars();
        string += Ext.create('Telemetry')._user_Rally_Vars("a", "b", "c");
        console.log(string);
        string = encodeURIComponent(string);
        window.location = 'mailto:' + Ext.create('App.Information').pEmailSupportAddress + '?subject=' + subject + '&body=' + string;
    },
});
Ext.define('Telemetry', {

        // Created by Richard Cook ::: Cookra Limited
    // Barclaycard richard.cook@barclaycard.co.uk
    // v4.8
    // Updated 2017-03-08
    _this_Application_Details: function (type) {
        var Output;
        var a = [];
        a.push('> - - - - - - - - - - < Application Details');
        a.push('> App Name : ' + Ext.create('App.Information').pAppName);
        a.push('> App Version : ' + Ext.create('App.Information').pAppVers);
        a.push('> App Version Status : ' + Ext.create('App.Information').pAppStat);
        a.push('> App Designer : ' + Ext.create('App.Information').pAppOwne);
        a.push('> App Description : ' + Ext.create('App.Information').pAppDesc);
        a.push('> App Release Date : ' + Ext.create('App.Information').pAppDate);
        if(type==='email'){
            output = Ext.create('Tools')._common_Array_Outputter(a);
        }else if(type==='inapp'){
            output = a;
        }
        return output;
    },
    _this_Application_Output: function (array) {
        var a = [];
        console.log('xxx ',array);
        a.push('> - - - - - - - - - - < Application Output');
        for (var i = 0; i < array.length; i++) {
            a.push('> FormattedID : ' + array[i].raw.FormattedID + ' Name : ' + array[i].raw.Name + ' _Ref : ' + array[i].raw._ref);
        }
        array = undefined;
        return Ext.create('Tools')._common_Array_Outputter(a);
    },
    _user_Vars: function () {
        var a = [];
        a.push('> - - - - - - - - - - < Local Details');
        a.push('> Browser Web App Name : ' + navigator.appName);
        a.push('> Browser User Agent : ' + navigator.userAgent);
        a.push('> Browser Version : ' + navigator.appVersion);
        a.push('> Browser Code Name : ' + navigator.appCodeName);
        a.push('> Platform : ' + navigator.platform);
        a.push('> OS CPU : ' + navigator.oscpu);
        a.push('> Cookies : ' + navigator.cookieEnabled);
        a.push('> Outer Width : ' + window.outerWidth);
        a.push('> Outer Height : ' + window.outerHeight);
        a.push('> Inner Width : ' + window.innerWidth);
        a.push('> Inner Height : ' + window.innerHeight);
        a.push('> Base URI : ' + document.getElementsByTagName('script')[0].baseURI);
        a.push('> SRC : ' + document.getElementsByTagName('script')[0].src);
        a.push('> LocalName : ' + document.getElementsByTagName('script')[0].localName);
        a.push('> Type : ' + document.getElementsByTagName('script')[0].type);
        return Ext.create('Tools')._common_Array_Outputter(a);
    },
    _user_Rally_Vars: function (context_User, context_Project, context_Workspace) {
        var a = [];
        a.push('> - - - - - - - - - - < User Details');
        a.push('> AC User Username : ' + 'test');//context_User.UserName);
        a.push('> AC User Name : ' + 'test');// context_User._refObjectName);
        a.push('> AC User Role : ' + 'test');// context_User.Role);
        a.push('> AC Application Launched From Node : ' + 'test');// context_Project._refObjectName);
        a.push('> AC Application Workspace Name : ' + 'test');// context_Workspace._refObjectName);
        a.push('> AC Application Workspace Date/Time Format : ' + 'test');// context_Workspace.WorkspaceConfiguration.DateFormat);
        return Ext.create('Tools')._common_Array_Outputter(a);
    }
})
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
    _common_Array_Outputter: function (array) {
        var character_Return = '\r\n';
        var l = array.length;
        var output = '';
        var padSize = String(l).length;
        for (var x = 0; x < l; x++) {
            output += '[#' + this._number_Pad(x, padSize) + '] ' + array[x] + character_Return;
        }        
        console.log(output);
        array = undefined;
        return output;
    },
    _number_Pad: function (num, size) {
        return Array(Math.max(size - String(num).length + 1, 0)).join(0) + num;
    }
});