// electroAudio.html

$(document).ready(function(){

  hobby();



})//document끝

function hobby(){

  var $hobbyLi = $('.hobby_list').children().outerWidth(true); //li의 가로값
   console.log($hobbyLi)// (137px)
  var $hobbySize = $('.hobby_list').children().size();
  //console.log($hobbySize) //16개
  $hobbyUl = $('.hobby_list'); //ul

  // var currentBook = 1;

  $hobbyUl.css({'width' : $hobbyLi * $hobbySize})
  console.log($hobbyUl.css('width'))  //2192px

  $hobbyUl.children().last().prependTo($hobbyUl);
  $hobbyUl.css({'marginLeft' : -$hobbyLi})


  //버튼이벤트
  $('.right').on('click', onNextSlide)
  $('.left').on('click', onPrevSlide)


  function onNextSlide(){
    // currentBook ++
    // console.log(currentBook)
    $hobbyUl.stop().animate({'marginLeft' : -$hobbyLi*2}, 500, function(){
      $hobbyUl.children().first().appendTo($hobbyUl);
      $hobbyUl.css({'marginLeft' : -$hobbyLi})
    }
      
    // $hobbyUl.children().eq(1).css({'background-image' : 'url(../images/electAudio_hobby_' + currentBook + '.png)'})

    // 두가지 방법이 있는데, 
    // 1. li의 width값 만큼 옆으로 미뤄주는것
    //     이때는 반드시! 값을 미뤄놓고 시작해야하며, $hobbyUl.css({'marginLeft' : -$hobbyLi})
    //     현재 백그라운드로 이미지가 들어가있기 때문에 
    //     각 li에 클래스를 주어, 순번이 바뀌는 것을 적용할 수 있도록 한다.
    //     왜냐하면 백그라운드에 nth-child는 해당하는 순번에 ... .png파일을 넣으라는 뜻이기 때문에
    //     li의 순번이 바뀌어도 이미지는 변하지 않는 성질때문이다.

    // 2. 백그라운드 No를   var currentBook = 1; 를 이용하여 png파일의 숫자를 변경해주는 것

    )}//onNextSlide

    function onPrevSlide(){
      $hobbyUl.stop().animate({'marginLeft' : 0}, 500, function(){
        $hobbyUl.children().last().prependTo($hobbyUl);
        $hobbyUl.css({'marginLeft': -$hobbyLi})
      })
    }

}//hobby