$(function(){

	$('#head a').mouseover(function(evt){
	    onNavItemHover(evt);
	}).mouseout(function(evt){
	    onNavItemRolloff(evt);
	});

	function onNavItemHover(evt) {
	    var hoverItem = evt.currentTarget.id;
	    console.log(hoverItem);
	    if(hoverItem == 'nav_about') $('#head #title').html('Bio');
	    else if(hoverItem == 'nav_work') $('#head #title').html('Work');
	    else if(hoverItem == 'nav_notes') $('#head #title').html('Notes');
	    else if(hoverItem == 'nav_contact') $('#head #title').html('Email me');
	}

	function onNavItemRolloff() {
	    $('#head #title').html('Simon Neveu');
	}

})

