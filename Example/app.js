define(['jquery','underscore','Backbone','views/headerview','views/homeview','views/aboutview'],function($,_,Backbone,HeaderView,HomeView,AboutView){
    var App=Backbone.Router.extend({
    	initialize:function(){
    		this.header=new HeaderView();
    	},
    	routes:{
    		'':'homePage',
    		'about':'aboutPage'
    	},
    	homePage:function(){
    		var home=new HomeView();
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
