define(['jquery','underscore','Backbone','views/headerview','views/aboutview'],function($,_,Backbone,HeaderView,AboutView){
    var App=Backbone.Router.extend({
    	initialize:function(){
    		this.header=new HeaderView();
    	},
    	routes:{
    		'':'homePage',
    		'about':'aboutPage'
    	},
    	homePage:function(){
    		
    	},
    	aboutPage:function(){
    		var about=new AboutView();
    	},
    	start:function(){
    		Backbone.history.start();
    	}
    });
    return App;

});
