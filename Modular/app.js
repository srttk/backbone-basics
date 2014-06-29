require.config({
    //baseUrl: '../js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: '../js/jquery',
        underscore:'../js/underscore',
        Backbone:'../js/backbone'

    },
    shim:{
    	jquery:'q'
    }
});
require(['app/picmodel','app/picview'],function(picmodel,picview){

	var pic=new picmodel();
	var appview=new picview({model:pic}); 
	console.log(pic.toJSON());

});