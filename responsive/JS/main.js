	$(function(){
		var menu=$('.slicknav_menu-menu');
		$('.slicknav_btn').click(function () {
			if(menu.is(':hidden')){
				menu.slideDown();
			} else {
				menu.slideUp();
			}
		})
	});
$(document).ready(function () {
	$('.tooltip').tooltipster();
})


