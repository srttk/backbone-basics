define(['jquery','underscore','Backbone','text!../templates/home.html'],function($,_,Backbone,page_tpl){

	var HomeView=Backbone.View.extend({

		el:$('#content'),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(page_tpl);
		}
	});

	return HomeView;

});