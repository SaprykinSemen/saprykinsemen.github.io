
$(document).ready(function(){



	var a = $('#timer-number-value-fc8d963fb638cdea94a552501c54e750-minutes').text();
	// var a = +a;
	// alert(a);
	if(a <= 0){
		$('.sale20').attr('attribute', 'value');
	}

	$('.header_nav_btn').on("click", function(){
		$(".header_nav_list").toggle();
	});


	$(function(){
		$('.main_booking_options_link').on("click", function(){
			if(!($(this).hasClass('main_booking_options_link_active'))){
				$('.main_booking_options_link').toggleClass('main_booking_options_link_active');
				$('.main_booking_options_form').toggleClass('main_booking_options_form_active');
			}			
		})
	});

	$( function() {
		var arr = [2,4,6,10,15,30];
		$( "#slider-time" ).slider({
			range: "max",
			min: 0,
			max: 5,
			// value: 0,
			slide: function( event, ui ) {
				$( "#time_amount" ).val(arr[ui.value]) ;
			},
			change: function( event, ui ) {
				input.val(arr[ui.value]) ;
			},
		});
		$( "#time_amount" ).val( $( "#slider-time" ).slider( "option", "value", 0 ) );
	} );


	$( function() {
    $( "#slider-certificate" ).slider({
      range: "max",
      min: 1,
      max: 5,
      value: 1,
      slide: function( event, ui ) {
        $( "#certificate_amount" ).val( ui.value );
      }
    });
    $( "#certificate_amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );

  	$( function() {
    $( "#slider-people" ).slider({
      range: "max",
      min: 1,
      max: 5,
      value: 1,
      slide: function( event, ui ) {
        $( "#people_amount" ).val( ui.value );
      }
    });
    $( "#people_amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );


	
	

});

