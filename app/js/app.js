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

	// owlCarousel initialized for correct height calculation
	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService()
		}, 100);
	});

	// owlCarousel start
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>' , '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}, 800: {
				items: 2
			}, 1100: {
				itens: 3
			}
		}
	});

	// owlCarousel height calculation
	function carouselService() {
		$('.carousel-services-item').each (function() {
			let ths = $(this),
				thsh = ths.find('.carousel-services-composition').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	} carouselService();

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0:{
				autoHeight: true
			}, 500: {
				autoHeight: false
			}
		}
	});

	$('.partners').owlCarousel({
		loop: true,
		items: 4,
		smartSpeed: 700,
		dots: false,
		autoplay: true,
    	autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}, 768: {
				items: 2
			}, 992: {
				items: 3
			}, 1200: {
				items: 4
			},
		}
	});
})
