$(document).ready(function() {
  $('.bigMainCircle').addClass('up');
  setTimeout(function () {
    $('.bigMainCircle').removeClass('up').css({overflow: 'visible', top: '50%'}).stop().animate({left: '-200%'}, 1000);
    $('.bigMainCircle img').css({transition: 'none', left: '-20%'}).stop().animate({left: '230%'}, 1000);
  }, 1500);
});