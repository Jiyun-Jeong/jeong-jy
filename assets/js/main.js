$(document).ready(function () {
    $('#drag1Yes,  #drag2Yes').draggable({
        revert: 'invalid'
      });

    //드래그를 수락해주는 대상
	$('#drop1').droppable({
        accept : '#drag1Yes',        //수락해줄 대상을 지정
        drop : function () {        //drop이 완료된 후 실행할 실행문
            $(this).fadeOut().next().text('80%');
            $('#drag1Yes').hide();
        }
    });
	$('#drop2').droppable({
        accept : '#drag2Yes',        //수락해줄 대상을 지정
        drop : function () {        //drop이 완료된 후 실행할 실행문
            $(this).fadeOut().next().text('80%');
            $('#drag2Yes').hide();
        }
    });

});