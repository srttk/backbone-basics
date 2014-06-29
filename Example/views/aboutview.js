define(['jquery','underscore','Backbone','text!../templates/about.html'],function($,_,Backbone,page_tpl){

	var AboutView=Backbone.View.extend({

		el:$('#content'),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(page_tpl);
		}
	});

	return AboutView;

});