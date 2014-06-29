define(['jquery','underscore','Backbone','views/headerview','views/homeview','views/aboutview','views/notfoundview'],function($,_,Backbone,HeaderView,HomeView,AboutView,NFView){
    var App=Backbone.Router.extend({
    	initialize:function(){
    		this.header=new HeaderView();
    	},
    	routes:{
    		'':'homePage',
    		'about':'aboutPage',
    		//'*':'notfoundPage'
    	},
    	homePage:function(){
    		var home=new HomeView();
    	},
    	aboutPage:function(){
    		var about=new AboutView();
    	},
    	notfoundPage:function(){
    		var nf=new NFView();
    	},
    	start:function(){
    		Backbone.history.start();
    	}
    });
    return App;

});
