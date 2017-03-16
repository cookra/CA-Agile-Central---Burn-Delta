Ext.define('App.Config', {
    config: {
        // Versioning
        Pversion: 'v1.9b',
        PappID: 'AC Burn Delta',
        Powner: 'Richard Cook',
        PreleaseDate: '2017-03-16: 11:47 GMT',
        Pdescription: 'AC Burn Delta, click on the applications gear to see "App Settings".',
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
        pInfoHtml: '',
        pCardHtml: '',
        pStoreData: '',
        // Needs automating!
        portfolioType: [
            'PortfolioItem/BUStrategicObjectives',
            'PortfolioItem/STPortfolioObjectives',
            'PortfolioItem/PortfolioEpic',
            'PortfolioItem/BusinessOutcome',
            'PortfolioItem/Feature',
        ], // Portfolio Types
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});