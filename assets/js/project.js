$(document).ready(function() {
  $('.bigMainCircle').addClass('up');
  setTimeout(function () {
    $('.bigMainCircle').removeClass('up').addClass('leftout');
  }, 1500);
});