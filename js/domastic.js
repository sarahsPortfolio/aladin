$(document).ready(function(){

  tabMenu();


  


})//document끝


// 1. tabMenu()
function tabMenu(){

  var $bigMenu = $('#bigMenu').find('a');
  var $smallUl = $('#smallMenu').children(); //#bigMenu의 ul들

  $smallUl.hide();
  $smallUl.eq(0).show();

  $bigMenu.eq(0).addClass('selected');//기본값


  $bigMenu.on('click', onMenu);
 
  function onMenu(){

    var $clickNum = $bigMenu.index($(this))
    // console.log($clickNum)
    $bigMenu.removeClass('selected')
    $(this).addClass('selected')
    
    $smallUl.hide();
    $smallUl.eq($clickNum).show();
    
    return false;

  }//onMenu

}//tabMenu