define(["jquery","underscore","handlebars"],function($,_,Handlebars) {

	Handlebars.registerHelper('image', function(src, options) {

		if(_.isUndefined(options) ) options = src;

		var attribs = _.map(options.hash, function(value, key) {
				return key + "=\"" + value + "\"";
		});

		return new Handlebars.SafeString("<img class=\"projectImg\" src=\"" + Handlebars.Utils.escapeExpression(_.isFunction(src) ? src(this) : src) + "\" " + Handlebars.Utils.escapeExpression(attribs.join(" ")) + " />");
	});

});
