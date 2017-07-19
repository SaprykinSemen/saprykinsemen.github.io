$(document).ready(function(){

$('.header-top-menu-mobile-button').on('click', function() {
	var position = $('#menu-select :selected').val();
	$('.header-top-menu > li').eq(position).children('ul').toggle(
		);	
});




jQuery('.bxslider-solutions').bxSlider({
	auto: true,
	controls: false,
	pagerType: 'full',
	pagerSelector: '.bxslider-solutions-pager-wrap'
});



jQuery('.bxslider-offers').bxSlider({
	slideWidth: 204,
  // slideMargin: 40,
  moveSlides: 1,
  minSlides: 2,
  maxSlides: 5,
  // adaptiveHeight: true,
  controls: true,  
  nextSelector: '.bxslider-offers-next',
  prevSelector: '.bxslider-offers-prev',
  nextText: '',
  prevText: '',
  pager: false
});
jQuery('.bxslider-bestsellers').bxSlider({
	slideWidth: 204,
  // slideMargin: 40,
  moveSlides: 1,
  minSlides: 2,
  maxSlides: 5,
  // adaptiveHeight: true,
  controls: true,  
  nextSelector: '.bxslider-bestsellers-next',
  prevSelector: '.bxslider-bestsellers-prev',
  nextText: '',
  prevText: '',
  pager: false
});


$( function() {
	var count = 0;
	$('.special-button').on('click', function(){
		if(count < 3){
			count++;
		}else{
			count = 0;
		}
		$( "#tabs" ).tabs({
			active: count
		});
	});

	$( "#tabs" ).tabs({
		active: count
	});
} );
});