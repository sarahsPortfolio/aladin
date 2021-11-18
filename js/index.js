// index.html

$(document).ready(function(){

  bannerSlide();



})//document끝


function bannerSlide(){

  $('.bannerList').slick({

    slideToShow : 1,
    centerPadding : '448px',
    centerMode : true, 
    autoplay : true,
    autoplaySpeed : 2000,
    arrows : false,
    dots : true,
  })
}