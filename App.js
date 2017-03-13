Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items: {html : 'This is html test111'},
    launch: function() {
        //Write app code here
        console.log('This is test');
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
