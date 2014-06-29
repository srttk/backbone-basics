define(['jquery','underscore','Backbone','text!app/templates/pic_tpl.html'],function($,_,Backbone,pic_tpl){

	var PicView=Backbone.View.extend({
		el:'body',
		className:"thumb",
		template:_.template(pic_tpl),
		initialize:function(){
			console.log('PicView initialized');
			this.render();
		},
		render:function(){
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	return PicView;
});