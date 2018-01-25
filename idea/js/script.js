$(document).ready(function(){
	$('.getin_form_success').hide();
	$('.main_slider').slick({
    // autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'main_slider_dots',
    responsive: [

    {
    	breakpoint: 600,
    	settings: {
    		dots: false,
    	}
    }
    ]
  });

	$('.comments_slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		dotsClass: 'comments_slider_dots',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.getin_form').submit(function(){
		$('.getin_form').hide();
		$('.getin_form_success').show();
		$('#new_msg').click(function(){
			$('.getin_form').show();
			$('.getin_form_success').hide();
		});
	})

	$('.main_menu_btn').click(function(){
		$('.main_menu').fadeToggle();
	});
});