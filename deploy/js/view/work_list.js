define([
	"jquery",
	"underscore",
	"backbone",
	"router",
	"controller/app_controller",
	"model/projects_model"
], function (
	$,
	_,
	Backbone,
	Router,
	AppController,
	ProjectsModel
) {

	var changeColourTemplate;

	return Backbone.View.extend({

		workList: null,
		currentItemOver: null,
		prevItemOver: null,

		 events: {
			"mouseover #work_list a":         "onWorkListItemOver",

		 },

		render: function() {

			this.$el.find('section').hide();
			this.$el.find('section#work_list').show();
			document.title = 'Simon Neveu — Work';

			this.workList = this.$el.find('section#work_list ul');
			this.workList.show();
			halfListHeight = (this.workList.height()) / 2;
			halfListWidth = (this.workList.width()) / 2;
			this.workList.css({
				'margin-top':'-'+(halfListHeight+40)+'px', // 40 makes up for the padding
				'margin-left':'-'+halfListWidth+'px'
			});

			$("html, body").animate({ scrollTop: 0 }, 500);

			// var textColour = $('header').css('color');
			// $('.colourChange').css({
			//     'color': textColour,
			//     'border-color': textColour
			// });

		},

		onWorkListItemOver: function(evt) {
			this.currentItemOver = evt.currentTarget.id;
			this.$el.find('section#work_list #work_list_thumbs img').each(function(){
				var curZIndex = $(this).css('z-index');
				var newZIndex = (curZIndex - 1);

				//var curBlur;
				//if ($.browser.webkit) curBlur = $(this).css('-webkit-filter');
				//else curBlur = $(this).css('filter');
				//curBlur = curBlur.match(/[0-9.]+/);
				//curBlur = parseFloat(curBlur);
				//var newBlur = (curBlur + 0.25);
				//if(newBlur > 2) newBlur = 2;
				//if(newBlur < 0.5) newBlur = 0.8;

				$(this).css({
					'z-index': newZIndex,
					'transform':'scale(1)'
					//'-webkit-filter': 'blur('+newBlur+'px)',
					//'filter': 'blur('+newBlur+'px)'
				});
				//$(this).fadeOut(100);
			});
			var curWidth = this.$el.find('section#work_list #work_list_thumbs #'+this.currentItemOver+'_thumb').width();
			this.$el.find('section#work_list #work_list_thumbs #'+this.currentItemOver+'_thumb').css({
				'z-index':'99',
				'transform':'scale(1.1)'
				//'-webkit-filter': 'blur(0px)',
				//'filter': 'blur(0px)'
			});
			//this.$el.find('section#work_list #work_list_thumbs #'+this.currentItemOver+'_thumb').fadeIn(100);

			this.updateProjectColours(evt.currentTarget.id);

		},

		updateProjectColours: function(projectName) {
			//var elemsBg = $('.colourChangeBg'); // returns a nodeList
			//var arrayOfItemsToChangeBgColour = $.makeArray(elemsBg);

			//for (var i=0;i<arrayOfItemsToChangeBgColour.length;i++) {

			var itemToChange = $('header');

			itemToChange.attr('style','background-color:{{colour}}; color:{{textColour}};');
			//itemToChange.attr('style','background-color:{{colour}}; color:{{textColour}}').fadeIn("slow");
			var htmlToCompile = itemToChange.parent();
			var changeBgColourTemplate = Handlebars.compile( htmlToCompile.html());

			var projectModelData = ProjectsModel.get(projectName).toJSON();                                            //get project data
			var projectHTMLContent = changeBgColourTemplate(projectModelData);
			htmlToCompile.html(projectHTMLContent);

			//}

			var colour = $('header').css('background-color');
			var textColour = $('header').css('color');

			$('.colourChange').css({
				//'color': textColour,
				//'border-color': textColour
			});
			$('.colourChangeBg').css('background-color', colour);
			$('.thumb').css('border-color',colour);

			this.updateHeaderMouseEvents();

		},

		updateHeaderMouseEvents: function(){
			$('#head a').mouseover(_.bind(function(evt){
				this.onNavItemHover(evt);
			}, this));

			$('#head a').mouseout(_.bind(function(evt){
				this.onNavItemRolloff(evt);
			}, this));
		},

		onNavItemHover: function(evt) {
			var hoverItem = evt.currentTarget.id;
			if(hoverItem == 'nav_about') $('#head #title').html('Bio');
			else if(hoverItem == 'nav_work') $('#head #title').html('Work');
			else if(hoverItem == 'nav_notes') $('#head #title').html('Notes');
			else if(hoverItem == 'nav_contact') $('#head #title').html('Email me');
		},

		onNavItemRolloff: function() {
			$('#head #title').html('Simon Neveu');
		}

	});
});








