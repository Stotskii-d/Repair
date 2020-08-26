$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function(){
		modal.addClass('modal_activ');
	});

	close.on('click', function() {
		modal.removeClass('modal_activ');
	});
});