// index.html

$(document).ready(function(){

  var $banner = $('#banner');
  var $bannerList = $('.bannerList'); //ul
  var $bannerImg = $bannerList.children(); // li
  var $bannerImgNum = $bannerImg.size() // li갯수
  var $dotList = $('.dotBtn').children(); // dot의 li들
  var $visualOverNum = 0; // $dotList.index($(this))
  // console.log($bannerImgNum);



  visualReset();



  function visualReset(){

    $bannerWidth = $banner.innerWidth()

    $bannerList.css({'width' : $bannerImgNum * $bannerWidth});
    $bannerImg.css({'width' : $bannerWidth});

    



  
  }








  // function onDotMove(){
    
  //   var $visualOverNum = $dotList.index($(this));
  //   console.log($visualOverNum);
    
  // }



})//document끝