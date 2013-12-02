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

	var projectTemplate,projectHTML;

	return Backbone.View.extend({

		render: function(projectName) {

			if ( projectName === null ){
				var url = $(location).attr('href');
				var urlsplit = url.split("/");
				var projectInURL = urlsplit[4];
				projectName = projectInURL;

				var itemToChange = $('header');
				itemToChange.attr('style','background-color:{{colour}}; color:{{textColour}}');
				var htmlToCompile = itemToChange.parent();
				var changeBgColourTemplate = Handlebars.compile( htmlToCompile.html());

				var projectModelData = ProjectsModel.get(projectName).toJSON(); //get project data
				var projectHTMLContent = changeBgColourTemplate(projectModelData); //generate html content for project
				htmlToCompile.html(projectHTMLContent);
			}

			this.$el.find('section').hide();
			this.$el.find('section#work_piece').html('<div id="work_piece_text"><div id="title">{{title}}</div><div id="notes">{{#each notes}}<p>{{{ this notes}}}</p>{{/each}}</div><div id="info">{{#each project_info}}<p>{{this}}</p>{{/each}}</div><div id="roles"><em>Roles:</em>{{#each roles}}<p>&#9472; {{ this roles}}</p>{{/each}}</div><div id="images">{{#each images}}{{image this}}{{/each}}</div></div>');

			//# Setup project display template
			projectHTML = this.$el.find('section#work_piece'); //get project content template from projects content area
			projectTemplate = Handlebars.compile( projectHTML.html() ); //compile project content template

			var projectModelData = ProjectsModel.get(projectName).toJSON(); //get project data
			var projectHTMLContent = projectTemplate(projectModelData); //generate html content for project
			projectHTML.html(projectHTMLContent);

			var linkColour = $('header').css('background-color');
			$('.colourChangeBg').css('background-color', linkColour);
			this.$el.find('section#work_piece #work_piece_text #notes a').hover(function(){
				$(this).css('color', linkColour);
			}, function() {
				$(this).css('color', '#454240');
			});


			this.$el.find('section#work_piece').show();
			var pageTitle = $('#work_piece_text #title').html();
			document.title = 'Simon Neveu — '+pageTitle;


			$("html, body").animate({ scrollTop: 0 }, 500);

		}
	});
});
