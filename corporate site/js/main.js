$('.slider').slick({
    dots:true
});
$('.clients-slider').slick({    
    dots: false,    
    infinite: true,     
    speed: 300,     
    slidesToShow: 6,    
    slidesToScroll: 1,
    arrows: false,
});
$('.clients-left').click(function () {
    $(".clients-slider").slick('slickPrev');
});

$('.clients-right').click(function () {
    $(".clients-slider").slick('slickNext');
});

$(function() {
    $('#dg-container').gallery();
});
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+100)/-10));  
  t = setTimeout('up()',20);  
} else clearTimeout(t);  
return false;  
}
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](250);           
    });
});