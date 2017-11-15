var deadline = 'November 23 2017 18:00 GMT+03:00';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  // var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   // 'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
   var t = getTimeRemaining(endtime);
   clock.innerHTML = '<div class = "timer_item timer_days_wrap">' + '<span class = "timer_days">' + t.days + '</span>' + '<span class = "timer_days_txt">дней</span>' + '</div>'+ 
   '<div class = "timer_item timer_hours_wrap">' + '<span class = "timer_hours">' + t.hours + '</span>' + '<span class = "timer_hours_txt">часов</span>' + '</div>' +
   '<div class = "timer_item timer_minutes_wrap">' + '<span class = "timer_minutes">' + t.minutes + '</span>' + '<span class = "timer_minutes_txt">минут</span>' + '</div>';
   if(t.total<=0){
    clearInterval(timeinterval);
   }
  },1000);
}

initializeClock('clockdiv', deadline);
