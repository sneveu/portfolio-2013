define([
	"jquery",
	"router",
	"controller/app_controller",
	"model/app_model",
	"model/projects_model",
	"view/about",
	"view/work_list",
	"view/work_piece",
	"util/view_helpers"
], function(
	$,
	Router,
	AppController,
	AppModel,
	ProjectsModel,
	AboutView,
	WorkListView,
	WorkPieceView,
	ViewHelpers
) {


	var projectsTemplate, projectsHTML;

		return {

			rootNode: $('#rootNode'),
			views:[],
			projectName: null,
			currentView: null,

			start: function() {

				//# Setup projects (title) templates
				projectsHTML = $('#work_list'); //get project item template from projects content area
				projectsTemplate = Handlebars.compile( projectsHTML.html() ); //compile project item template
				projectsHTML.html( projectsTemplate( {"projects": ProjectsModel.toJSON() } ) ); //create project content from project item template

				var workListThumbs = $('#work_list_thumbs_holder').text();
				$('#work_list_thumbs').html(workListThumbs);

				var workList = $('#work_list_holder').text();
				$('#work_list ul').html(workList);

				var header = $('#header_holder').text();
				$('#head').html(header);

				AppModel.on("change:page", this.onAppModelPage, this);


				Router.setRoutes( [
					["",                        AppModel.PAGES.ABOUT], //# Base url
					[/^([0-9]+)\/([0-9]+)$/,    AppModel.PAGES.ABOUT], //# Regexp example
					["home/:width/:height",     AppModel.PAGES.ABOUT], //# Variable example
					["about",                   AppModel.PAGES.ABOUT],
					["work",                    AppModel.PAGES.WORKLIST],
					["work/:project",           AppModel.PAGES.WORKPIECE]
				]);

				this.views[ AppModel.PAGES.ABOUT ] = new AboutView( { el: this.rootNode } );
				this.views[ AppModel.PAGES.WORKLIST ] = new WorkListView( {el: this.rootNode } );
				this.views[ AppModel.PAGES.WORKPIECE ] = new WorkPieceView( {el: this.rootNode } );

				Router.start();

				$('section#work_list a').mousedown(_.bind(function(evt){
					this.onWorkListItemClick(evt);
				}, this));

				$('#head a').mouseover(_.bind(function(evt){
					this.onNavItemHover(evt);
				}, this));

				$('#head a').mouseout(_.bind(function(evt){
					this.onNavItemRolloff(evt);
				}, this));

			},

			onAppModelPage: function ( model, page ) {

				if( this.currentView && this.currentView.transitionOut ) this.currentView.transitionOut();

				this.currentView = this.views[ page ];

				switch(page) {

					case AppModel.PAGES.ABOUT:
						this.currentView.render();
						break;

					case AppModel.PAGES.WORKLIST:
						this.currentView.render();
						break;

					case AppModel.PAGES.WORKPIECE:
						this.currentView.render(this.projectName);
						break;

				}
			},

			onWorkListItemClick: function(evt) {
				this.projectName = evt.currentTarget.id;

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
	};

});