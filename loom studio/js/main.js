
$(function(){
    $('.header-menu').slicknav({
        prependTo: '.mobile-menu'
    });
    $('.slicknav_nav').addClass('clearfix');
    $('.slicknav_btn').append('<i class="fa fa-bars" aria-hidden="true"></i>')
});


$(document).ready(function(){
    $('.slider-wrap').slick({
        dots: false
    });
});