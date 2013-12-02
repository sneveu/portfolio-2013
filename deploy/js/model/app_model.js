
define(["backbone"],function (Backbone) {
		var model = Backbone.Model.extend({

				PAGES: {
						HOME: "HOME",
						ABOUT: "ABOUT",
						WORKLIST: "WORKLIST",
						WORKPIECE: "WORKPIECE"
				}

		});

		return new model();
});