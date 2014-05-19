<!DOCTYPE html>
<html>
<head>
	<title>Model - View</title>
<script type="text/javascript" src="../assets/js/jquery.js"></script>
<script type="text/javascript" src="../assets/backbone/underscore.js"></script>
<script type="text/javascript" src="../assets/backbone/backbone.js"></script>
</head>
<body>
	<p id="model_view">
		
	</p>
</body>
<script type="text/javascript">
	//Backbone Model
	var Contact=Backbone.Model.extend({
		defaults:{
			name:"Someone",
			email:'someone@in.com'
		},
		initialize:function(){
			console.log("Model initialized");
			
		}
	});

	// Creating a new Model instance
	var me=new Contact({name:'Sarath Kumar',email:'sarath.hacks@gmail.com'});
	//View For Contact model

	var ContactView=Backbone.View.extend({
		tagName:'p',
		template:_.template('<h1><%= name %> </h1> <%= email %>'),
		initialize:function(){
			console.log('View Initialized');
			this.render();
			this.model.on('change:email',this.render,this);//Adding change event 
		},
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			$('#model_view').html(this.el);
			return this;
		}
	});
	var cv=new ContactView({model:me});
</script>
</html>