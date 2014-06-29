define(['jquery','underscore','Backbone'],function($,_,Backbone){

	var PicModel=Backbone.Model.extend({
		defaults:{
			name:"Sarath",
			label:"Its my picture"
		}
	});

	return PicModel;
});