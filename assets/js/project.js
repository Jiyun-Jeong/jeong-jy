$(document).ready(function() {
  $('.bigMainCircle').addClass('up');
  setTimeout(function () {
    $('.bigMainCircle').removeClass('up').css({overflow: 'visible', top: '50%'}).stop().animate({left: '-200%'}, 2000);
    $('.bigMainCircle img').css({transition: 'none', left: '-20%'}).stop().animate({left: '230%'}, 2000);
  }, 1500);
});