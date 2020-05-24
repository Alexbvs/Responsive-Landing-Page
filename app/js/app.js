$(function() {
	//mmenu start
	$('#my-menu').mmenu({
		extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="images/mi-logo.png" alt="mi logo image" style="width: 80px; height: auto; margin-top: 10px;">'
		}
	});

	//mmenu open-close
	var apiMmenu = $('#my-menu').data('mmenu');
	apiMmenu.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	})
})
