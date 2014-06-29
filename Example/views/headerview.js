define(['jquery','underscore','Backbone','text!../templates/header.html'],function($,_,Backbone,header_tpl){

	var HeaderView=Backbone.View.extend({

		el:$('#header'),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(header_tpl);
		}
	});

	return HeaderView;

});