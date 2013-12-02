define([
	"jquery",
	"underscore",
	"backbone"
], function (
	$,
	_,
	Backbone
) {
  return Backbone.View.extend({

		render: function() {

			//this.$el.find('section').hide();

			$('.colourChange').css({
				'color': '#efede3',
				'border-color': '#efede3'
			});
			//$('header').attr('style','background-color:#81bdbb;')
			$('.colourChangeBg, header').css('background-color', '#008954');
			$('.thumb').css('border-color','#008954');
			$('#about').show();
			$('#about').css('top','-'+($('#about_text').height()+105)+'px');

			var aboutHeight = this.$el.find('#about_text').height() + 105;
			var workListHeight = this.$el.find('#work_list').height() + 115;

			if (aboutHeight > workListHeight) {
				this.$el.find('#about').css('min-height', aboutHeight+'px');
			}
			else {
				this.$el.find('#about').css('min-height', workListHeight+'px');
			}


			this.$el.find('#about').animate({ top: '0' }, 500, "swing", function(){
				$(this).after( function(){
					$('#work_piece_text').hide();
				});
			});

			document.title = 'Simon Neveu — Digital';

		},

		transitionOut: function() {
			var aboutHeight = this.$el.find('#about').height() + 105;
			var windowHeight = $(window).height();

			if (aboutHeight > windowHeight) {
				this.$el.find('#about').animate({ top: '-'+aboutHeight+'px' }, 500, "swing");
			}
			else {
				this.$el.find('#about').animate({ top: '-'+windowHeight+'px' }, 500, "swing");
			}
		}
	});
});
