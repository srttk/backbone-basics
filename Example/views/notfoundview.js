define(['jquery','underscore','Backbone','text!../templates/404.html'],function($,_,Backbone,page_tpl){

	var NFView=Backbone.View.extend({

		el:$('#content'),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(page_tpl);
		}
	});

	return NFView;

});