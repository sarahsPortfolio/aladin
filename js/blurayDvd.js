// blurayDvd.html

$(document).ready(function(){


  currentTime();


});//document끝




  // currentTime 시작 -------------
  function currentTime(){

    var currentDate = new Date(); // 현재시간

    var today = setInterval(function(){
      
      
      if(currentDate.getHours() > 12){
        var toDay = currentDate.getHours() -12;
        //console.log(currentDate.getHours()-12)

        var dateString  = 
        currentDate.getFullYear() + '. ' 
        + ( '0' + (currentDate.getMonth()+1) ).slice(-2) + '. ' 
        + ( '0' + (currentDate.getDate()) ).slice(-2) + '. '
        + ( '0' + toDay).slice(-2) + '시'
        +( '0' + (currentDate.getMinutes()) ).slice(-2) + '분';
      }
      else
        {
          var dateString  = 
          currentDate.getFullYear() + '. ' 
          + ( '0' + (currentDate.getMonth()+1) ).slice(-2) + '. ' 
          + ( '0' + (currentDate.getDate()) ).slice(-2) + '. '
          + ( '0' + (currentDate.getHours()) ).slice(-2) + '시'
          +( '0' + (currentDate.getMinutes()) ).slice(-2) + '분';
        }
        $('.today').children().text(dateString)
      
  
    })//date끝

  }//currentTime끝--------------------------