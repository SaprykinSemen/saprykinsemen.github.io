new UISearch( document.getElementById( 'sb-search' ) );
$( ".sb-search-input" ).focus(function() {
	// $(".header_help").css({"display": "block",});
});

$( ".sb-search-input" ).blur(function() {
	// $(".header_help").css({"display": "none",});
});

$(document).ready(function(){


	
	$('.footer_subscribe_btn, .add_org_btn, .add_men_btn, .entity_icon, .login-form-pass_link, .callback_header_link').magnificPopup({
		type:'inline',
		midClick: true,
		alignTop: true,
	});


	(function($) {
		$(function() {

			$( function() {
				$( "#ordering_cont_tabs" ).tabs({
					active: 2
				});


				// $('.ordering_cont_cart_tab .ordering_cont_buttons_next').click(function(event) {
				// 	event.preventDefault();
				// 	$( "#ordering_cont_tabs" ).tabs( "option", "active", 1 );
				// })


				$('.ordering_cont_contacts_tab .ordering_cont_buttons_next').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 1 );
				})
				// $('.ordering_cont_contacts_tab .ordering_cont_buttons_prev').click(function(event) {
				// 	event.preventDefault();
				// 	$( "#ordering_cont_tabs" ).tabs( "option", "active", 0 );
				// })


				$('.ordering_cont_delivery_tab .ordering_cont_buttons_next').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 2 );
				})
				$('.ordering_cont_delivery_tab .ordering_cont_buttons_prev').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 0 );
				})


				$('.ordering_cont_payment_tab .ordering_cont_buttons_next').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 3 );
				})
				$('.ordering_cont_payment_tab .ordering_cont_buttons_prev').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 1 );
				})



				$('.ordering_cont_done_tab .ordering_cont_buttons_prev').click(function(event) {
					event.preventDefault();
					$( "#ordering_cont_tabs" ).tabs( "option", "active", 2 );
				})

				$( "#settings_org_tabs" ).tabs({
					active: 0
				});

				$( "#settings_men_tabs" ).tabs({
					active: 0
				});


			} );
			

		});
	})(jQuery);


	(function($) {
		$(function() {
			$('.table_count').styler();
			$('.catalog_head_select select').styler();
			$('.ordering_delivery_select select').styler();
			$('.ordering_payment_select').styler();
		});
	})(jQuery);



	$('.header-menu-btn').on('click', function() {	
		$('.header_menus').toggle();
	});

	// $('.header_menus a').on('click', function() {	
	// 	$('.header_menus').hide();
	// });

	$('.catalog_sidebar_button').on('click', function() {	
		$('.catalog_sidebar_content').toggle();
	});

	$('.entity_content-org2').on('click', function() {	
		$('.entity_popover').toggle();
	});

	$('.entity_popover_close-btn').on('click', function() {	
		$('.entity_popover').hide();
	});

	$('.rate').on('click', function() {	

		$('.rate_hide').toggle();
	});

	$(".contacts_application_show-btn").on('click', function() {	
		$(".contacts_application_show-btn").hide();
		$('.contacts_application_form').slideDown();
	});

	$('.contacts_application_form').on('submit', function() {		
		$('.contacts_application_form').slideUp();
		$(".contacts_application_show-btn").show();
	});

	$('.catalog_sidebar_menu_item a').on('click', function() {	
		$(this).siblings('.catalog_sidebar_submenu').toggle();
		$(this).parent('.catalog_sidebar_menu_item').toggleClass('catalog_sidebar_submenu_open');
	});


	$('.subscribe-form-submit').on('click', function() {	
		$('.subscribe-form-name, .subscribe-form-mail').addClass('subscribe-form_item_err');
		$('.subscribe-form-name').attr('placeholder', 'Введите имя');
		$('.subscribe-form-mail').attr('placeholder', 'Введите email');
	});

	$('.subscribe-form').submit(function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$(".subscribe-form").hide();
		$(".subscribe_popap").append('<p>Вы успешно подписались на рассылку, спасибо!</p>');
	});





$('.login-form-submit').on('click', function() {	
	$('.login-form-mail, .login-form-pass').addClass('subscribe-form_item_err');
	$('.login-form-mail').attr('placeholder', 'Введите email');
	$('.login-form-pass').attr('placeholder', 'Неверный пароль');
});

$('.recollect_login-form-submit').on('click', function() {	
	$('.recollect_login-form-mail').addClass('subscribe-form_item_err');
	$('.recollect_login-form-mail').attr('placeholder', 'Введите email');
});

$('.contacts_application_form_submit').on('click', function() {	
	$('.contacts_application_form .contacts_application_form_textarea, .contacts_application_form .contacts_application_form_input').addClass('subscribe-form_item_err');
	$('.contacts_form_input_name').attr('placeholder', 'Введите имя');
	$('.contacts_form_input_company').attr('placeholder', 'Введите название компании');
	$('.contacts_form_input_email').attr('placeholder', 'Введите email');
	$('.contacts_form_input_tel').attr('placeholder', 'Введите номер телефона');
});

$('.callback_application_form_submit').on('click', function() {	
	$('.callback_application_popap_form  .contacts_application_form_textarea, .callback_application_popap_form  .contacts_application_form_input').addClass('subscribe-form_item_err');
	$('.callback_form_input_name').attr('placeholder', 'Введите имя');
	$('.callback_form_input_company').attr('placeholder', 'Введите название компании');
	$('.callback_form_input_email').attr('placeholder', 'Введите email');
	$('.callback_form_input_tel').attr('placeholder', 'Введите номер телефона');
});

$('#add_org_popap .settings_add_popap_form_submit').on('click', function() {	
	$('#add_org_popap .settings_add_popap_form_item input, #add_org_popap .settings_add_popap_form_item textarea').addClass('subscribe-form_item_err');
	$('#add_org_popap .settings_add_popap_form_item input, #add_org_popap .settings_add_popap_form_item textarea').attr('placeholder', 'Заполните полe');
});

$('#add_men_popap .settings_add_popap_form_submit').on('click', function() {	
	$('#add_men_popap .settings_add_popap_form_item input, #add_men_popap .settings_add_popap_form_item textarea').addClass('subscribe-form_item_err');
	$('#add_men_popap .settings_add_popap_form_item input, #add_men_popap .settings_add_popap_form_item textarea').attr('placeholder', 'Заполните полe');
});



// CHECKBOXES

$('#catalog_sidebar_checkbox').on('click', function() {	
	if($('#catalog_sidebar_checkbox').prop('checked')) {
		$('.catalog_sidebar_txt').toggleClass('checkbox_txt_active');
	} else {
		$('.catalog_sidebar_txt').toggleClass('checkbox_txt_active');
	}
});

$('.catalog_table_city-choose').on('click', function() {	
	if($('.catalog_table_city-choose').prop('checked')) {
		$('.catalog_table_city_name').toggleClass('checkbox_txt_active');
	} else {
		$('.catalog_table_city_name').toggleClass('checkbox_txt_active');
	}
});


$('#shop_head_checkbox').on('click', function() {	
	if($('#shop_head_checkbox').prop('checked')) {
		$('.shop_options_name').toggleClass('shop_options_active');
	} else {
		$('.shop_options_name').toggleClass('shop_options_active');
	}
});


$('#contacts_head_checkbox').on('click', function() {	
	if($('#contacts_head_checkbox').prop('checked')) {
		$('.contacts_cities_msc, .contacts_cities_spb').toggleClass('contacts_cities_active');
		$('.contacts_cont_info_address').toggleClass('contacts_cont_info_address_active');
		$('#map1, #map2').toggleClass('map_active');
		$('.contacts_email').toggleClass('contacts_email_active');
		$('.contacts_phone').toggleClass('contacts_phone_active');
	} else {
		$('.contacts_cities_msc, .contacts_cities_spb').toggleClass('contacts_cities_active');
		$('.contacts_cont_info_address').toggleClass('contacts_cont_info_address_active');
		$('#map1, #map2').toggleClass('map_active');
		$('.contacts_email').toggleClass('contacts_email_active');
		$('.contacts_phone').toggleClass('contacts_phone_active');
	}
});



	//END CHECKBOXES



	$('.main_bxslider').bxSlider({
		pager: false,
  	// auto: true,
  	infiniteLoop: false,
  	hideControlOnEnd: true,
  });

	


	(function($) {
		$(function() {

			$('.table_count').styler();

		});
	})(jQuery);




	





});

