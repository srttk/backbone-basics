define(['jquery','underscore','Backbone','views/headerview','views/homeview','views/aboutview','views/notfoundview'],function($,_,Backbone,HeaderView,HomeView,AboutView,NFView){
    var App=Backbone.Router.extend({
    	initialize:function(){
            console.log('This site is Created and maintained by Sarath');
            console.log('Visit http://saratonite.github.io  For more information.');
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
