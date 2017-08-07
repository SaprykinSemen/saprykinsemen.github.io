$(document).ready(function() {

	

	$('.header-menu-btn').on('click', function() {	
		$('.header-nav-wrap').toggle();
	});

	$('.location-link').magnificPopup({
		type:'inline',
		midClick: true,
		alignTop: true,
	});
	
	$('.header-callback').magnificPopup({
		type:'inline',
		midClick: true,
		alignTop: true,
	});

	$('.header-enter-link').magnificPopup({
		type:'inline',
		midClick: true,
		alignTop: true,
	});
	
	$('.header-enter-link-registration').magnificPopup({
		type:'inline',
		midClick: true,
		alignTop: true,
	});

	$('.registration-form-btn').magnificPopup({
		items: {
			src: '.thank-registration-popup',
			type: 'inline',

		},
		closeBtnInside: true
	});
	$('.registration-form-btn').on('click', function() {	
		$('.thank-registration-popup').show();
	});

	$('.main-slider').bxSlider({
		pager: false,
		prevText: "",
		prevSelector: ".main-prev",
		nextText: "",
		nextSelector: ".main-next",
	});

	$('.sale-slider').bxSlider({
		auto: true,
		pause: 3000,
		autoHover: true,
		controls: false,
	});

});