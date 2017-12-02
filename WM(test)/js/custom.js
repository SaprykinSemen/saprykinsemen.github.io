
$(document).ready(function(){


	$(".header_nav_btn").click(function(){
		$('.header_nav_menu').toggle(200);
	});



	

 $( function() {
 	$( "#datepicker" ).datepicker({
 		dateFormat: "dd.mm.yy",
 		showOn: "button",
 		buttonImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAMAAAA1k+1bAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAS1BMVEVDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZNDWZP///98sairAAAAF3RSTlMAAnm1BjvWIwrYtjzycxl/Qn4k9qhGrEUwrroAAAABYktHRBibaYUeAAAACXBIWXMAAAsSAAALEgHS3X78AAAARklEQVQI103MSRaAIAxEwe+MgvOQ+98UMORpb9KVRQMVltzqpi3q+gE3yqT2QWZYipPW/FWb1FuQ3RaT5RMcp1z8cj/uvRGwSALtH6uyOgAAAABJRU5ErkJggg==',
 		buttonImageOnly: true,
 	});    
 } );


 $( function() {
 	$( "#level_slider" ).slider({
 		range: "max",
 		min: 1,
 		max: 4,
 		value: 2,
      // }
    });
 } );


 $(".header_nav_menu_link").on("click", function (event) {
 	$(".header_nav_menu_link").removeClass('header_nav_menu_link__active');
 	$(this).addClass('header_nav_menu_link__active');
 	event.preventDefault();
 	var id  = $(this).attr('href');
 	var top = $(id).offset().top;
 	$('body,html').animate({scrollTop: top}, 1500);
 });




});

