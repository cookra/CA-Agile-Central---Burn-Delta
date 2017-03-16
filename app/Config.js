Ext.define('App.Config', {
    config: {
        // Versioning
        Pversion: 'v1.9b',
        PappID: 'AC Burn Delta',
        Powner: 'Richard Cook',
        PreleaseDate: '2017-03-16: 11:47 GMT',
        Pdescription: 'AC Burn Delta, click on the applications gear to see "App Settings".',
        Pabout: 'AC Burn Delta: shows the burn up/down for a given iteration.</br>' +
            'You may customise this app by selecting "Edit App Setting" from the application config gear icon above. ' +
            'Configuration options include:</br>' +
            '[1]: Data Type: [ Plan Estimate, Story Count ]<br>' +
            '[2]: Chart Type: [ Area, Column, Line or Spline ]',
        Pusage: 'AC Burn Delta: Deployment</br>' +
            '[1]: As is [ Custom Page - Set to filter by Iteration, with a Custom HTML application ] (Select setting from the config and copy the source code)</br>' +
            '[2]: As a standalone app within a Dashboard',
        Psupport: '</br></br>AC Burn Delta: Support<br>'+
            'The Support button below will collect & email the following details via your default email client (you will be able to view this informatio before sending):</br>'+
            '[1]: System information (various information about the system you are using)</br>'+
            '[2]: Agile Central information (various information on the workspace, project and user account setting)',
        
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

        PmyColours: ["#d61551", "#c9506f", "#6a0b70", "#0e1026", "#e53118", "#262428", "#c9d940", "#d3272b", "#ea2b30", "#59595b", "#242021", "#ebe7e4", "#59595b"], // Bits we need
        PtabBGstripePercent: 5,


    },
    _generate_Version: function () {
        var output = this.Pversion;
        return output;
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});